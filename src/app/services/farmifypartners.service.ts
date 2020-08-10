import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmifypartnersService {

  constructor(private httpSvc: HttpService) { }

  GetById(id: any){
    return this.httpSvc.getById('purchase/', id).pipe(tap(res => {
      return res;
    }))
  }

  update(id, data){
    return this.httpSvc.patch('purchase/', id, data).pipe(tap(res => {
      return res;
    }))
  }

}
