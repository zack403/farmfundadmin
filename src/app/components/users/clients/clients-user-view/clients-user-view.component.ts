import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-user-view',
  templateUrl: './clients-user-view.component.html',
  styleUrls: ['./clients-user-view.component.css']
})
export class ClientsUserViewComponent implements OnInit {

  constructor(private utilSvc: UtilityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.utilSvc.GetById('users', this.route.snapshot.paramMap.get('id')).subscribe((res: any) => {
      console.log(res);
    })
  }

}
