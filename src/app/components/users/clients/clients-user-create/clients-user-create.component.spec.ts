import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUserCreateComponent } from './clients-user-create.component';

describe('ClientsUserCreateComponent', () => {
  let component: ClientsUserCreateComponent;
  let fixture: ComponentFixture<ClientsUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
