import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private token: string;
  error: string = null;
  private authStatusListener = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const authData: any = {
      email: email,
      password: password,
    };
    console.log(authData);

    this.http
      .post<{ token: string }>('http://localhost:3006/api/adminLogin', authData)
      .subscribe(
        (response) => {
          console.log(response);
          console.log(localStorage.getItem('token'));

          localStorage.setItem('token', response.token);
          console.log(localStorage.getItem('token'));
          this.token = response.token;
          const token = this.token;
          if (token) {
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          console.log(error);
          this.error = error.error.Error;
          this.authStatusListener.next(this.error);
        }
      );
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }
  logout() {
    this.http
      .get('http://localhost:3006/api/adminLogin/logout', {
        headers: { token: this.token },
      })
      .subscribe((response) => {
        console.log(response);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
  }

  getAuthListener() {
    return this.authStatusListener.asObservable();
  }
}
