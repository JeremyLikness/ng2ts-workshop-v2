import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @ViewChild('earth')
  public earth: ElementRef;

  @ViewChild('planet') 
  public planet: ElementRef;

  private earthDiameter: number;

  public Name: string;
  public Mass: number;
  public Diameter: number;

  constructor(private svc: PlanetsService, private router: Router, private route: ActivatedRoute) {
    this.earthDiameter = svc.getPlanet('Earth').Diameter;
   }

  ngOnInit() {
    this.route.params.subscribe((parms: Params) => {
      let planet = this.svc.getPlanet(parms['planet']);
      if (planet) {
        this.Name = planet.Name;
        this.Mass = planet.Mass;
        this.Diameter = planet.Diameter;
        this.compareToEarth();
      }
      else {
        this.router.navigate(['/planets']);
      }
    });
  }

  compareToEarth() {
    let ratio = this.Diameter / this.earthDiameter;
    this.planet.nativeElement.style.width = `${25 * ratio}px`;
    this.planet.nativeElement.style.height = `${25 * ratio}px`;
  }

}
