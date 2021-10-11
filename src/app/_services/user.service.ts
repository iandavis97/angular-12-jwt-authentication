import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }
  //mock call using BackendInterceptor
  getPublicContent(): Observable<any> {
    return this.http.get('http://localhost:4200/all', { responseType: 'text' });
  }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  //mock call using BackendInterceptor
  getUserBoard(): Observable<any> {
    return this.http.get('http://localhost:4200/user', { responseType: 'text' });
  }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  //mock call using BackendInterceptor
  getModeratorBoard(): Observable<any> {
    return this.http.get('http://localhost:4200/mod', { responseType: 'text' });
  }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }

  //mock call using BackendInterceptor
  getAdminBoard(): Observable<any> {
    return this.http.get('http://localhost:4200/admin', { responseType: 'text' });
  }
}
