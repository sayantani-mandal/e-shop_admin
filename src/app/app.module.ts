import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppMaterialModule } from "./app-material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductShowComponent } from "./product/product-show/product-show.component";
import { ProductImageuploadComponent } from "./product/product-show/product-imageupload/product-imageupload.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductFilterPipe } from "./product/product-filter.pipe";
import { BrandModule } from "./brand/brand.module";
import { CategoriesModule } from "./category/categories.module";
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductShowComponent,
    ProductImageuploadComponent,
    DashboardComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrandModule,
    //CategoriesModule,
    CoreModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
