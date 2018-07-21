import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataService } from './services/data.service';
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
	declarations: [
		AppComponent,
		ApplicationsListComponent,
		DataGridComponent,
		PopupComponent
	],
	entryComponents: [PopupComponent],
	imports: [
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
