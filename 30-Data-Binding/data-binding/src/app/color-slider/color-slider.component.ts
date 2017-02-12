import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css']
})
export class ColorSliderComponent implements OnInit {

  @Input()
  public color: string = 'red';
  
  @Input()
  public colorValue: number = 127;

  constructor() { }

  ngOnInit() {
  }

}
