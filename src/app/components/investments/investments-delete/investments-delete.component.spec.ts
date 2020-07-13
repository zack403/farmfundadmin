import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsDeleteComponent } from './investments-delete.component';

describe('InvestmentsDeleteComponent', () => {
  let component: InvestmentsDeleteComponent;
  let fixture: ComponentFixture<InvestmentsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
