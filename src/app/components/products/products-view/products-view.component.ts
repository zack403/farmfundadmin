import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  product: any = {};
  apiUrl = environment.imagePath;
  constructor(private route: ActivatedRoute, private prodSvc: ProductsService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.prodSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.product = res.data;
      if(this.product.imageUrl.includes("http")) {
        return;
      }else {
        this.product.imageUrl =`${this.apiUrl}/${this.product.imageUrl}`;
      }
    })
  }

}
