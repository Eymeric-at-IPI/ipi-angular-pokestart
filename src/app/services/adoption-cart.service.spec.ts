import { TestBed } from '@angular/core/testing';

import { AdoptionCartService } from './adoption-cart.service';

describe('AdoptionCartService', () => {
  let service: AdoptionCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
