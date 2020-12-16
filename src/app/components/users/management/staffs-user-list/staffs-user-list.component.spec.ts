import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffsUserListComponent } from './staffs-user-list.component';

describe('StaffsUserListComponent', () => {
  let component: StaffsUserListComponent;
  let fixture: ComponentFixture<StaffsUserListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
