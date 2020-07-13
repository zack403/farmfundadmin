import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsCreateComponent } from './subscriptions-create.component';

describe('SubscriptionsCreateComponent', () => {
  let component: SubscriptionsCreateComponent;
  let fixture: ComponentFixture<SubscriptionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
