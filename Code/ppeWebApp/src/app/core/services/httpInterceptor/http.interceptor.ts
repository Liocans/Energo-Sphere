import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

  constructor(private authenticationService : AuthenticationService, private router : Router, private localStorage : LocalService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    
    return next.handle(req).pipe(
      tap(
        event => {},
        error => {
          
          if (error.status === 403) {
            this.authenticationService.signout().subscribe((msg)=>{
              this.localStorage.clearData();
              this.router.navigate(['/login']);
            });
          }
          
          if(error.status === 401){
            this.authenticationService.signout().subscribe((msg)=>{
              this.localStorage.clearData();
              this.router.navigate(['/login']);
              this.throwError("There is a problem with the database, please contact the creators fo the app")
            });
          }

          if(error.status === 0){
            this.localStorage.clearData();
            this.router.navigate(['/login']);
            this.throwError("The server seems to be offline, please contact the creators of the app")
          }
        }
      )
    );
  }

  throwError(value: string){
    if(environment.production){
      throw new Error(value);
    }
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
