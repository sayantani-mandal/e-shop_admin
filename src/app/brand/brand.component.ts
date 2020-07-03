import { Component, OnInit } from "@angular/core";
import { BrandService } from "./brand.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.css"],
})
export class BrandComponent implements OnInit {
  isClicked: boolean = false;
  brands: any;
  searchTerm: string;
  displayedColumns: string[] = [
    "brandImage",
    "brandName",
    "createdAt",
    "actions",
  ];

  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.brandService.getBrand().subscribe((res) => {
      this.brands = res;
      console.log(res[0].brandName);
      console.log(this.brands[0].brandName);
    });
  }
  onClick() {
    this.isClicked = true;
    this.router.navigate(["brand-show"], { relativeTo: this.route });
  }
  onDel(id: string) {
    this.brandService.delBrand(id).subscribe((res) => {
      alert("Brand is deleted successfully");
      this.router.navigate(["/brand"]);
    });
  }
}
