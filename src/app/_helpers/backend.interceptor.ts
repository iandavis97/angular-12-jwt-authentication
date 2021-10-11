//*USED FOR MOCKING API*

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { AuthInterceptor } from "./auth.interceptor";

const usersData = {
    "users": [
    {
      "username": "tony-stark",
      "email":"tony.stark@starkindustries.com",
      "password":"Password1!",
      "accessToken":"testAccess",
      "refreshToken":"testRefresh",
      "roles":["ROLE_ADMIN","ROLE_MODERATOR","ROLE_USER"]
    },
    ]
   }

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.method === "POST"){
            if(request.url === "http://localhost:4200/signup") {
                return of(new HttpResponse({ status: 200, body: usersData }));
            }
            else if(request.url === "http://localhost:4200/signin") {
                return of(new HttpResponse({ status: 200, body: usersData }));
            }
            else if(request.url === "http://localhost:4200/forgot-password") {
                return of(new HttpResponse({ status: 200, body: usersData }));
            }
            else if(request.url === "http://localhost:4200/change-password") {
                return of(new HttpResponse({ status: 200, body: usersData }));
            }
            else return of(new HttpResponse({ status: 401, body: null }));
        }
        else if(request.method === "GET"){
            if(request.url === "http://localhost:4200/all"){
                return of(new HttpResponse({ status: 200, body: "test" }));
            }
            else if(request.url === "http://localhost:4200/user"){
                return of(new HttpResponse({ status: 200, body: "test" }));
            }
            else if(request.url === "http://localhost:4200/mod"){
                return of(new HttpResponse({ status: 200, body: "test" }));
            }
            else if(request.url === "http://localhost:4200/admin"){
                return of(new HttpResponse({ status: 200, body: "test" }));
            }
            else return of(new HttpResponse({ status: 401, body: null }));
        }
        else return of(new HttpResponse({ status: 401, body: null }));
        next.handle(request);
    }
}
export const backendInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ];