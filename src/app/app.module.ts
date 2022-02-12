import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateRowsComponent } from './template-rows/template-rows.component';
import { DefaultGridComponent } from './default-grid/default-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRowsComponent,
    DefaultGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
