import { TestBed } from '@angular/core/testing';

import { CovidTrackingProjectService } from './covid-tracking-project.service';

describe('CovidTrackingProjectService', () => {
  let service: CovidTrackingProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidTrackingProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
