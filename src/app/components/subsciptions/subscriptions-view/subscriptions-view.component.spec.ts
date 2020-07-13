import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsViewComponent } from './subscriptions-view.component';

describe('SubscriptionsViewComponent', () => {
  let component: SubscriptionsViewComponent;
  let fixture: ComponentFixture<SubscriptionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
