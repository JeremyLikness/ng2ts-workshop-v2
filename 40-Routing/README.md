# Intro to Routing in Angular

## Set up Basic Routing

1. Create a new project with the `--routing` switch: `ng new ng-routing --routing` (you can add into existing with `ng init --routing`)

2. Change your working directory to the newly generated project folder and generate a service for planets: `ng g service planets`

3. Paste the following code for the planets list: 

```TypeScript 
import { Injectable } from '@angular/core';

export interface IPlanet {
  Name: string;
  Mass: number;
  Diameter: number;
}

@Injectable()
export class PlanetsService {

  private _planets: IPlanet[] = [
    {
      "Name": "Mercury",
      "Mass": 0.05,
      "Diameter": 4876
    },
    {
      "Name": "Venus",
      "Mass": 0.81,
      "Diameter": 12107
    },
    {
      "Name": "Earth",
      "Mass": 1.0,
      "Diameter": 12755
    },
    {
      "Name": "Mars",
      "Mass": 0.1,
      "Diameter": 6794
    },
    {
      "Name": "Jupiter",
      "Mass": 317,
      "Diameter": 142983
    },
    {
      "Name": "Saturn",
      "Mass": 95,
      "Diameter": 120536
    },
    {
      "Name": "Uranus",
      "Mass": 14.6,
      "Diameter": 51117
    },
    {
      "Name": "Neptune",
      "Mass": 17,
      "Diameter": 4876
    },
    {
      "Name": "Pluto",
      "Mass": 0.0002,
      "Diameter": 2390
    }
  ];

  constructor() { }

  public getPlanets(): IPlanet[] {
    return [...this._planets];
  }

}
```

4. Register the service with the providers list for the module 

5. Create a planets component `ng g component planets` 

6. Update the html for `planets.component.html` 

```html
<ul>
  <li *ngFor="let planet of planets">{{planet.Name}}</li>
</ul>
```

7. Update the component `planets.component.ts` code: 

```TypeScript
import { Component, OnInit } from '@angular/core';

import { PlanetsService, IPlanet } from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planets: IPlanet[] = [];

  constructor(private svc: PlanetsService) { }

  ngOnInit() {
    this.planets = this.svc.getPlanets();
  }

}
```

8. Update the route `app-routing.module.ts` to default to the planets component: 

```TypeScript 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {
    path: 'planets',
    component: PlanetsComponent
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
```

9. Run the app with `ng serve` and note the redirect goes to `/planets` 
