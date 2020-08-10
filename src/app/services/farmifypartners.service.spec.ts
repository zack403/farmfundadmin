import { TestBed } from '@angular/core/testing';

import { FarmifypartnersService } from './farmifypartners.service';

describe('FarmifypartnersService', () => {
  let service: FarmifypartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmifypartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
