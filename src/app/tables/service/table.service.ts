import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Sort } from '../table/components/models/sort';
import { Filter } from '../table/components/models/filter';
import { DataTableValue } from '../table/components/models/dataTableValue';
import { ConfigurationService } from 'src/app/configuration/configuration.service';

interface APIQueryParams {
	pageSize?: number
	cursor?: string
	search?: string
	sort?: Sort[],
	filter?: Filter[]
}

@Injectable()
export class TableService {

	queryParams: APIQueryParams = {
		pageSize: 1,
		cursor: "",
		search: "",
		sort: [],
		filter: [],
	};

	tableDataSubject = new Subject();
	routeSubject = new Subject();

	apiUrl = "";
	constructor(private http: HttpClient, private configrationService: ConfigurationService) {
		this.apiUrl = environment.apiUrl;
		this.queryParams.cursor = this.configrationService.getPrimaryKey();
	}


	private fetchData(apiUrl: string): Observable<any> {
		return this.http.get(apiUrl);
	}

	// assuming that the data would be coming as a JSON response from the API
	getData(queryParamsFormatted?: string): void {
		const url = (queryParamsFormatted) ? this.apiUrl + "?" + queryParamsFormatted : this.apiUrl;
		console.log(url);
		
		this.fetchData(url).subscribe(data => {
			console.log(data);
			this.tableDataSubject.next(data['responseData']);
		}, error => {
			console.log(error);
			console.log(this.tableDataSubject.next([]));
		});
	}

	generateUrl() {
		console.log(this.queryParams);
		const generatedQueryParams: APIQueryParams = { // copying by value
			pageSize: this.queryParams.pageSize,
			cursor: this.queryParams.cursor,
			search: this.queryParams.search,
			sort: this.queryParams.sort,
			filter: this.queryParams.filter
		};
		if (this.queryParams.sort.length == 0) {
			delete generatedQueryParams.sort;
		}
		if (this.queryParams.filter.length == 0) {
			delete generatedQueryParams.filter;
		}
		if (this.queryParams.search == "") {
			delete generatedQueryParams.search;
		}
		this.routeSubject.next(generatedQueryParams);

		this.getData(this.paramsMaptoUrlString(generatedQueryParams));
	}

	paramsMaptoUrlString(queryParams: APIQueryParams): string {
		let url = "";
		Object.keys(queryParams).forEach(key => {
			url = url + key + "&" + JSON.stringify(queryParams[key]) + "&";

		});
		url = url.replace(/"/g, '');
		return url.substring(0, url.length - 1);
	}

	sort(sortField: Sort): void {
		const array = this.queryParams.sort.filter(value => (value.field != sortField.field));
		if (sortField.method != "NONE") {
			array.push(sortField);
		}
		this.queryParams.sort = array;
		this.generateUrl();
	}

	search(searchTerm: string): void {
		this.queryParams.search = searchTerm;
		this.generateUrl();
	}

	filter(filterArray: Filter[]): void {
		let array = [];
		filterArray.forEach(filter => {
			array = this.queryParams.filter.filter(value => (value.field != filter.field));
		});

		filterArray.forEach(element => {
			if (element.hasOwnProperty("method")) {
				array.push(element);
			}
		});
		this.queryParams.sort = array;
		this.generateUrl();
	}

	pageChange($event: number): void {
		console.log($event);
		this.generateUrl();
	}

	pageSizeChange(pageSize: number): void {
		console.log(pageSize);
		this.queryParams.pageSize = pageSize;
		this.generateUrl();
	}

	saveTableData(data: DataTableValue[]) {
		console.log(data);
		console.log("API to be called from here");
		
	}


}
