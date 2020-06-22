import { NgModule } from "@angular/core";
import { BrandComponent } from "./brand.component";
import { BrandShowComponent } from "./brand-show/brand-show.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";
import { BrandsRoutingModule } from "./brands-routing.module";
import { BrandFilterPipe } from "./brand-filter.pipe";

@NgModule({
  declarations: [BrandComponent, BrandShowComponent, BrandFilterPipe],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FormsModule,
    BrandsRoutingModule,
  ],
  exports: [BrandComponent, BrandShowComponent],
})
export class BrandModule {}
