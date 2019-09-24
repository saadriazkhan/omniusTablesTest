import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

	constructor() { }

	// assuming that the data would be coming as a JSON response from the API
	getData(): {}[] {

		let responseData = [
			{ id: 1, name: "Saad", hasMobile: true, amount: "2333", location: "Islamabad", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ id: 2, name: "Hamza", hasMobile: false, amount: "9234", location: "Lahore", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Ford" },
			{ id: 3, name: "Abid", hasMobile: false, amount: "546", location: "Karachi", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Suzuki" },
			{ id: 4, name: "Farhat", hasMobile: true, amount: "2342", location: "Berlin", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Nissan" },
			{ id: 5, name: "Riaz", hasMobile: true, amount: "435345", location: "Munich", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Merc" },
			{ id: 6, name: "Muhammad", hasMobile: false, amount: "6785", location: "Paris", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ id: 7, name: "Khan", hasMobile: true, amount: "346554", location: "Barcelona", date: new Date(), time: new Date(), dateTime: new Date(), carName: "BMW" },
			{ id: 8, name: "Farooq", hasMobile: true, amount: "033", location: "Islamabad", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ id: 9, name: "dogar", hasMobile: false, amount: "9234", location: "Lahore", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Ford" },
			{ id: 10, name: "Shafqat", hasMobile: false, amount: "546", location: "Karachi", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Suzuki" },
			{ id: 11, name: "Arif", hasMobile: true, amount: "2342", location: "Berlin", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Nissan" },
			{ id: 12, name: "Atif", hasMobile: true, amount: "435345", location: "Munich", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Merc" },
			{ id: 13, name: "Hamzah", hasMobile: false, amount: "6785", location: "Paris", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ id: 14, name: "Haris", hasMobile: true, amount: "346554", location: "Barcelona", date: new Date(), time: new Date(), dateTime: new Date(), carName: "BMW" }
		]
		return responseData;
	}
}
