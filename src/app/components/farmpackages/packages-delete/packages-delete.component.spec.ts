import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDeleteComponent } from './packages-delete.component';

describe('PackagesDeleteComponent', () => {
  let component: PackagesDeleteComponent;
  let fixture: ComponentFixture<PackagesDeleteComponent>;

  beforeEach(async(() => {
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
