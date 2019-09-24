import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../models/filter';
import { I18nService } from '../../../../i18n/i18n.service';

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
		formInputClass: ''
	};

	@Output() resetFilterEmitter = new EventEmitter<Filter>();
	@Output() filterSelectedEmitter = new EventEmitter<Filter[]>();

	showDropdown = false;

	form;
	filterButtonDisabled: boolean = true;

	languageConfig: any = {};
	constructor(private languageService: I18nService, private formBuilder: FormBuilder) {
		this.languageConfig = this.languageService.getLocaleConfig();

		this.form = formBuilder.group({
			equalValue: new FormControl('', Validators.required),
			fromValue: new FormControl(''),
			toValue: new FormControl('')
		});
		this.form.valueChanges.subscribe(data => {
			this.filterButtonDisabled = (data.equalValue == "" && data.fromValue == "" && data.toValue == "") ? true : false;
		});
	}

	onSubmit() {
		this.showDropdown = false;
		const filterArray: { fieldName: string, method: string, parameters: string | number[] }[] = [];

		if (this.form.get('equalValue').value.length > 0) {
			filterArray.push({
				fieldName: this.fieldName,
				method: "EQUALS",
				parameters: this.form.get('equalValue').value
			});
		}

		if (this.form.get('fromValue').value != "" && this.form.get('toValue').value != "") {
			filterArray.push({
				fieldName: this.fieldName,
				method: "RANGE",
				parameters: [this.form.get('fromValue').value, this.form.get('toValue').value]
			});
		}
		console.log(filterArray);
		this.filterSelectedEmitter.emit(filterArray);
	}

	clearFilter() {
		this.form.equalValue.setValue('');
		this.form.toValue.setValue('');
		this.form.fromValue.setValue('');
		this.resetFilterEmitter.emit({ fieldName: this.fieldName });
	}
}
