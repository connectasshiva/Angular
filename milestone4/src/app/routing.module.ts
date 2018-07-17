import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentListComponent } from './departments/department-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'departments', component: DepartmentListComponent },
  {path:'', redirectTo:'/employees', pathMatch:'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //, { enableTracing: true }
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
