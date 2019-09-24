import { Component, OnInit, Input } from '@angular/core';
import { Filter } from './components/models/filter';
import { Sort } from './components/models/sort';
import { Tables, Utility } from './components/models/table.class';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements Tables {

	@Input() tableData = [];
	@Input() tablesConfig = {};

	config = { // default
		theme: 'primary',
		pageSizes: [5, 10, 15, 20],
		editTableButtonClass: 'px-2',
		editTableButtonContainerClass: '',
		hideColumnButtonClass: 'px-1 py-1 has-font-4',
		showColumnButtonClass: 'px-1 py-1 has-font-4',
		hideColumnButtonIconClass: 'fa fa-minus',
		showColumnButtonIconClass: 'fa fa-plus',
		tableContainerClass: 'is-10',
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

	constructor() {
	}

	ngOnInit() {
		this.config = this.tablesConfig['TableConfig']; // over writes the default
		this.pageSizes = this.config['pageSizes'];

		this.saveTableSubject.pipe(debounceTime(400), distinctUntilChanged()).subscribe(data => {
			console.log(data);
		}, error => {
			console.log(error);
		});
	}

	filterData(filter: Filter) {
		console.log(filter);
	}

	resetFilterData(filter: Filter) {
		console.log(filter);
	}

	pageChange($event: number): void {
		console.log("pageChange", $event);
	}

	pageSizeChange($event: number): void {
		console.log("pageSIZEChange", $event);
	}

	searchInData(searchTerm: string): void {
		console.log(searchTerm);
	}

	resetSearchForData(): void {
		console.log("reset search");
	}

	sortData(sort: Sort): void {
		console.log(sort);
	}

	editTable(): void {
		this.editEnabled = !this.editEnabled;
	}

	saveTableData($event, rowIndex: number, columnIndex: number): void {
		this.saveTableSubject.next({
			value: $event.target.textContent,
			rowIndex,
			columnIndex
		});
	}

	hideColumn(column: string): void {
		console.log(column);
		this.hiddenColumnsArray.push(column);
	}

	showColumn(column: string): void {
		// this.hiddenColumnsArray.find(value => value == column)
		this.hiddenColumnsArray = this.hiddenColumnsArray.filter(value => {
			return value != column
		});
	}
}
