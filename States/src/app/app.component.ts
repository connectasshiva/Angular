import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/state/state/state';
import { mainReducer } from "./state/reducers/reducer";
import { INCREMENT, DECREMENT } from 'app/state/actions/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  data = '';

  constructor(private store: Store<State>) {
    console.log(store);

        store.select('').subscribe((data: State) => {
      this.data = 'Counter value is ' + data.counter;
    });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }



  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }


}