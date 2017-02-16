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