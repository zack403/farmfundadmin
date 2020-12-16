import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscriptionsListComponent } from './subscriptions-list.component';

describe('SubscriptionsListComponent', () => {
  let component: SubscriptionsListComponent;
  let fixture: ComponentFixture<SubscriptionsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
