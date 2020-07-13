import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsDeleteComponent } from './subscriptions-delete.component';

describe('SubscriptionsDeleteComponent', () => {
  let component: SubscriptionsDeleteComponent;
  let fixture: ComponentFixture<SubscriptionsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
