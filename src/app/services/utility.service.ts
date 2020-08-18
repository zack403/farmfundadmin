import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { tap } from 'rxjs/operators';
import {Cacheable} from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpSvc: HttpService) { }

  Get(route, page, size, search) {
    return this.httpSvc.get(`${route}?page=${page}&size=${size}&search=${search}`).pipe(tap(res => {
      return res;
    }))
  }

  @Cacheable()
    GetById(route, id: any){
      return this.httpSvc.getById(`${route}/`, id).pipe(tap(res => {
        return res;
      }))
    }

  Delete(route, id){
    return this.httpSvc.delete(`${route}/` + id).pipe(tap(res => {
      return res;
    }))
  }

  PutSingle(route, id) {
    return this.httpSvc.put(`${route}/` + id, {}).pipe(tap(res => {
      return res;
    }))
  }
}
