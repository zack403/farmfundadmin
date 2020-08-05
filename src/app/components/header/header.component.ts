import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
