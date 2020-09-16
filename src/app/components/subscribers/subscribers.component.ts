import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  imagePath = environment.imagePath;
  page: number = 1;
  size: number = 15;
  search: string = "";
  subscribers: any;
  proofOfPayment: boolean = false;
  constructor(private utilSvc: UtilityService,
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getSubscribers();
  }

  getSubscribers() {
    this.utilSvc.Get('utility/getsubscribers', this.page, this.size, this.search).subscribe((res: any) => {
      this.subscribers = res;
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
    })
  }

  onChange(item) {
    this.search = item;
    this.getSubscribers();
  }

  activateSubscriber(id) {
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
        this.utilSvc.activateSubscriber('utility/activatesubscriber', id).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getSubscribers();
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
        this.utilSvc.Delete('utility/deletesubscriber', item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getSubscribers();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getSubscribers();
  }

  refresh() {
    this.getSubscribers();
  }

}
