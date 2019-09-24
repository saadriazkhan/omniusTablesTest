import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

	@Input() fieldName: string = "";
	@Input() config = { // default
		enabled: true,
		rangeEnabled: true,
		equalsEnabled: true,
		filterButtonClass: 'ml-2 px-2 py-1 white-button',
		dropdownContainerClass: 'p-4 has-border-radius-2',
		formContainerClass: 'p-2',
		formFilterClass: 'is-4',
		formFilterButton: 'mt-4',
		formClearButton: '',
		formInputClass:''
	};

	@Output() resetFilterEmitter = new EventEmitter<Filter>();
	@Output() filterSelectedEmitter = new EventEmitter<Filter[]>();


	equalValue = new FormControl('');
	fromValue = new FormControl('');
	toValue = new FormControl('');

	showDropdown = false;

	constructor() { }

	onSubmit() {
		this.showDropdown = false;
		const filterArray: { fieldName: string, method: string, parameters: string | number[] }[] = [];

		if (this.equalValue.value.length > 0) {
			filterArray.push({
				fieldName: this.fieldName,
				method: "EQUALS",
				parameters: this.equalValue.value
			});
		}

		if (this.fromValue.value != "" && this.toValue.value != "") {
			filterArray.push({
				fieldName: this.fieldName,
				method: "RANGE",
				parameters: [this.fromValue.value, this.toValue.value]
			});
		}
		console.log(filterArray);
		this.filterSelectedEmitter.emit(filterArray);
	}

	clearFilter() {
		this.equalValue.setValue('');
		this.toValue.setValue('');
		this.fromValue.setValue('');
		this.resetFilterEmitter.emit({ fieldName: this.fieldName });
	}
}
