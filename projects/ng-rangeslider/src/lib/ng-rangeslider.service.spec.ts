import { TestBed } from '@angular/core/testing';

import { NgRangesliderService } from './ng-rangeslider.service';

describe('NgRangesliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRangesliderService = TestBed.get(NgRangesliderService);
    expect(service).toBeTruthy();
  });
});
