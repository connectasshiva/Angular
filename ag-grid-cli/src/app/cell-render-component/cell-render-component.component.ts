import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-render-component',
  templateUrl: './cell-render-component.component.html',
  styleUrls: ['./cell-render-component.component.css']
})
export class CellRenderComponentComponent {

  private params: any;

  agInit(params: any): void {
    console.log(params.value);
    this.params = params;    
}

}
