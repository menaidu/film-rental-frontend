import { TestBed } from '@angular/core/testing';

import { CustomerActorsService } from './customer-actors.service';

describe('CustomerActorsService', () => {
  let service: CustomerActorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerActorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
