import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsUserCreateComponent } from './staffs-user-create.component';

describe('StaffsUserCreateComponent', () => {
  let component: StaffsUserCreateComponent;
  let fixture: ComponentFixture<StaffsUserCreateComponent>;

  beforeEach(async(() => {
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
