import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { I18nService } from '../../../../i18n/i18n.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() pages: number = 1; // default
	@Input() pageSizes: number[] = [25, 50, 75, 100];

	@Input() config = { // default
		pageSizesEnabled: true,
		paginationEnabled: true,
		buttonClass: 'secondary-button mx-2 py-2 px-5',
		pageSizeClass: 'primary-button mr-10',
		pagesText: 'has-font-6 px-3 mt-2'
	};

	@Output() pageChangeEmitter = new EventEmitter<number>();
	@Output() pageSizeChangeEmiiter = new EventEmitter<number>();

	pageSelected: number = 1;
	selectedPageSize: number = this.pageSizes[0]; // default

	languageConfig: any = {};
	constructor(private languageService: I18nService) {
		this.languageConfig = this.languageService.getLocaleConfig();
	}

	ngOnInit() {
		this.selectedPageSize = this.pageSizes[0];
	}

	changePageSize(): void {
		this.pageSizeChangeEmiiter.emit(this.selectedPageSize);
	}

	changePage(page: number): void {
		this.pageSelected = page;
		this.pageChangeEmitter.emit(page);
	}

	givePagesArray(pages: number): number[] {
		return new Array(pages);
	}

}
