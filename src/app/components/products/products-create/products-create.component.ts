import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  productData: any = {
    productName: '',
    price: ''
  };
  isBusy: boolean = false;
  constructor(private toastr: ToasterService, private prodSvc: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  OnfileChanged(event) {
    const files = event.target.files;
    const f = files[0];
    if (!f.type.match(/image.*/)) return this.toastr.Error('Sorry, only images are allowed');
    this.productData.imageUrl = f;
  }

  save() {
    this.isBusy = true;
    const formData = new FormData();
    formData.append('image', this.productData.imageUrl);
    formData.append('productName', this.productData.productName);
    formData.append('price', this.productData.price);

    this.prodSvc.CreateProduct(formData).subscribe((res: any) => {
      this.toastr.Success(res.message);
      this.isBusy = false;
      this.router.navigateByUrl("admin/products-list");
    }, err => {
      this.isBusy = false;
      console.log(err);
    })
  }

}
