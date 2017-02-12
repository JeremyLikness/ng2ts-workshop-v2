/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumberService } from './number.service';

describe('NumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberService]
    });
  });

  it('should ...', inject([NumberService], (service: NumberService) => {
    expect(service).toBeTruthy();
  }));
});
