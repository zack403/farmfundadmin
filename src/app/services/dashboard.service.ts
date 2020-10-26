import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpSvc: HttpService) { }

  Get(route) {
    return this.httpSvc.get(route).pipe(tap(res => {
      return res;
    }))
  }
}
