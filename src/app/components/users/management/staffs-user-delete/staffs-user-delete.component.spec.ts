import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffsUserDeleteComponent } from './staffs-user-delete.component';

describe('StaffsUserDeleteComponent', () => {
  let component: StaffsUserDeleteComponent;
  let fixture: ComponentFixture<StaffsUserDeleteComponent>;

  beforeEach(waitForAsync(() => {
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
