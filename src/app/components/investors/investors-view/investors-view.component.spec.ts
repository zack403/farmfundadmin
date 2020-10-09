import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsViewComponent } from './investors-view.component';

describe('InvestorsViewComponent', () => {
  let component: InvestorsViewComponent;
  let fixture: ComponentFixture<InvestorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
