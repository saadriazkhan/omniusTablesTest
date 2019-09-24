import { Filter } from './filter';
import { Sort } from './sort';
import { CurrencyPipe } from '@angular/common';

export class Utility {
    isNumber(value:any): boolean {
        return typeof value === 'number';
    }
    isBoolean(value:any): boolean {
        return typeof value === 'boolean';
    }
    isArray(value:any): boolean {
        return value instanceof Array;
    }
    isDate(value:any): boolean {
        return value instanceof Date;
    }
    isCurrency(value:any):boolean {
        return value instanceof CurrencyPipe
    }
}

export abstract class Tables {
    config: {} = {};
    tableData: {}[] = [];

    abstract filterData(filter: Filter): void;
    abstract sortData(sort: Sort): void;
}
