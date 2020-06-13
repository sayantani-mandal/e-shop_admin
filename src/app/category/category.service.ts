import { Category } from "../shared/category.model";
import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService {
  catName: string;
  catDes: string;
  brandName: string;
  //  catSelected = new EventEmitter<Category>();
  //private categories: any

  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get("http://localhost:3006/api/categories");
  }

  delCategory(id: string) {
    return this.http.get("http://localhost:3006/api/categories/" + id);
  }

  addCategory(catName: string, catDes: string, brandId: any) {
    // const fd = new FormData();
    // fd.append("catName", catName);
    // fd.append("catDes", catDes);
    // fd.append("brandIds", brandId);

    const postData = {
      catName: catName,
      catDes: catDes,
      brandIds: brandId,
    };

    //console.log(fd.get("brandIds"));
    this.http
      .post("http://localhost:3006/api/categories", postData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
