import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TableService } from './service/table.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { I18nService } from '../i18n/i18n.service';
import { Subject } from 'rxjs';
import { Sort } from './table/components/models/sort';
import { Filter } from './table/components/models/filter';
import { DataTableValue } from './table/components/models/dataTableValue';
import { ActivatedRoute, Router } from '@angular/router';
import { TableComponent } from './table/table.component';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {

    languageConfig: any = {};
    tableData: Object[] = [];
    config: {} = {};

    loading: boolean = false;
    injectedComponents = [];

    tableDataSubject = new Subject();
    routeSubject = new Subject();

    @ViewChild('newTable', { read: ViewContainerRef, static: true }) tableContainer: ViewContainerRef;

    constructor(
        private tableService: TableService,
        private configurationService: ConfigurationService,
        private languageService: I18nService,
        private router: Router,
        private componentFactory: ComponentFactoryResolver) {

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

    deleteRunTimeComponent() {
        const component = this.injectedComponents.find((component) => component.instance instanceof TableComponent);
        const componentIndex = this.injectedComponents.indexOf(component);

        if (componentIndex !== -1) { // component founf
            this.tableContainer.remove(this.tableContainer.indexOf(component));
            this.injectedComponents.splice(componentIndex, 1);
        }
    }

    injectRunTimeComponent() {
        this.loading = true;
        const tableComponent = this.componentFactory.resolveComponentFactory(TableComponent);
        const newTableComponent = this.tableContainer.createComponent(tableComponent);
        this.injectedComponents.push(newTableComponent);
        newTableComponent.instance.tablesConfig = this.config;
        newTableComponent.instance.tableDataSubject = this.tableService.tableDataSubject;
        newTableComponent.instance.sortEventEmitter.subscribe(data => {
            this.sortEvent(data);
        });
        newTableComponent.instance.searchEventEmitter.subscribe(data => {
            this.searchEvent(data);
        });
        newTableComponent.instance.filterEventEmitter.subscribe(data => {
            this.filterEvent(data);
        });
        newTableComponent.instance.pageChangeEventEmitter.subscribe(data => {
            this.pageChangeEvent(data);
        });
        newTableComponent.instance.pageSizeChangeEventEmitter.subscribe(data => {
            this.pageSizeChangeEvent(data);
        });
        newTableComponent.instance.saveTableEmitter.subscribe(data => {
            this.saveTableData(data);
        });
        newTableComponent.instance.onDataLoadStartedEmitter.subscribe(data => {
            this.onDataLoadStarted(data);
        });
        newTableComponent.instance.onDataLoadSucceededEmitter.subscribe(data => {
            this.onDataLoadSucceeded(data);
        });
        newTableComponent.instance.onDataLoadFailedEmitter.subscribe(data => {
            this.onDataLoadFailed(data);
        });
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
