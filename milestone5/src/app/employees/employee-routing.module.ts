import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';

const employeesRoutes: Routes = [
  { path: 'employees',  component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }