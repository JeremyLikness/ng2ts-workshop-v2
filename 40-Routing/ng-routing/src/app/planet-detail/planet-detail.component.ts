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
