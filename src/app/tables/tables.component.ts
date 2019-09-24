import { Component, OnInit } from '@angular/core';
import { TableService } from './service/table.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { I18nService } from '../i18n/i18n.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

    languageConfig: any = {};
    constructor(private tableService: TableService, private configurationService: ConfigurationService, private languageService: I18nService) {
        this.languageConfig = this.languageService.getLocaleConfig();
    }

    tableData: {}[] = [];
    config: {} = {};

    ngOnInit() {

        this.config = this.configurationService.getTableConfig();

        //implement subject here
        this.tableData = this.tableService.getData();
        console.log(this.tableData);
    }

}
