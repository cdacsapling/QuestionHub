import { TestBed } from '@angular/core/testing';

import { TeacherProfileServiceService } from './teacher-profile-service.service';

describe('TeacherProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherProfileServiceService = TestBed.get(TeacherProfileServiceService);
    expect(service).toBeTruthy();
  });
});
