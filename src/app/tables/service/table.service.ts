import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

	constructor() { }

	// assuming that the data would be coming as a JSON response from the API
	getData(): {}[] {

		let responseData = [
			{ name: "Saad", hasMobile: true, contact: "033", location: "Islamabad", subject: "Maths", carName: "Honda" },
			{ name: "Hamza", hasMobile: false, contact: "9234", location: "Lahore", subject: "Physics", carName: "Ford" },
			{ name: "Abid", hasMobile: false, contact: "546", location: "Karachi", subject: "Chemistry", carName: "Suzuki" },
			{ name: "Farhat", hasMobile: true, contact: "2342", location: "Berlin", subject: "Maths", carName: "Nissan" },
			{ name: "Riaz", hasMobile: true, contact: "435345", location: "Munich", subject: "Physics", carName: "Merc" },
			{ name: "Muhammad", hasMobile: false, contact: "6785", location: "Paris", subject: "History", carName: "Honda" },
			{ name: "Khan", hasMobile: true, contact: "346554", location: "Barcelona", subject: "Science", carName: "BMW" }
		]
		return responseData;
	}
}
