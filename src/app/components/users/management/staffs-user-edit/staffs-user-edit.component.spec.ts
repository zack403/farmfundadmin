import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsUserEditComponent } from './staffs-user-edit.component';

describe('StaffsUserEditComponent', () => {
  let component: StaffsUserEditComponent;
  let fixture: ComponentFixture<StaffsUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
