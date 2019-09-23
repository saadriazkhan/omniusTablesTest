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
	@Input() filterConfig?: { enabled: boolean, filtersEnabled: { equals: boolean, range: boolean } } = {
		enabled: true,
		filtersEnabled: {
			range: true,
			equals: true
		}
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

		if (this.fromValue.value != null && this.toValue.value != null) {
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
