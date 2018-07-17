import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from 'app/routing.module';
import { DepartmentListComponent } from './departments/department-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeModule } from 'app/employees/employee.module';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmployeeModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
