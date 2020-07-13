import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUserEditComponent } from './clients-user-edit.component';

describe('ClientsUserEditComponent', () => {
  let component: ClientsUserEditComponent;
  let fixture: ComponentFixture<ClientsUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
