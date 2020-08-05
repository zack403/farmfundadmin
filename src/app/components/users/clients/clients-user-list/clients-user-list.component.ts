import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-clients-user-list',
  templateUrl: './clients-user-list.component.html',
  styleUrls: ['./clients-user-list.component.css']
})
export class ClientsUserListComponent implements OnInit {
  page: number = 1;
  size: number = 15;
  search: string = "";
  customers: Array<any> = [];
  constructor(private utilSvc: UtilityService,
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.utilSvc.Get('users', this.page, this.size, this.search).subscribe((res: any) => {
      this.customers = res;
      console.log(this.customers);
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
    })
  }

  
  onChange(item) {
    this.search = item;
    this.getCustomers();
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
        this.utilSvc.Delete('users', item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getCustomers();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getCustomers();
  }

  refresh() {
    this.getCustomers();
  }

}
