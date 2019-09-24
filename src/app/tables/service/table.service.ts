import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

	constructor() { }

	// assuming that the data would be coming as a JSON response from the API
	getData(): {}[] {

		let responseData = [
			{ name: "Saad", hasMobile: true, amount: "2333", location: "Islamabad", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ name: "Hamza", hasMobile: false, amount: "9234", location: "Lahore", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Ford" },
			{ name: "Abid", hasMobile: false, amount: "546", location: "Karachi", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Suzuki" },
			{ name: "Farhat", hasMobile: true, amount: "2342", location: "Berlin", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Nissan" },
			{ name: "Riaz", hasMobile: true, amount: "435345", location: "Munich", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Merc" },
			{ name: "Muhammad", hasMobile: false, amount: "6785", location: "Paris", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ name: "Khan", hasMobile: true, amount: "346554", location: "Barcelona", date: new Date(), time: new Date(), dateTime: new Date(), carName: "BMW" },
			{ name: "Farooq", hasMobile: true, amount: "033", location: "Islamabad", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ name: "dogar", hasMobile: false, amount: "9234", location: "Lahore", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Ford" },
			{ name: "Shafqat", hasMobile: false, amount: "546", location: "Karachi", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Suzuki" },
			{ name: "Arif", hasMobile: true, amount: "2342", location: "Berlin", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Nissan" },
			{ name: "Atif", hasMobile: true, amount: "435345", location: "Munich", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Merc" },
			{ name: "Hamzah", hasMobile: false, amount: "6785", location: "Paris", date: new Date(), time: new Date(), dateTime: new Date(), carName: "Honda" },
			{ name: "Haris", hasMobile: true, amount: "346554", location: "Barcelona", date: new Date(), time: new Date(), dateTime: new Date(), carName: "BMW" }
		]
		return responseData;
	}
}
