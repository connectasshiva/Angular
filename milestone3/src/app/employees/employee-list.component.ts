import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/employees/employee';
import { EmployeeService } from 'app/employees/employee.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.getEmployees();
  }
  getEmployees(): Employee[] {
    return this.employeeService.getEmployees();
  }

}
