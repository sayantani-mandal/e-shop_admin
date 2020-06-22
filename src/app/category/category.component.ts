import { Component, OnInit } from "@angular/core";
import { CategoryService } from "./category.service";
import { Category } from "../shared/category.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  isClicked: boolean = false;
  categories: any;
  displayedColumns: string[] = ["catName", "createdAt", "actions"];

  constructor(
    private catService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.catService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }
  onClick() {
    this.isClicked = true;
    this.router.navigate(["category-show"], { relativeTo: this.route });
  }
  onEdit(id: string) {
    this.isClicked = true;
    this.router.navigate(["category-edit"], {
      relativeTo: this.route,
    });
  }

  onDel(id: string) {
    this.catService.delCategory(id).subscribe((res) => {
      alert("Category is successfully deleted..");
      this.router.navigate(["/category"]);
    });
  }
}
