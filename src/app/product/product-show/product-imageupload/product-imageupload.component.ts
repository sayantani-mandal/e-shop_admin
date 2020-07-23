import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-imageupload',
  templateUrl: './product-imageupload.component.html',
  styleUrls: ['./product-imageupload.component.css'],
})
export class ProductImageuploadComponent implements OnInit {
  isSelected: boolean = false;
  form: FormGroup;
  imagePreview: string[] = [];
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
    const files = (e.target as HTMLInputElement).files;
    if (files[0]) {
      for (let i = 0; i < files.length; i++) {
        var reader = new FileReader();
        this.images.push(files[i]);
        this.form.patchValue({ image: this.images });
        reader.onload = () => {
          this.imagePreview.push(reader.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  onClick() {
    console.log(this.images);
    this.proService
      .addImages(this.data.id, this.form.value.image)
      .subscribe((res) => {
        console.log(res);
        this.dialModRef.close();
        this.router.navigate(['/product']);
      });
  }

  //  onClose() {
  // this.dialModRef.close();
  // this.router.navigate(["product-show"], {
  //   relativeTo: this.route,
  // });
  // }
}
