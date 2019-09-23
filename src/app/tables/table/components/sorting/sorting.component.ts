import { Component, Input, Output, EventEmitter } from '@angular/core';

enum SortOrder {
	"NONE",
	"ASC",
	"DESC"
}
@Component({
	selector: 'app-sorting',
	templateUrl: './sorting.component.html',
	styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {

	@Input() fieldName: string = "";
	@Input() sortingEnabled?: boolean = true;

	@Output() sortingEmitter = new EventEmitter<{ fieldName: string, sortOrder: string }>();

	selectedSortOrder: number = 1;

	constructor() { }

	applySorting() {
		this.selectedSortOrder++;
		this.selectedSortOrder = (this.selectedSortOrder > 3) ? 1 : this.selectedSortOrder;
		console.log({
			fieldName: this.fieldName,
			sortOrder: SortOrder[this.selectedSortOrder - 1]
		});

		this.sortingEmitter.emit({
			fieldName: this.fieldName,
			sortOrder: SortOrder[this.selectedSortOrder - 1]
		});
	}

}
