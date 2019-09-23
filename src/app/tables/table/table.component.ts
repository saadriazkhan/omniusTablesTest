import { Component, OnInit, Input } from '@angular/core';
import { Filter } from './components/models/filter';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	@Input() tableData: {}[] = [];
	@Input() configs: {} = {}; // defalut config define here


	pageSizes: number[] = [10, 20, 30, 40];
	constructor() { }

	ngOnInit() {
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

}
