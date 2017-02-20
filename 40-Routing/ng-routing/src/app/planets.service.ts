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
