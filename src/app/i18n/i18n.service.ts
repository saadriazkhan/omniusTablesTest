import { Injectable } from '@angular/core';
import { locale, availableLanguages, availableCurrencies } from './translation.config';

@Injectable({
	providedIn: 'root'
})
export class I18nService {
	constructor() { }

	private currentLanguage = "EN";

	setCurrentLanguage(langauge: string): void {
		this.currentLanguage = langauge;
	}

	getavailableLanguages(): string[] {
		return availableLanguages;
	}

	getLocaleConfig() {
		return locale[this.currentLanguage];
	}

	getLocaleCurrency(): string {
		return availableCurrencies[this.currentLanguage];
	}
}
