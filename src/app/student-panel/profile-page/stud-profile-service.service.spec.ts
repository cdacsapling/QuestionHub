import { TestBed } from '@angular/core/testing';

import { StudProfileServiceService } from './stud-profile-service.service';

describe('StudProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudProfileServiceService = TestBed.get(StudProfileServiceService);
    expect(service).toBeTruthy();
  });
});
