import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { CellRenderComponentComponent } from './cell-render-component/cell-render-component.component';
import { CreateGridDataComponent } from './create-grid-data/create-grid-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CellRenderComponentComponent,
    CreateGridDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents(
      [AppComponent]
  )
  ],
  entryComponents: [CellRenderComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
