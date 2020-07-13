import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUserDeleteComponent } from './clients-user-delete.component';

describe('ClientsUserDeleteComponent', () => {
  let component: ClientsUserDeleteComponent;
  let fixture: ComponentFixture<ClientsUserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsUserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
