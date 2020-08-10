import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


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
        this.authSvc.logout(); 
      }
    })
   }

}
