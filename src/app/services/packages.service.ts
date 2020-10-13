import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }


  CreatePackages(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}package`, data).pipe(tap(res => {
      return res;
    }))
  }

}
