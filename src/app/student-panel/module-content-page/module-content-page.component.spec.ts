import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleContentPageComponent } from './module-content-page.component';

describe('ModuleContentPageComponent', () => {
  let component: ModuleContentPageComponent;
  let fixture: ComponentFixture<ModuleContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
