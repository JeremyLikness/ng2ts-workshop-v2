import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PlanetsService } from './planets.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
