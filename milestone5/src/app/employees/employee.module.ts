import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';

import { EmployeeService } from './employee.service';
import { EmployeeRoutingModule } from 'app/employees/employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  providers: [ EmployeeService ]
})
export class EmployeeModule {}