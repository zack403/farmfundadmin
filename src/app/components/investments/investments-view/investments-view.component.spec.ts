import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsViewComponent } from './investments-view.component';

describe('InvestmentsViewComponent', () => {
  let component: InvestmentsViewComponent;
  let fixture: ComponentFixture<InvestmentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
