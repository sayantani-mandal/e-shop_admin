import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../category/category.service';
import { BrandService } from '../brand/brand.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  tiles: Tile[] = [{ cols: 2, rows: 3 }];
  form: FormGroup;
  isClicked: boolean = false;
  products: any;
  brands: any;
  categories: any;
  selectedProduct: any;
  displayedColumns: string[] = ['proName', 'brandId', 'price', 'createdAt'];
  searchTerm: string;

  constructor(
    private proService: ProductService,
    private catService: CategoryService,
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.proService.refreshNeeds.subscribe(() => {
      this.getProducts();
    });

    this.form = new FormGroup({
      name: new FormControl(),
      desc: new FormControl(),
      spec: new FormControl(),
      cat: new FormControl(),
      brand: new FormControl(),
      price: new FormControl(),
    });

    this.getProducts();

    this.brandService.getBrand().subscribe((res) => {
      this.brands = res;
      console.log(this.brands);
    });
    this.catService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  getProducts() {
    this.proService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  onClick() {
    this.isClicked = true;
    this.router.navigate(['product-show'], { relativeTo: this.route });
  }
  onDel(id: string) {
    this.proService.delProducts(id).subscribe((res) => {
      alert('product successfully deleted..');
      this.router.navigate(['/product']);
    });
  }

  openDialog(formTemplate, product: any) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);

    const dialogRef = this.dialog.open(formTemplate, {
      width: '90%',
      height: '90%',
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  updateProduct() {
    if (this.form.value.name == null) {
      this.form.value.name = this.selectedProduct.proName;
    }
    if (this.form.value.desc == null) {
      this.form.value.desc = this.selectedProduct.proDes;
    }
    if (this.form.value.spec == null) {
      this.form.value.spec = this.selectedProduct.proSpec;
    }
    if (this.form.value.cat == null) {
      this.form.value.cat = this.selectedProduct.categoryId;
    }
    if (this.form.value.brand == null) {
      this.form.value.brand = this.selectedProduct.brandId;
    }
    if (this.form.value.price == null) {
      this.form.value.price = this.selectedProduct.price;
    }
    console.log(
      this.form.value.name,
      this.form.value.desc,
      this.form.value.spec,
      this.form.value.cat,
      this.form.value.brand,
      this.form.value.price,
      this.selectedProduct.id
    );
    this.proService
      .updateProducts(
        this.form.value.name,
        this.form.value.desc,
        this.form.value.spec,
        this.form.value.cat,
        this.form.value.brand,
        this.form.value.price,
        this.selectedProduct.id
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {},
      });
  }
}
