import { TestBed } from '@angular/core/testing';

import { ActorsAddService } from './actors-add.service';

describe('ActorsAddService', () => {
  let service: ActorsAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorsAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
