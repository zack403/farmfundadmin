import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUserListComponent } from './clients-user-list.component';

describe('ClientsUserListComponent', () => {
  let component: ClientsUserListComponent;
  let fixture: ComponentFixture<ClientsUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
