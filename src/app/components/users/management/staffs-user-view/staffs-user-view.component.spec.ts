import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StaffsUserViewComponent } from './staffs-user-view.component';

describe('StaffsUserViewComponent', () => {
  let component: StaffsUserViewComponent;
  let fixture: ComponentFixture<StaffsUserViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
