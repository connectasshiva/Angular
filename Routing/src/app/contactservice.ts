import { Injectable } from "@angular/core";
import { Contact } from "app/contact";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class ContactService {

    //private url: string = "src/app/contacts.json";
    private url: string = "http://www.json-generator.com/api/json/get/bQemUAtUvC?indent=2";

    constructor(private http: Http) { }

    getContacts(): Observable<any> {
        return this.http.get(this.url)
            .map((response: Response) => response.json());
    }



}