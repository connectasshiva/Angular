import { Component, OnInit, EventEmitter } from '@angular/core';
import { RowData } from 'app/row-data';
import { Output, Input } from '@angular/core';


@Component({
  selector: 'app-create-grid-data',
  templateUrl: './create-grid-data.component.html',
  styleUrls: ['./create-grid-data.component.css']
})
export class CreateGridDataComponent implements OnInit {
  @Output() save = new EventEmitter();
  rowData: any= {};
  
    constructor() { }

  ngOnInit() {
    
  }

  saveToGrid(){    
    this.save.emit(this.rowData);
    
  }

}
