// import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
// import {tap} from 'rxjs/operators'
// import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

// const helper = new JwtHelperService();


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   currentUser: any;

//   constructor(private httpService: HttpService, 
//     private router : Router) { }
  
//     login(model: any) {
//       return this.httpService.post('auth/login', model)
//         .pipe(tap(async (res: any) => {
//           console.log(res);
//           if(res.data){
//             localStorage.setItem("authData", JSON.stringify(res.data));   
//             localStorage.setItem("token", res.token);                     
//             return res;
//           }
//         }));
//     }
  
//     logout() {
//         localStorage.removeItem("authData");
//         localStorage.removeItem("token");
//         this.router.navigateByUrl("home");
//     }
  
//     isLoggedIn() {
//       const token = localStorage.getItem("token");    
//       const isTokenExpired = helper.isTokenExpired(token);
//       if(!isTokenExpired){
//         return true;
//       }
//       return false;
//     }
  
//    getCurrentUserData() {
//       this.currentUser = JSON.parse(localStorage.getItem("authData"));
//       if (this.currentUser) {
//           return this.currentUser;
//       } else {
//           return this.currentUser = null;
//       }
//     }
  
// }
