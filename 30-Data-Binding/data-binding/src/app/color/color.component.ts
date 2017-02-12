import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  public red: number = 127;
  public green: number = 127;
  public blue: number = 127;
  
  constructor() { }

  ngOnInit() {
  }

}
