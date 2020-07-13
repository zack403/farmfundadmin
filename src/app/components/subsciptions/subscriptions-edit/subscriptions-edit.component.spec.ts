import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsEditComponent } from './subscriptions-edit.component';

describe('SubscriptionsEditComponent', () => {
  let component: SubscriptionsEditComponent;
  let fixture: ComponentFixture<SubscriptionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
