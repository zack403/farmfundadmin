import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient, private httpSvc: HttpService) { }


  CreatePackages(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}package`, data).pipe(tap(res => {
      return res;
    }))
  }

  
  GetPackages(page, size, search) {
    return this.httpSvc.get(`package?page=${page}&size=${size}&search=${search}`).pipe(tap(res => {
      return res;
    }))
  }

  
  GetById(id: any){
    return this.httpSvc.getById('package/', id).pipe(tap(res => {
      return res;
    }))
  }

  update(id, data){
    return this.httpSvc.patch('package/', id, data).pipe(tap(res => {
      return res;
    }))
  }

  delete(id){
    return this.httpSvc.delete('package/' + id).pipe(tap(res => {
      return res;
    }))
  }

}
