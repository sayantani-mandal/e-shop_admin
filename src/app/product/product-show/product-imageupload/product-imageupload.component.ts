import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-imageupload",
  templateUrl: "./product-imageupload.component.html",
  styleUrls: ["./product-imageupload.component.css"],
})
export class ProductImageuploadComponent implements OnInit {
  isSelected: boolean = false;
  form: FormGroup;
  imagePreview: string;
  images = [];
  products: any;

  constructor(
    private dialModRef: MatDialogRef<ProductImageuploadComponent>,
    private router: Router,
    private route: ActivatedRoute,
    private proService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
    });
    console.log(this.data.id);
  }

  onFileSelected(e) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.images.push(events.target.result);
          this.form.patchValue({ image: this.images });
        };
      }
    }
  }

  onClick() {
    console.log(this.images);
    this.proService
      .addImages(this.data.id, this.form.value.image)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["/dashboard/product"]);
      });
  }

  onClose() {
    this.dialModRef.close();
    // this.router.navigate(["product-show"], {
    //   relativeTo: this.route,
    // });
  }
}

// if (event.target.files && event.target.files[0]) {
//   var filesAmount = event.target.files.length;
//   for (let i = 0; i < filesAmount; i++) {
//     var reader = new FileReader();

//     reader.onload = (event: any) => {
//       console.log(event.target.result);
//       this.images.push(event.target.result);
//     };

//     reader.readAsDataURL(event.target.files[i]);
//   }
// }
