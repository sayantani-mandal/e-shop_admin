import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryService } from "./category/category.service";
import { LoginComponent } from "./login/login.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppMaterialModule } from "./app-material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { BrandComponent } from "./brand/brand.component";
import { BrandShowComponent } from "./brand/brand-show/brand-show.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CategoryShowComponent } from "./category/category-show/category-show.component";
import { ProductShowComponent } from "./product/product-show/product-show.component";
import { ProductImageuploadComponent } from "./product/product-show/product-imageupload/product-imageupload.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CategoryComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductComponent,
    BrandComponent,
    BrandShowComponent,
    CategoryShowComponent,
    ProductShowComponent,
    ProductImageuploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
