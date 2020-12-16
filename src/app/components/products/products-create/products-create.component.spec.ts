import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsCreateComponent } from './products-create.component';

describe('ProductsCreateComponent', () => {
  let component: ProductsCreateComponent;
  let fixture: ComponentFixture<ProductsCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
