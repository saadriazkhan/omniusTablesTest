import { Filter } from './filter';
import { Sort } from './sort';

export class Utility {
    isNumber(val): boolean {
        return typeof val === 'number';
    }
    isBoolean(val): boolean {
        return typeof val === 'boolean';
    }
    isArray(val): boolean {
        return val instanceof Array;
    }
    isDate(val): boolean {
        return val instanceof Date;
    }
}

export abstract class Tables {
    config: {} = {};
    tableData: {}[] = [];

    abstract filterData(filter: Filter): void;
    abstract sortData(sort: Sort): void;
}
