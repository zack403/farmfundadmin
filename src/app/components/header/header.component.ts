import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  photo: string;
  constructor(private authSvc: AuthService, private toastrSvc: ToasterService) { }

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

   changePassword() {
    Swal.fire({
      title: 'Change Password',
      html:
      '<input required placeholder="Old password" type="password" id="old" class="swal2-input" autofocus >' +
      '<input required placeholder="New Password price" type="password" id="new" class="swal2-input">' +
      '<input required placeholder="Confirm New password" id="confirmnew" type="password" class="swal2-input">',
      showCloseButton: true,
      confirmButtonText: 'Update',
      confirmButtonColor: 'green',
      preConfirm: () => {
        let oldPassword = (<HTMLInputElement> document.getElementById('old')).value;
        let newPassword = (<HTMLInputElement> document.getElementById('new')).value;
        let confirmNewP = (<HTMLInputElement> document.getElementById('confirmnew')).value;

        if(oldPassword === '' || newPassword === '' || confirmNewP === '') {
          Swal.showValidationMessage("Old password/New password/Confirm New password is required"); // Show error when validation fails.
        } else if (oldPassword === newPassword || oldPassword === confirmNewP) {
          Swal.showValidationMessage("Old password cannot be the same with new password");
        } else if (newPassword != confirmNewP) {
          Swal.showValidationMessage("Confirm password must match New password"); // Show error when validation fails.
        } 

        return {
          oldPassword,
          newPassword,
          confirmNewP
        }
      }

    }).then( result => {
      if(result.value) {
        this.authSvc.changePassword(result.value).subscribe(s => {
          this.toastrSvc.Success(s.message);
          this.authSvc.logout();
        });
      }
    })
  }

}
