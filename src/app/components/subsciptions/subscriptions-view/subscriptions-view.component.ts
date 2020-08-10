import { Component, OnInit } from '@angular/core';
import { FarmifypartnersService } from 'src/app/services/farmifypartners.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriptions-view',
  templateUrl: './subscriptions-view.component.html',
  styleUrls: ['./subscriptions-view.component.css']
})
export class SubscriptionsViewComponent implements OnInit {
  partner: any;
  constructor(private fmpSvc: FarmifypartnersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPartner();
  }

  getPartner() {
    this.fmpSvc.GetById(this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      this.partner = res.data;
      console.log("partner", this.partner);
    })
  }

}
