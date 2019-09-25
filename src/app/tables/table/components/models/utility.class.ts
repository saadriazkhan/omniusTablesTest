import { Filter } from './filter';
import { Sort } from './sort';
import { EventEmitter } from '@angular/core';

export class Utility {
    isNumber(value: any): boolean {
        return typeof value === 'number';
    }
    isBoolean(value: any): boolean {
        return typeof value === 'boolean';
    }
    isArray(value: any): boolean {
        return value instanceof Array;
    }
    isDate(value: any): boolean {
        return value instanceof Date;
    }
}

export abstract class Tables {
    config: {} = {};
    tableData: Object[] = [];

    abstract sortEventEmitter = new EventEmitter();
    abstract searchEventEmitter = new EventEmitter();
    abstract filterEventEmitter = new EventEmitter();
    abstract pageChangeEventEmitter = new EventEmitter();
    abstract pageSizeChageEventEmitter = new EventEmitter();

    abstract saveTableEmitter = new EventEmitter();
    abstract onDataLoadStartedEmitter = new EventEmitter();
    abstract onDataLoadSucceededEmitter = new EventEmitter();
    abstract onDataLoadFailedEmitter = new EventEmitter();

    abstract filterData(filter: Filter[]): void;
    abstract pageChange(pageNumber: number): void;
    abstract pageSizeChange(pageSize: number): void;
    abstract searchData(searchTerm: string): void;
    abstract sortData(sort: Sort): void;
    abstract saveTableData(...args: any): void;
}
