import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';

import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'planets/:planet',
    component: PlanetDetailComponent
  },
  {
    path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
