import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employee';

@Injectable()
export class EmployeeService {

    constructor() { }

    getEmployees() {
        return (EMPLOYEES);
    }

    getEmployee(id: number | string): Employee {
        //return this.getEmployees().map(employees => employees.find(emp => emp.id === id));
        return this.getEmployees().find(x => x.id == id);
    }
}