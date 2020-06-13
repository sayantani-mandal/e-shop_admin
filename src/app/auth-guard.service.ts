import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    const token = this.loginService.getToken();
    if (token == null) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
