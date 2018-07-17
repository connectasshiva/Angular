import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  show: boolean;
  name: string;

  constructor() {
    this.name = 'John Doe';
    this.show = false;
  }

  welcomeMe(userName: string) {
    this.name = userName;
    this.show = true;
  }
}