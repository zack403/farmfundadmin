import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackagesCreateComponent } from './packages-create.component';

describe('PackagesCreateComponent', () => {
  let component: PackagesCreateComponent;
  let fixture: ComponentFixture<PackagesCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
