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
