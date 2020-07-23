import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brandName: string;
  selectedFile: File = null;
  token: string = this.loginService.getToken();

  constructor(private http: HttpClient, private loginService: LoginService) {}

  getBrand() {
    return this.http.get('http://localhost:3006/api/brands', {
      headers: { token: this.loginService.getToken() },
    });
  }

  delBrand(id: string) {
    return this.http.get('http://localhost:3006/api/brands/' + id);
  }
  addBrand(brandName: string, brandImage: File) {
    const fd = new FormData();
    fd.append('brandName', brandName);
    fd.append('brandImage', brandImage);

    return this.http.post('http://localhost:3006/api/brands', fd);
  }
}
