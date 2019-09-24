import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {

	@Input() placeholder?: string = "";
	@Input() config = { // default
		searchEnabled: true,
		searchContainerClass: '',
		formContainerClass: '',
		inputClass: '',
		buttonClass: '',
		clearButtonClass: ''
	};

	@Output() searchValueEmitter = new EventEmitter<string>();
	@Output() resetSearchEmitter = new EventEmitter();

	searchValue = new FormControl('');
	searchButtonDisabled: boolean = true;

	constructor() { }

	onSubmit(): void {
		(this.searchValue.value.length > 0) ?
			this.searchValueEmitter.emit(this.searchValue.value) : this.clearSearch();
	}

	checkForValue() {
		this.searchButtonDisabled = (this.searchValue.value == "") ? true : false;
	}

	clearSearch(): void {
		this.searchButtonDisabled = true;
		this.searchValue.setValue("");
		this.resetSearchEmitter.emit();
	}
}
