import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  product: any = {};
  constructor(private route: ActivatedRoute, 
    private toastr: ToasterService,
    private prodSvc: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.prodSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.product = res.data;
    })
  }

  OnfileChanged(event) {
    const files = event.target.files;
    this.product.imageUrl = files[0];
    if (!this.product.imageUrl.type.match(/image.*/)) return this.toastr.Error('Sorry, only images are allowed');
  }

  save(){
    const formData = new FormData();
    formData.append('image', this.product.imageUrl);
    formData.append('productName', this.product.productName);
    formData.append('price', this.product.price);

    this.prodSvc.update(this.product.id, formData).subscribe((res: any) => {
      this.toastr.Success(res.data);
      this.router.navigateByUrl('admin/products-list')
    }, err => {
      console.log(err);
    })


  }

}
