import { Pipe, PipeTransform } from '@angular/core';

function ExtractKeys(value: string[]): any[] {
	let keys = [];
	for (let key in value) {
		keys.push(key);
	}
	return keys;
}

@Pipe({
	name: 'tableHeaderItem'
})
export class tableHeaderItemPipe implements PipeTransform {
	transform(value: string[]): any[] {
		return ExtractKeys(value);
	}
}

@Pipe({
	name: 'tableValueItem'
})
export class tableValueItemPipe implements PipeTransform {
	
	transform(value: string[]): any[] {
		return ExtractKeys(value);
	}
}
