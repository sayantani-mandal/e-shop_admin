import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  id: any;
  proName: string;
  proDes: string;
  proSpec: string;
  categoryId: string;
  brandId: string;
  price: string;

  constructor(private http: HttpClient, private router: Router) {}

  getProducts() {
    return this.http.get("http://localhost:3006/api/products");
  }
  delProducts(id: string) {
    return this.http.get("http://localhost:3006/api/products/" + id);
  }
  addProducts(
    proName: string,
    proDes: string,
    proSpec: string,
    categoryId: any,
    brandId: any,
    price: string
  ) {
    const postData = {
      proName: proName,
      proDes: proDes,
      proSpec: proSpec,
      categoryId: categoryId,
      brandId: brandId,
      price: price,
    };

    return this.http.post<{ _id: string }>(
      "http://localhost:3006/api/products",
      postData
    );
  }

  addImages(id: string, images: File[]) {
    const fd = new FormData();
    for (let index = 0; index < images.length; index++) {
      fd.append("proImages", images[index]);
    }
    console.log(fd.getAll("proImages"));

    return this.http.post(
      "http://localhost:3006/api/products/proImages/" + id,
      fd
    );
  }
}
