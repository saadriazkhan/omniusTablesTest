import { Injectable } from '@angular/core';
import { config } from './configuration.config';

@Injectable()
export class ConfigurationService {

	constructor() { }

	getTableConfig() {
		return config;
	}
}
