import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css']
})
export class ColorSliderComponent implements OnInit {

  public color: string = 'red';
  public colorValue: number = 127;

  constructor() { }

  ngOnInit() {
  }

}
