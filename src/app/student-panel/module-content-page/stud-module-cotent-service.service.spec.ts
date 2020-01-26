import { TestBed } from '@angular/core/testing';

import { StudModuleCotentServiceService } from './stud-module-cotent-service.service';

describe('StudModuleCotentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudModuleCotentServiceService = TestBed.get(StudModuleCotentServiceService);
    expect(service).toBeTruthy();
  });
});
