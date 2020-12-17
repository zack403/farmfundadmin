import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FarmDashboardComponent } from './farm-dashboard.component';

describe('FarmDashboardComponent', () => {
  let component: FarmDashboardComponent;
  let fixture: ComponentFixture<FarmDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
