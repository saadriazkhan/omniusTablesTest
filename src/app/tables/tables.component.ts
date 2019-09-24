import { Component, OnInit } from '@angular/core';
import { TableService } from './service/table.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

    constructor(private tableService: TableService, private configurationService: ConfigurationService) { }

    tableData: {}[] = [];
    config: {} = {};

    ngOnInit() {

        this.config = this.configurationService.getTableConfig();

        //implement subject here
        this.tableData = this.tableService.getData();
        console.log(this.tableData);
    }

}
