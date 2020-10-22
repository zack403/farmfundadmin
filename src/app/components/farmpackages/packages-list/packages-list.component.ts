import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  page: number = 1;
  size: number = 15;
  search: string = "";
  packages: any;
  constructor(private pckSvc: PackagesService, 
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getPackages();
  }

  getPackages(){
     this.pckSvc.GetPackages(this.page, this.size, this.search).subscribe((res: any) => {
      this.packages = res;
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
     }, err => {
       console.log(err);
     })
  }

  onChange(item) {
    this.search = item;
    this.getPackages();
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
        this.pckSvc.delete(item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getPackages();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getPackages();
  }
}
