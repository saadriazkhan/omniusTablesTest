import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sort, SortOrder } from '../models/sort';

@Component({
	selector: 'app-sorting',
	templateUrl: './sorting.component.html',
	styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {

	@Input() field: string = "";
	@Input() config = { // default
		enabled: true,
		sortingContainerClass:'',
		sortingButtonClass: 'px-2 white-button py-1',
		sortingUpClass:'fa fa-caret-up',
		sortingDownClass:'fa fa-caret-down',
	};

	@Output() sortingEmitter = new EventEmitter<Sort>();

	selectedSortOrder: number = 1;

	constructor() { }

	applySorting() {
		this.selectedSortOrder++;
		this.selectedSortOrder = (this.selectedSortOrder > 3) ? 1 : this.selectedSortOrder;

		this.sortingEmitter.emit({
			field: this.field,
			method: SortOrder[this.selectedSortOrder - 1]
		});
	}

}
