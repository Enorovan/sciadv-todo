import { TestBed } from '@angular/core/testing';

import { SciadvService } from './sciadv.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SciadvService = TestBed.get(SciadvService);
    expect(service).toBeTruthy();
  });
});
