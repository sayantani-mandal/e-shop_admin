import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  isClicked: boolean = false;
  products: any;
  displayedColumns: string[] = ["proName", "brandId", "price", "createdAt"];
  searchTerm: string;

  constructor(
    private proService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("abcd");
    this.proService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  onClick() {
    this.isClicked = true;
    this.router.navigate(["product-show"], { relativeTo: this.route });
  }
  onDel(id: string) {
    this.proService.delProducts(id).subscribe((res) => {
      alert("product successfully deleted..");
      this.router.navigate(["/product"]);
    });
  }
}
