import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private httpSvc: HttpService) { }

    CreateProduct(data: any): Observable<any> {
      return this.http.post(`${environment.baseUrl}foodmarket`, data).pipe(tap(res => {
        return res;
      }))
    }

    GetProducts(page, size, search) {
      return this.httpSvc.get(`foodmarket?page=${page}&size=${size}&search=${search}`).pipe(tap(res => {
        return res;
      }))
    }

    @Cacheable()
    GetById(id: any){
      return this.httpSvc.getById('foodmarket/', id).pipe(tap(res => {
        return res;
      }))
    }

    update(id, data){
      return this.httpSvc.patch('foodmarket/', id, data).pipe(tap(res => {
        return res;
      }))
    }

    delete(id){
      return this.httpSvc.delete('foodmarket/' + id).pipe(tap(res => {
        return res;
      }))
    }

}
