import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { tap } from 'rxjs/operators';
import { Cacheable } from 'ngx-cacheable';


@Injectable({
  providedIn: 'root'
})
export class FarmifypartnersService {

  constructor(private httpSvc: HttpService) { }

  @Cacheable()
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
