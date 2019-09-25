import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { Routes, RouterModule } from '@angular/router';
import { TableService } from './service/table.service';
import { tableValueItemPipe } from './table-pipes/table-helper-pipes.pipe';
import { FilterComponent } from './table/components/filter/filter.component';
import { SearchComponent } from './table/components/search/search.component';
import { SortingComponent } from './table/components/sorting/sorting.component';
import { TableComponent } from './table/table.component';
import { TableDirectiveDirective } from './table-directives/table-directive.directive';
import { PaginationComponent } from './table/components/pagination/pagination.component';


//routes has a separate file with routes defined. But since this project has one main functionality, just added its route here for simplixity
const routes: Routes = [
	{
		path: 'tables',
		component: TablesComponent,
	}
];

@NgModule({
	declarations: [
		TablesComponent,
		tableValueItemPipe,
		FilterComponent,
		SearchComponent,
		SortingComponent,
		TableComponent,
		TableDirectiveDirective,
		PaginationComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule.forRoot(routes)
	],
	bootstrap: [TablesComponent],
	exports: [RouterModule],
	providers: [
		TableService
	],
	entryComponents: [TableComponent]
})
export class TablesModule { }
