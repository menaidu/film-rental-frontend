import { TestBed } from '@angular/core/testing';

import { CustomerFilmsService } from './customer-films.service';

describe('CustomerFilmsService', () => {
  let service: CustomerFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
