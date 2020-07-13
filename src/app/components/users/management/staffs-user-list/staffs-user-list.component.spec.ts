import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsUserListComponent } from './staffs-user-list.component';

describe('StaffsUserListComponent', () => {
  let component: StaffsUserListComponent;
  let fixture: ComponentFixture<StaffsUserListComponent>;

  beforeEach(async(() => {
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
