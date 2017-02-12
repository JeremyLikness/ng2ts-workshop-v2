import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowNumberComponent } from './show-number/show-number.component';

import { NumberService } from './number.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
