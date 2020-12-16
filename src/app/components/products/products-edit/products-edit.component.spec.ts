import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsEditComponent } from './products-edit.component';

describe('ProductsEditComponent', () => {
  let component: ProductsEditComponent;
  let fixture: ComponentFixture<ProductsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
