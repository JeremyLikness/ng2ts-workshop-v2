import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { State } from './store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject('appStore')private store: Store<State>) {
    store.subscribe(() => this.stateChange());
    this.stateChange();
  }

  private stateChange() {
    let state = this.store.getState();
    this.red = state.red;
    this.green = state.green;
    this.blue = state.blue;
  }

  public red: number = 0;
  public green: number = 0;
  public blue: number = 0;
  title = 'app works!';
}