import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
		HttpClientModule,
		ConfigurationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }