import { Injectable } from '@angular/core';
import { locale, availableLanguages } from './translation.config';

@Injectable({
	providedIn: 'root'
})
export class I18nService {
	constructor() { }

	getavailableLanguages(): string[] {
		return availableLanguages;
	}

	getLocaleConfig() {
		return locale["EN"];
	}
}
