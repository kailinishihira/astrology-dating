import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedWithComponent } from './matched-with.component';

describe('MatchedWithComponent', () => {
  let component: MatchedWithComponent;
  let fixture: ComponentFixture<MatchedWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
