import { Category } from "../shared/category.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class CategoryService {
  catName: string;
  catDes: string;
  brandName: string;
  error: string = null;
  private authStatusListener = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}
  getCategories() {
    return this.http.get("http://localhost:3006/api/categories");
  }

  delCategory(id: string) {
    return this.http.get("http://localhost:3006/api/categories/" + id);
  }

  addCategory(catName: string, catDes: string, brandId: any) {
    const postData = {
      catName: catName,
      catDes: catDes,
      brandIds: brandId,
    };

    this.http.post("http://localhost:3006/api/categories", postData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/category"]);
      },
      (error) => {
        console.log(error);
        this.error = error.error.Error;
        this.authStatusListener.next(this.error);
      }
    );
  }

  getAuthListener() {
    return this.authStatusListener.asObservable();
  }
}
