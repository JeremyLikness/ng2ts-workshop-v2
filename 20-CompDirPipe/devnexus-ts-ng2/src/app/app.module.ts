import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
