import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../_services/authentication.service";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authenticationService.userValue;
    const isLoggedIn = user != null;
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          "Authorization": `Basic ${user?.token}`
        }
      });
    }
    return next.handle(request);
  }
}
