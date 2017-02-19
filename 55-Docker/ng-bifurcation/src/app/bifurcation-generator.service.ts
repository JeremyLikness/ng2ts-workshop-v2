import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http, URLSearchParams } from '@angular/http';

export interface IBifurcation {
  r: number;
  x: number;
}

@Injectable()
export class BifurcationGeneratorService {

  constructor(public http: Http) { }

  public generate(width: number): Observable<IBifurcation> {
    let rIterator = Observable.range(0, width - 1).delay(1).map(x => (4.0 * x) / width),
      sync = new Subject<IBifurcation>();
  
    rIterator.subscribe(r => {
      let params = new URLSearchParams();
      params.set("r", r.toString());
      this.http.get('http://localhost:3000/', {
        search: params
      }).subscribe(res => {
        let result = res.json();
        if (result.result && result.result.length) {
          result.result.forEach(x => sync.next({ r, x }));
        }
      });
    });
    return sync.asObservable();
  }

}
