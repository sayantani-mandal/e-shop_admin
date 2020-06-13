import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BrandService {
  brandName: string;
  selectedFile: File = null;
  constructor(private http: HttpClient) {}

  getBrand() {
    return this.http.get("http://localhost:3006/api/brands");
  }

  delBrand(id: string) {
    return this.http.get("http://localhost:3006/api/brands/" + id);
  }
  addBrand(brandName: string, brandImage: File) {
    const fd = new FormData();
    fd.append("brandName", brandName);
    fd.append("brandImage", brandImage);

    return this.http.post("http://localhost:3006/api/brands", fd);
    // .subscribe((res) => {
    //   console.log(res);
    // });
    // (err) => {
    // if (err) console.log(err);
    // console.log("Success");
    // (res) => {
    // console.log(res);
    // this.brandName = res.brandName;
  }
}
