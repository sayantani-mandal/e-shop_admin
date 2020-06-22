import { Component, OnInit } from "@angular/core";
import { BrandService } from "../brand.service";
import { HttpClient } from "@angular/common/http";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-brand-show",
  templateUrl: "./brand-show.component.html",
  styleUrls: ["./brand-show.component.css"],
})
export class BrandShowComponent implements OnInit {
  brandName: string;
  selectedFile: File = null;
  brandImage: string;
  imagePreview: string;
  form: FormGroup;
  error: string = null;

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      image: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSelect() {
    if (this.form.invalid) {
      console.log(this.form);
      return;
    }
    console.log(this.form.value.name, this.form.value.image);

    this.brandService
      .addBrand(this.form.value.name, this.form.value.image)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["/brand"]);
        },
        (error) => {
          console.log(error.error.Error);
          this.error = error.error.Error;
          // alert(this.error);
        }
      ); //this.form.reset();
  }
  onFileSelected(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

// (errorRes) => {
//   console.log(errorRes);
//   switch (errorRes.error.error.message) {
//     case "Brand required":
//       this.error = "Brand name is required..!";
//   }
