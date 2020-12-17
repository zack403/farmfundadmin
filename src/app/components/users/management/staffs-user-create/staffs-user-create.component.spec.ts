import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffsUserCreateComponent } from './staffs-user-create.component';

describe('StaffsUserCreateComponent', () => {
  let component: StaffsUserCreateComponent;
  let fixture: ComponentFixture<StaffsUserCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
