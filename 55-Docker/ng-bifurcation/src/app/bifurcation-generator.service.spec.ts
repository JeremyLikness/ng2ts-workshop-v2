/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BifurcationGeneratorService } from './bifurcation-generator.service';

describe('BifurcationGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BifurcationGeneratorService]
    });
  });

  it('should ...', inject([BifurcationGeneratorService], (service: BifurcationGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
