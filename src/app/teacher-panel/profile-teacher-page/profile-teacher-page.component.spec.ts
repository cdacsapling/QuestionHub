import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTeacherPageComponent } from './profile-teacher-page.component';

describe('ProfileTeacherPageComponent', () => {
  let component: ProfileTeacherPageComponent;
  let fixture: ComponentFixture<ProfileTeacherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTeacherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
