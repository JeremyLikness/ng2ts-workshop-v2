import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor( @Inject('maxNumber') maxNumber: number) {
    this.title = 'app works! max is: ' + maxNumber;
  }
}
