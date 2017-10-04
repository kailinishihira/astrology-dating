import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMatchesComponent } from './start-matches.component';

describe('StartMatchesComponent', () => {
  let component: StartMatchesComponent;
  let fixture: ComponentFixture<StartMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
