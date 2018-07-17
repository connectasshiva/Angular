import { Component, OnInit, EventEmitter } from '@angular/core';
import { GridOptions } from "ag-grid";
import { CellRenderComponentComponent } from 'app/cell-render-component/cell-render-component.component';
import { RowData } from 'app/row-data';
import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private gridOptions: GridOptions;
  rowList: RowData[];
  rowData: any = {};

  constructor() { }

  ngOnInit() {
    this.gridOptions = <GridOptions>{};
    this.rowList = [{ 'field1': 5, 'field2': 10 }];
    this.gridOptions.rowData = this.rowList;

    this.gridOptions.columnDefs = [
      {
        headerName: "Field1",
        field: "field1",
        width: 100
      },
      {
        headerName: "Field2",
        field: "field2",
        width: 100,
        editable: true,
        cellRendererFramework: CellRenderComponentComponent
      }
    ];

  }

  saveData(rowData){
    this.rowList.push(rowData);    
    this.gridOptions.api.setRowData(this.rowList);
  }
}
