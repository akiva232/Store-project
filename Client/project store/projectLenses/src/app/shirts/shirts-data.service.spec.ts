import { TestBed } from '@angular/core/testing';

import { ShirtsDataService } from './shirts-data.service';

describe('ShirtsDataService', () => {
  let service: ShirtsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShirtsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
