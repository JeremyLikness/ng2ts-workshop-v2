# Using Redux with Angular 

[Redux](http://redux.js.org/) is a "predictable state container for JavaScript apps." It has traditionally been closely associated with [React](https://facebook.github.io/react/) but is a standalone library that can work with any JavaScript framework. Redux can simplify the way you build and test your application, and more importantly the way you handle communication between components. In this module you'll see how to add Redux to an Angular application, and refactor an application to use the Redux store to propagate changes instead of relying on inter-component communication via the `Inputs` and `Outputs`. 

>Module 30 (Data-Binding) is a prerequisite for this module because the completed project is a baseline for refactoring to use Redux.

1. Create a new project `ng new ng-redux` 

2. Generate components for `color`, `color-slider`, and `slider` per [Module 30](../30-Data-Binding/README.md). Update the related CSS, HTML, and ensure the app is working with the correct tags in the application component. If you like, you can start with the completed app from Module 30 and refactor it moving forward.

3. Add `Redux` to the app: `npm i --save redux`

4. Create a folder named `store` under `app` 

5. Add `state.ts`: 

```TypeScript
export class State {
    public red: number;
    public green: number;
    public blue: number;
}
```

6. Add `actions.ts`: 

```TypeScript 
import { Action } from 'redux';

export interface IColorChangeAction extends Action {
    value: number;
}

export const changeColor = (color: string, value: number) => ({
    type: color,
    value
} as IColorChangeAction);
```

Actions simply notify a potential change of state. A reducer responds to an action by returning a new state. 

7. Add `reducer.ts`: 

```TypeScript
import { State } from './state';
import { IColorChangeAction } from './actions';

export const colorReducer = (state: State, action: IColorChangeAction) => {
    if (action && ['red', 'green', 'blue'].indexOf(action.type) !== -1) {
        let newAction = {
            red: state.red,
            blue: state.blue,
            green: state.green
        };
        newAction[action.type] = action.value; 
        return newAction;
    }
    return state || {
        red: 64,
        green: 128,
        blue: 192
    };
}
```

Because state is immutable, the original state cannot be modified. Therefore, if a valid action exists, a copy of the state is created and then the corresponding property (based on the type) is updated. If the action is null, either the existing state is passed back or, in the case of the very first time it is called, an initial state with default values is passed. 

8. Initialize the store in the `app.module.ts`:

```TypeScript
import { State } from './store/state';
import { colorReducer } from './store/reducer';

import { Store, createStore } from 'redux';

export const storeFactory = () => createStore(colorReducer);

//..etc..

providers: [{provide: 'appStore', useFactory: storeFactory}],

```

This uses a literal to provide the store, and a factory so the creation is deferred until Angular is ready for it. 

9. Import the store into the `app.component.ts` and listen to changes. 

```TypeScript 
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
```

10. Update `app.component.html` and remove the two-way bindings to the `color-slider` controls: 

```html
<h1>
  {{title}}
</h1>
<app-color [red]="red" [green]="green" [blue]="blue"></app-color>
<app-color-slider [color]="'red'"></app-color-slider>
<app-color-slider [color]="'green'"></app-color-slider>
<app-color-slider [color]="'blue'"></app-color-slider>
```

11. Update `color-slider.component.ts` to subscribe to the store and consume/publish changes: 

```TypeScript 
import { Component, OnInit, Input, Inject } from '@angular/core';

import { Store } from 'redux';

import { State } from '../store/state';

import { changeColor } from '../store/actions';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css']
})
export class ColorSliderComponent implements OnInit {

  private _colorValue: number = 127;

  @Input()
  public color: string = 'red';

  public set colorValue(val: number) {
    let change = val !== this._colorValue;
    this._colorValue = val;
    if (change) {
      this.store.dispatch(changeColor(this.color, val));
    }
  }

  public get colorValue(): number {
    return this._colorValue;
  }

  constructor(@Inject('appStore')private store: Store<State>) { }

  ngOnInit() {
    this.store.subscribe(() => this.onColorChange());
    this.onColorChange();
  }

  private onColorChange() {
    let state = this.store.getState();
    if (state[this.color] && state[this.color] !== this._colorValue) {
      this.colorValue = state[this.color];
    }
  }

}
```

Now the application will execute as before. The difference is that the changes dispatched from the color component are consumed by the app component. Although this may seem more complicated for the simple application scenario, more complex apps benefit tremendously from this approach. See [An Adventure in Redux: Building redux-adventure](http://csharperimage.jeremylikness.com/2016/07/an-adventure-in-redux-building-redux.html) for a more comprehensive example.





