import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  page: number = 1;
  size: number = 15;
  search: string = "";
  products: any;
  constructor(private prodSvc: ProductsService, 
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
     this.prodSvc.GetProducts(this.page, this.size, this.search).subscribe((res: any) => {
      this.products = res;
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
     }, err => {
       console.log(err);
     })
  }

  onChange(item) {
    this.search = item;
    this.getProducts();
  }


  delete(item){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'Cancel',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      closeOnConfirm: true,
      closeOnCancel: true
    }).then((result) => {
      if(result.value) {
        this.prodSvc.delete(item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getProducts();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getProducts();
  }

}
