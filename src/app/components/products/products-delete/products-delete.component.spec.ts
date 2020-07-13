import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDeleteComponent } from './products-delete.component';

describe('ProductsDeleteComponent', () => {
  let component: ProductsDeleteComponent;
  let fixture: ComponentFixture<ProductsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
