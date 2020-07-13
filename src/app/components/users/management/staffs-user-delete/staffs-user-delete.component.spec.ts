import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsUserDeleteComponent } from './staffs-user-delete.component';

describe('StaffsUserDeleteComponent', () => {
  let component: StaffsUserDeleteComponent;
  let fixture: ComponentFixture<StaffsUserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
