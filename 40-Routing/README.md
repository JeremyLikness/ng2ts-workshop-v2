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

## Create a Route with a Parameter 

1. Generate a planet detail component: `ng g component planet-detail` 

2. Populate the HTML for `planet-detail.component.html`: 

```html
<h2>{{Name}}</h2>
<ul>
  <li>Mass: {{Mass}} times the mass of earth 
  <li>Diameter: {{Diameter|number:'3.0'}} miles 
</ul>
```

3. Add a method to `planets.service.ts` to search for planet by name: 

```TypeScript
public getPlanet(name: string): IPlanet {
    for (let i = 0; i < this._planets.length; i+=1) {
      if (this._planets[i].Name === name) {
        return this._planets[i];
      }
    }
    return null;
  }
```

4. Update the code for `planet-detail.component.ts`: 

```TypeScript 
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  public Name: string;
  public Mass: number;
  public Diameter: number;

  constructor(private svc: PlanetsService, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.params.subscribe((parms: Params) => {
      let planet = this.svc.getPlanet(parms['planet']);
      if (planet) {
        this.Name = planet.Name;
        this.Mass = planet.Mass;
        this.Diameter = planet.Diameter;
      }
      else {
        this.router.navigate(['/planets']);
      }
    });
  }

}
```

Notice two imports are used. First, the `ActivatedRoute` provides access to the route being used, and therefore any associated route parameters. This example expects a parameter named `planet` to provide the planet name. If the planet is found, the properties are set. If not, the `Router` is used to navigate back to the planets list. 

5. Import the new detail into the routing module `app-routing.module.ts`: 

```TypeScript
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
```

6. Add a route with a route parameter: 

```TypeScript
{
    path: 'planets/:planet',
    component: PlanetDetailComponent
  },
```

Notice the `:planet` is used to name the parameter. This is a placeholder that will be replaced by the actual value in the live route.

7. Run the application and navigate to a bad route: [http://localhost:4200/planets/Luna](http://localhost:4200/planets/Luna). Notice you are kicked back to the `/planets` route. 

8. Now navigate to a good route and you should see the detail: [http://localhost:4200/planets/Jupiter](http://localhost:4200/planets/Jupiter)
