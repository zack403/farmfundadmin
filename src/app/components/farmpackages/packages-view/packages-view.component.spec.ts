import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesViewComponent } from './packages-view.component';

describe('PackagesViewComponent', () => {
  let component: PackagesViewComponent;
  let fixture: ComponentFixture<PackagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
