import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTrackingProjectComponent } from './covid-tracking-project.component';

describe('CovidTrackingProjectComponent', () => {
  let component: CovidTrackingProjectComponent;
  let fixture: ComponentFixture<CovidTrackingProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTrackingProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTrackingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
