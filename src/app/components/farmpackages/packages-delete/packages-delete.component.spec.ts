import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackagesDeleteComponent } from './packages-delete.component';

describe('PackagesDeleteComponent', () => {
  let component: PackagesDeleteComponent;
  let fixture: ComponentFixture<PackagesDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
