import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { I18nService } from '../../../../i18n/i18n.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
	searchClearButtonDisabled: boolean = true;

	searchSubject = new Subject();
	languageConfig: any = {};
	constructor(private languageService: I18nService) {
		this.languageConfig = this.languageService.getLocaleConfig();
		this.searchSubject
			.pipe(debounceTime(400), distinctUntilChanged())
			.subscribe(data => {
				this.onSubmit();
			});
	}

	onSubmit(): void {
		(this.searchValue.value.length > 0) ?
			this.searchValueEmitter.emit(this.searchValue.value) : this.clearSearch();
	}

	checkForValue() {
		this.searchSubject.next(this.searchValue.value);
		this.searchButtonDisabled = (this.searchValue.value == "") ? true : false;
		this.searchClearButtonDisabled = (this.searchValue.value == "") ? true : false;
	}

	clearSearch(): void {
		this.searchButtonDisabled = true;
		this.searchClearButtonDisabled = false;
		this.searchValue.setValue("");
		this.resetSearchEmitter.emit("");
	}
}
