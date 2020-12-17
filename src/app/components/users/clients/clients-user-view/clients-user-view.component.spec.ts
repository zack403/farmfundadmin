import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientsUserViewComponent } from './clients-user-view.component';

describe('ClientsUserViewComponent', () => {
  let component: ClientsUserViewComponent;
  let fixture: ComponentFixture<ClientsUserViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
