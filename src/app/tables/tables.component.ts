import { Component, OnInit } from '@angular/core';
import { TableService } from './service/table.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { I18nService } from '../i18n/i18n.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

    languageConfig: any = {};

    tableData: Object[] = [];
    config: {} = {};

    tableDataSubject = new Subject();

    constructor(private tableService: TableService, private configurationService: ConfigurationService, private languageService: I18nService) {
        this.languageConfig = this.languageService.getLocaleConfig();
        this.tableDataSubject = this.tableService.tableDataSubject;
    }

    ngOnInit() {
        this.config = this.configurationService.getTableConfig();
    }

    sortEvent($event): void {
        console.log($event);
    }

    searchEvent($event): void {
        console.log($event);
    }

    filterEvent($event): void {
        console.log($event);
    }

    pageChangeEvent($event): void {
        console.log($event);
    }

    pageSizeChageEvent($event): void {
        console.log($event);
    }

    onDataLoadStarted($event): void {
        console.log($event);
        this.tableService.getData();
    }

    onDataLoadSucceeded($event): void {
        console.log($event);
    }

    onDataLoadFailed($event): void {
        console.log($event);
    }

    ngOnDestroy() {
        this.tableService.tableDataSubject.unsubscribe();
    }
}
