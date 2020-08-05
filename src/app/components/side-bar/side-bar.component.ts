import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: any;
  photo: string;
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.user = this.authSvc.getCurrentUserData();
  }

  logout() {
    this.authSvc.logout(); 
   }

}
