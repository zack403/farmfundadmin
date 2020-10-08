import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {tap} from 'rxjs/operators'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(private httpService: HttpService, 
    private router : Router) { }
  
    login(model: any) {
      return this.httpService.post('auth/login', model)
        .pipe(tap(async (res: any) => {
          console.log(res);
          if(res.data){
            localStorage.setItem("adminData", JSON.stringify(res.data));   
            localStorage.setItem("adtoken", res.token);                     
            return res;
          }
        }));
    }
  
    logout() {
        localStorage.removeItem("adminData");
        localStorage.removeItem("adtoken");
        this.router.navigateByUrl("login");
    }
  
    isLoggedIn() {
      const token = localStorage.getItem("adtoken");    
      const isTokenExpired = helper.isTokenExpired(token);
      if(!isTokenExpired){
        return true;
      }
      return false;
    }
  
   getCurrentUserData() {
      this.currentUser = JSON.parse(localStorage.getItem("adminData"));
      if (this.currentUser) {
          return this.currentUser;
      } else {
          return this.currentUser = null;
      }
    }

    changePassword(model: any) {
      return this.httpService.post('auth/change-password', model)
        .pipe(tap(async (res: any) => {                    
            return res;    
      }));
    }
  
}
