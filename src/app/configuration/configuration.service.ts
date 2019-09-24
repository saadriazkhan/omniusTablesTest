import { Injectable } from '@angular/core';
import { config } from './configuration.config';

@Injectable({
	providedIn: 'root'
})
export class ConfigurationService {

	constructor() { }

	getTableConfig() {
		return config;
	}
}
