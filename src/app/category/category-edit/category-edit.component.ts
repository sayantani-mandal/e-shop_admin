import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.css"],
})
export class CategoryEditComponent implements OnInit {
  form: FormGroup;
  categories: any;

  constructor(private catService: CategoryService) {}

  ngOnInit() {
    this.catService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }
}
