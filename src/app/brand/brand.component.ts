import { Component, OnInit } from "@angular/core";
import { BrandService } from "./brand.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.css"],
})
export class BrandComponent implements OnInit {
  isClicked: boolean = false;
  brands: any;
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
    });
  }
  onClick() {
    this.isClicked = true;
    this.router.navigate(["brand-show"], { relativeTo: this.route });
  }
  onDel(id: string) {
    this.brandService.delBrand(id).subscribe((res) => {
      alert("Brand is deleted successfully");
      this.router.navigate(["dashboard/brand", { relativeTo: this.route }]);
    });
  }
}
