import { TestBed } from '@angular/core/testing';

import { NavModuleServiceService } from './nav-module-service.service';

describe('NavModuleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavModuleServiceService = TestBed.get(NavModuleServiceService);
    expect(service).toBeTruthy();
  });
});
