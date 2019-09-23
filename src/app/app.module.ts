import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesModule } from './tables/tables.module';
import { ConfigurationModule } from './configuration/configuration.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TablesModule,
		ConfigurationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
