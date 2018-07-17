import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { mainReducer } from "./state/reducers/reducer";
import { StoreModule } from '@ngrx/store/src/store_module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ mainReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
