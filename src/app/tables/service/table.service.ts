import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TableService {

	constructor(private http: HttpClient) { }

	private fetchData(apiUrl: string) {
		return this.http.get(apiUrl);
	}

	tableDataSubject = new Subject();

	// assuming that the data would be coming as a JSON response from the API
	getData() {
		this.fetchData(environment.apiUrl).subscribe(data => {
			console.log(data);
			this.tableDataSubject.next(data['responseData']);
		}, error => {
			console.log(error);
			console.log(this.tableDataSubject.next([]));
		});
	}

	sortEvent($event) {
		console.log($event);
	}

	searchEvent($event) {
		console.log($event);
	}

	filterEvent($event) {
		console.log($event);
	}

	pageChangeEvent($event) {
		console.log($event);
	}

	pageSizeChageEvent($event) {
		console.log($event);
	}

}
