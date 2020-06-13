import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "../product.service";
import { CategoryService } from "src/app/category/category.service";
import { BrandService } from "src/app/brand/brand.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProductImageuploadComponent } from "./product-imageupload/product-imageupload.component";

@Component({
  selector: "app-product-show",
  templateUrl: "./product-show.component.html",
  styleUrls: ["./product-show.component.css"],
})
export class ProductShowComponent implements OnInit {
  form: FormGroup;
  brands: any;
  categories: any;
  products: any;
  imagePreview: string;

  constructor(
    private proService: ProductService,
    private catService: CategoryService,
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      desc: new FormControl(null, { validators: [Validators.required] }),
      spec: new FormControl(null, { validators: [Validators.required] }),
      cat: new FormControl(null, { validators: [Validators.required] }),
      brand: new FormControl(null, { validators: [Validators.required] }),
      price: new FormControl(null, { validators: [Validators.required] }),
    });

    this.brandService.getBrand().subscribe((res) => {
      this.brands = res;
      console.log(this.brands);
    });
    this.catService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
    this.proService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  onSelect() {
    this.proService
      .addProducts(
        this.form.value.name,
        this.form.value.desc,
        this.form.value.spec,
        this.form.value.cat,
        this.form.value.brand,
        this.form.value.price
      )
      .subscribe(
        (res) => {
          console.log(res._id);
          //this.router.navigate(["/products/proImages", res._id]);
          const dialogConfig = new MatDialogConfig();

          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "60%";
          dialogConfig.height = "60%";
          dialogConfig.data = {
            id: res._id,
          };

          this.dialog.open(ProductImageuploadComponent, dialogConfig);
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(this.form.value.name);
    // this.router.navigate(["product-imageupload"], {
    //   relativeTo: this.route,
    // });
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "60%";
    // dialogConfig.height = "60%";

    // this.dialog.open(ProductImageuploadComponent, dialogConfig);
  }
}
