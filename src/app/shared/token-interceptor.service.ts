import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector, private loginService: LoginService) {}
  intercept(req, next) {
    if (this.loginService.getToken()) {
      const loginService = this.injector.get(LoginService);
      const tokenizedReq = req.clone({
        setHeaders: {
          token: loginService.getToken(),
        },
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
