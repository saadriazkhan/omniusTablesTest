import { Injectable } from '@angular/core';
import { config } from './configuration.config';
import { dataColumnsTypes, formattingMap } from './configuration-table.config';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {

	constructor() { }

	getTableConfig() {
		return config;
	}

	getDataColumnsTypes() {
		return dataColumnsTypes;
	}

	getFormattingMap() {
		return formattingMap;
	}

}
