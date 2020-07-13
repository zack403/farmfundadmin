import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesEditComponent } from './packages-edit.component';

describe('PackagesEditComponent', () => {
  let component: PackagesEditComponent;
  let fixture: ComponentFixture<PackagesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
