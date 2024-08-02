import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
  IgxGridModule,
	IgxButtonGroupModule,
 } from "igniteui-angular";
import { TablaTipoExcelComponent } from './tabla-tipo-excel/tabla-tipo-excel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TablaTipoExcelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxGridModule,
	  IgxButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
