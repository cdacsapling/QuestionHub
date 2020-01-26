import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionContentPageComponent } from './ask-question-content-page.component';

describe('AskQuestionContentPageComponent', () => {
  let component: AskQuestionContentPageComponent;
  let fixture: ComponentFixture<AskQuestionContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
