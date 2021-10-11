import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signin', {
  //     email,
  //     password
  //   }, httpOptions);
  // }

  //mock call with BackendInterceptor
  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:4200/signin', {
      email,
      password
    }, httpOptions);
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }
  //mock call with BackendInterceptor
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:4200/signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  // //temporary until api functions implemented
  // forgotPassword(email:string):Observable<any>{
  //   return this.http.post(AUTH_API + 'forgot-password', {
  //     email,
  //   }, httpOptions);
  // }

  //mock call with BackendInterceptor
  //temporary until api functions implemented
  forgotPassword(email:string):Observable<any>{
    return this.http.post('http://localhost:4200/forgot-password', {
      email,
    }, httpOptions);
  }

  // //temporary until api functions implemented
  // changePassword(currentPassword:string,newPassword:string,confirmPassword:string):Observable<any>{
  //   return this.http.post(AUTH_API + 'change-password', {
  //     currentPassword,newPassword,confirmPassword,
  //   }, httpOptions);
  // }

  //mock call with BackendInterceptor
  //temporary until api functions implemented
  changePassword(currentPassword:string,newPassword:string,confirmPassword:string):Observable<any>{
    return this.http.post('http://localhost:4200/change-password', {
      currentPassword,newPassword,confirmPassword,
    }, httpOptions);
  }
  
  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }
}
