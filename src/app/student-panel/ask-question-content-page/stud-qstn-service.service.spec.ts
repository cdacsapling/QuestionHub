import { TestBed } from '@angular/core/testing';

import { StudQstnServiceService } from './stud-qstn-service.service';

describe('StudQstnServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudQstnServiceService = TestBed.get(StudQstnServiceService);
    expect(service).toBeTruthy();
  });
});
