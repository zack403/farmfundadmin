import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsListComponent } from './investments-list.component';

describe('InvestmentsListComponent', () => {
  let component: InvestmentsListComponent;
  let fixture: ComponentFixture<InvestmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
