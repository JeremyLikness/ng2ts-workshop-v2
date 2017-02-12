import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public red: number = 64;
  public green: number = 128;
  public blue: number = 192;
  title = 'app works!';
}
