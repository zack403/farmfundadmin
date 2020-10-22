import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import { UtilityService } from 'src/app/services/utility.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  imagePath = environment.imagePath;
  page: number = 1;
  size: number = 15;
  search: string = "";
  investments: any;
  proofOfPayment: boolean = false;
  constructor(private utilSvc: UtilityService,
    private toastr: ToasterService) { }

  ngOnInit() {
    this.getInvestments();
  }

  getInvestments() {
    this.utilSvc.Get('investment', this.page, this.size, this.search).subscribe((res: any) => {
      this.investments = res;
      if(res.data.length === 0) return this.toastr.Info("No Record found");  
    })
  }

  onChange(item) {
    this.search = item;
    this.getInvestments();
  }

  activateInvestment(id) {
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
        this.utilSvc.activateInvestment('investment/activateinvestment', id).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getInvestments();
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
        this.utilSvc.Delete('investment', item).subscribe((res: any) => {
          if(res.data){
            this.toastr.Success(res.data);
            this.getInvestments();
          }
        })
      }
    })
  }

  handlePageChange(event) {
    this.page = event;
    this.getInvestments();
  }

  refresh() {
    this.getInvestments();
  }

}
