import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BrandService } from 'src/app/brand/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.css'],
})
export class CategoryShowComponent implements OnInit, OnDestroy {
  form: FormGroup;
  brands: any;
  brandData = [];
  brandIds = [];
  error: string = null;
  authStatus: Subscription;

  constructor(
    private catService: CategoryService,
    private brandService: BrandService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      desc: new FormControl(null, { validators: [Validators.required] }),
      brand: new FormControl(null, { validators: [Validators.required] }),
    });
    this.brandService.getBrand().subscribe((res) => {
      this.brands = res;
      console.log(this.brands);
    });
  }

  onSelect() {
    if (this.form.invalid) {
      console.log(this.form);
      return;
    }
    console.log(
      this.form.value.name,
      this.form.value.desc,
      this.form.value.brand
    );
    this.brandData = this.form.value.brand;
    this.brandData.forEach((brand) => {
      this.brandIds.push({ brandId: brand });
    });
    console.log(this.brandIds);
    this.catService.addCategory(
      this.form.value.name,
      this.form.value.desc,
      this.brandIds
    );
    this.authStatus = this.catService.getAuthListener().subscribe((error) => {
      this.error = error;
    });
  }
  ngOnDestroy() {
    if (this.authStatus) {
      this.authStatus.unsubscribe();
    }
  }
}
