import { Pipe, PipeTransform } from '@angular/core';

function ExtractKeys(value: Object): any[] {
	let keys = [];

	for (let key in value) {
		keys.push(key);
	}
	return keys;
}

@Pipe({
	name: 'tableValueItem'
})
export class tableValueItemPipe implements PipeTransform {

	transform(value: Object): any[] {
		return ExtractKeys(value);
	}
}
