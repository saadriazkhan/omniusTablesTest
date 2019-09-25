import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from './components/models/filter';
import { Sort } from './components/models/sort';
import { Tables, Utility } from './components/models/utility.class';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { I18nService } from '../../i18n/i18n.service';
import { ConfigurationService } from 'src/app/configuration/configuration.service';
import { DataTableValue } from './components/models/dataTableValue';


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements Tables {
	config = { // default
		theme: 'primary',
		pageSizes: [5, 10, 15, 20],
		defaultPageSize: 5,
		editTableButtonClass: 'px-2',
		editTableButtonContainerClass: '',
		hideColumnButtonClass: 'px-1 py-1 has-font-4',
		showColumnButtonClass: 'px-1 py-1 has-font-4',
		hideColumnButtonIconClass: 'fa fa-remove',
		showColumnButtonIconClass: 'fa fa-plus',
		tableContainerClass: '',
		tableHeadContainerClass: 'p-2',
		tableHeaderTextClass: '',
		tableHeaderItemClass: 'p-2 text-center has-height-10',
		tableRowCheckboxClass: 'button',
		tableBodyContainerClass: '',
		tableRowClass: 'p-2',
		tableRowDataClass: 'p-2 text-center',
		tableRowEditInputClass: 'p-0'
	};

	editEnabled: boolean = false;
	pageSizes: number[] = [10, 20, 30, 40];
	hiddenColumnsArray = [];

	utility = new Utility();
	saveTableSubject = new Subject();
	languageConfig: any = {};
	tableData = [];

	@Input() tablesConfig = {};
	@Input() tableDataSubject = new Subject();

	@Output() sortEventEmitter = new EventEmitter();
	@Output() searchEventEmitter = new EventEmitter();
	@Output() filterEventEmitter = new EventEmitter();
	@Output() pageChangeEventEmitter = new EventEmitter();
	@Output() pageSizeChangeEventEmitter = new EventEmitter();
	@Output() saveTableEmitter = new EventEmitter();
	@Output() onDataLoadStartedEmitter = new EventEmitter();
	@Output() onDataLoadSucceededEmitter = new EventEmitter();
	@Output() onDataLoadFailedEmitter = new EventEmitter();

	constructor(private languageService: I18nService, private configurationService: ConfigurationService) {
		this.languageConfig = this.languageService.getLocaleConfig();
	}

	objectKeys = [];

	saveTableDataArray: DataTableValue[] = [];

	ngOnInit() {
		this.config = this.tablesConfig['TableConfig']; // over writes the default
		this.pageSizes = this.config['pageSizes'];
		this.pageSizeChange
		// -------------------------------
		this.saveTableSubject
			.pipe(debounceTime(400), distinctUntilChanged())
			.subscribe(
				(data: DataTableValue) => {
					console.log(data);
					this.saveTableDataArray = this.addUniquely(data, this.saveTableDataArray);
				},
				error => {
					console.log(error);
				});
		// -------------------------------

		this.tableDataSubject.subscribe((data) => {
			this.objectKeys = ((data as Object[]).length > 0) ? Object.keys(data[0]) : [];
			this.tableData = this.transformData(data as Object[]);
			this.onDataLoadSucceededEmitter.emit("Data loaded.");
		}, error => {
			console.log(error);
			this.onDataLoadFailedEmitter.emit("Data loading failed.");
		});

		this.loadData();
	}

	loadData() {
		this.onDataLoadStartedEmitter.emit("Loading data..");
	}

	addUniquely(dataObject: DataTableValue, array: DataTableValue[]): DataTableValue[] {
		const filteredArray = array.filter(value => ((dataObject.column == value.column) && dataObject.row == value.row));
		filteredArray.push(dataObject);
		return filteredArray;
	}

	// emitters ------------------------
	filterData(filter: Filter[]): void {
		this.loadData();
		this.filterEventEmitter.emit(filter);
	}

	resetFilterData(filter: Filter): void {
		this.loadData();
		this.filterEventEmitter.emit([filter]);
	}

	pageChange(pageNumber: number): void {
		this.loadData();
		this.pageChangeEventEmitter.emit(pageNumber);
	}

	pageSizeChange(pageSize: number): void {
		this.loadData();
		this.pageSizeChangeEventEmitter.emit(pageSize);
	}

	searchData(searchTerm: string): void {
		this.loadData();
		this.searchEventEmitter.emit(searchTerm);
	}

	resetSearch(): void {
		this.loadData();
		this.searchEventEmitter.emit("");
	}

	sortData(sort: Sort): void {
		this.loadData();
		this.sortEventEmitter.emit(sort);
	}

	// this function emits in ngOnInit
	saveTableData($event: any, rowIndex: number, columnIndex: number): void {
		const previousValue = this.tableData[rowIndex][this.objectKeys[columnIndex]];
		this.saveTableSubject.next({
			value: (!this.utility.isBoolean(previousValue)) ? $event['target']['textContent'].toString().trim() : $event['target']['checked'].toString().trim(),
			rowIndex,
			columnIndex
		});
	}

	// emitters ------------------------

	toggleEditMode() {
		this.editEnabled = !this.editEnabled;
		if (this.editEnabled == false) {
			this.loadData();
			this.saveTableEmitter.emit(this.saveTableDataArray);
			this.saveTableDataArray = [];
		}
	}

	hideColumn(column: string): void {
		this.hiddenColumnsArray.push(column);
	}

	showColumn(column: string): void {
		this.hiddenColumnsArray = this.hiddenColumnsArray.filter(value => {
			return value != column;
		});
	}

	transformData(data: Object[]): Object[] {
		const currency = this.languageService.getLocaleCurrency();
		const dataColumnsTypes = this.configurationService.getDataColumnsTypes();

		const newData = [];
		if (data.length > 0) {
			const keys: string[] = Object.keys(data[0]);
			const formattingMap = this.configurationService.getFormattingMap();

			data.forEach(row => {
				let formattedData = {};
				keys.forEach(key => {
					// special case
					formattedData[key] = (dataColumnsTypes[key] == "currency") ? formattingMap[dataColumnsTypes[key]](row[key], currency) : formattingMap[dataColumnsTypes[key]](row[key]);
				});
				newData.push(formattedData);
			});
		}
		return newData;
	}
}
