import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.css']
})
export class SubscriptionsListComponent implements OnInit {

  page: number = 1;
  size: number = 15;
  search: string = "";
  partners: any;
  constructor(private utilSvc: UtilityService,
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getPartners();
  }

  getPartners() {
    this.utilSvc.Get('purchase', this.page, this.size, this.search).subscribe((res: any) => {
      this.partners = res;
      console.log(this.partners);
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
    })
  }

  onChange(item) {
    this.search = item;
    this.getPartners();
  }

  markAsDelivered(id, subid) {
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
        this.utilSvc.PutSingle('purchase/markasdelivered', id, subid).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getPartners();
          }
        })
      }
    })
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
        this.utilSvc.Delete('purchase', item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getPartners();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getPartners();
  }

  refresh() {
    this.getPartners();
  }

 

}
