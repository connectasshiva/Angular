import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'app/employees/employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'app/employees/employee.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: EmployeeService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employee = this.service.getEmployee(id);
  }

  gotoEmployees(employee: Employee) {
    let employeeId = employee ? employee.id : null;
    this.router.navigate(['/employees']);
  }

}
