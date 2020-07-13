import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsEditComponent } from './investments-edit.component';

describe('InvestmentsEditComponent', () => {
  let component: InvestmentsEditComponent;
  let fixture: ComponentFixture<InvestmentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
