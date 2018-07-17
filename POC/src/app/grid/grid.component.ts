import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() rowData: any;

  columnDefs = [
    { headerName: 'Name', field: 'Name' },
    { headerName: 'Index', field: 'Index' }
  ];
}
