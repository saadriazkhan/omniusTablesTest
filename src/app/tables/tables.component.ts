import { Component, OnInit } from '@angular/core';
import { TableService } from './service/table.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { I18nService } from '../i18n/i18n.service';
import { Subject } from 'rxjs';
import { Sort } from './table/components/models/sort';
import { Filter } from './table/components/models/filter';
import { DataTableValue } from './table/components/models/dataTableValue';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {

    languageConfig: any = {};

    tableData: Object[] = [];
    config: {} = {};

    loading: boolean = false;

    tableDataSubject = new Subject();
    routeSubject = new Subject();

    constructor(private tableService: TableService, private configurationService: ConfigurationService, private languageService: I18nService, private router: Router, private route: ActivatedRoute) {
        this.languageConfig = this.languageService.getLocaleConfig();
        this.tableDataSubject = this.tableService.tableDataSubject;
        this.tableService.routeSubject.subscribe(queryParams => {
            this.router.navigate([], {
                queryParams: queryParams
            });
        });
    }

    ngOnInit() {
        this.loading = true;
        this.config = this.configurationService.getTableConfig();
    }

    sortEvent($event: Sort): void {
        this.tableService.sort($event);
    }

    searchEvent($event: string): void {
        this.tableService.search($event);
    }

    filterEvent($event: Filter[]): void {
        this.tableService.filter($event);
    }

    pageChangeEvent($event: number): void {
        this.tableService.pageChange($event);
    }

    pageSizeChangeEvent($event: number): void {
        this.tableService.pageSizeChange($event);
    }

    onDataLoadStarted($event): void {
        this.loading = true;
        console.log($event);
        this.tableService.generateUrl();
    }

    onDataLoadSucceeded($event): void {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        console.log($event);
    }

    onDataLoadFailed($event): void {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        console.log($event);
    }

    saveTableData(data: DataTableValue[]) {
        this.tableService.saveTableData(data);
    }

    ngOnDestroy() {
        this.tableService.tableDataSubject.unsubscribe();
    }
}
