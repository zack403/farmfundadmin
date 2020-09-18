import { Component, OnInit } from '@angular/core';
import { FarmifypartnersService } from 'src/app/services/farmifypartners.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToasterService } from 'src/app/services/toaster.service';


@Component({
  selector: 'app-subscriptions-edit',
  templateUrl: './subscriptions-edit.component.html',
  styleUrls: ['./subscriptions-edit.component.css']
})
export class SubscriptionsEditComponent implements OnInit {
  partner: any;
  constructor(private fmpSvc: FarmifypartnersService, private toastr: ToasterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPartner();
  }

  getPartner() {
    this.fmpSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.partner = res.data;
      console.log("partner", this.partner);
    })
  }

  edit(index){
    Swal.fire({
      title: 'Edit Price',
      input: 'text',
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      showCancelButton: true,
      confirmButtonText: 'Edit'
    }).then((result) => {
      if(result.value) {
        this.partner.PurchaseDetails[index].price = result.value;
      }
    })
  }

  delete(index){
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
        this.partner.PurchaseDetails.splice(index, 1);
      }
    })
  }

  save() {
    this.fmpSvc.update(this.route.snapshot.paramMap.get('id'), this.partner).subscribe((res: any) => {
      this.toastr.Success(res.data);
    })
  }

}
