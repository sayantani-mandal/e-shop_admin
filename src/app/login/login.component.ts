import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  showSpinner = false;
  error: string = null;
  authStatus: Subscription;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.showSpinner = true;
    this.loginService.login(this.email, this.password);
    this.authStatus = this.loginService.getAuthListener().subscribe((error) => {
      this.showSpinner = false;
      this.error = error;
    });
  }

  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }
}
