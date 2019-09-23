import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {

	@Input() placeholder?: string = "";
	@Input() searchEnabled?: boolean = true;

	@Output() searchValueEmitter = new EventEmitter<string>();
	@Output() resetSearchEmitter = new EventEmitter();

	searchValue = new FormControl('');

	constructor() { }

	onSubmit(): void {
		(this.searchValue.value.length > 0) ?
			this.searchValueEmitter.emit(this.searchValue.value) : this.clearSearch();
	}

	clearSearch(): void {
		this.searchValue.setValue("");
		this.resetSearchEmitter.emit();
	}
}
