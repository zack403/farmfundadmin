import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsDeleteComponent } from './investors-delete.component';

describe('InvestorsDeleteComponent', () => {
  let component: InvestorsDeleteComponent;
  let fixture: ComponentFixture<InvestorsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
