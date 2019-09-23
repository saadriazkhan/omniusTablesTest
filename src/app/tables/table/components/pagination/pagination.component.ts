import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() pages: number = 5; // random page count atm
	@Input() pageSizes: number[] = [25, 50, 75, 100];

	@Input() config: { pageSizesEnabled: boolean, paginationEnabled: boolean } = {
		pageSizesEnabled: true,
		paginationEnabled: true
	};

	@Output() pageChangeEmitter = new EventEmitter<number>();
	@Output() pageSizeChangeEmiiter = new EventEmitter<number>();

	pageSelected: number = 1;
	selectedPageSize: number = this.pageSizes[0]; // default

	constructor() { }

	ngOnInit() {
		this.selectedPageSize = this.pageSizes[0];
	}

	changePageSize(): void {
		this.pageSizeChangeEmiiter.emit(this.selectedPageSize);
	}

	changePage(page: number): void {
		this.pageChangeEmitter.emit(page);
	}

	givePagesArray(pages: number): number[] {
		return new Array(pages);
	}

}
