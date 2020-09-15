import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-user-view',
  templateUrl: './clients-user-view.component.html',
  styleUrls: ['./clients-user-view.component.css']
})
export class ClientsUserViewComponent implements OnInit {
  customer: any;
  details: any;
  showDetails: boolean = false;
  total: number;



  constructor(private utilSvc: UtilityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.utilSvc.GetById('users', this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.customer = res.data;
      console.log(res);
    })
  }

  viewOrder(id) {
      const item = this.customer.Purchases.find(x => x.id === id);
      if(item){
        this.showDetails = true;
        this.details = item.PurchaseDetails;
        this.total = item.amount;
      }
  }


  back() {
    this.showDetails = false;
  }

}
