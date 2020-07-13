import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsCreateComponent } from './investments-create.component';

describe('InvestmentsCreateComponent', () => {
  let component: InvestmentsCreateComponent;
  let fixture: ComponentFixture<InvestmentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
