import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsEditComponent } from './investors-edit.component';

describe('InvestorsEditComponent', () => {
  let component: InvestorsEditComponent;
  let fixture: ComponentFixture<InvestorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
