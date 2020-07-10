import { NgModule } from "@angular/core";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { AuthGuardService } from "./auth-guard.service";
import { ProductShowComponent } from "./product/product-show/product-show.component";
import { ProductImageuploadComponent } from "./product/product-show/product-imageupload/product-imageupload.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrandComponent } from "./brand/brand.component";
import { BrandShowComponent } from "./brand/brand-show/brand-show.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: MainNavComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "brand", component: BrandComponent },
      { path: "brand/brand-show", component: BrandShowComponent },
      // {
      //   path: "brand",
      //   loadChildren: () =>
      //     import("./brand/brand.module").then((m) => m.BrandModule),
      // },

      {
        path: "category",
        loadChildren: () =>
          import("./category/categories.module").then(
            (m) => m.CategoriesModule
          ),
      },
      // {
      //   path: "category",
      //   loadChildren: "./category/categories.module#CategoriesModule",
      // },
      { path: "product", component: ProductComponent },
      { path: "product/product-show", component: ProductShowComponent },
      {
        path: "product/product-show/product-imageupload",
        component: ProductImageuploadComponent,
      },
    ],
    canActivate: [AuthGuardService],
  },
  {
    path: "not-found",
    component: PageNotFoundComponent,
    canActivate: [AuthGuardService],
  },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  entryComponents: [ProductImageuploadComponent],
  providers: [AuthGuardService],
})
export class AppRoutingModule {}

// import { NgModule } from "@angular/core";
// import { MainNavComponent } from "./main-nav/main-nav.component";
// import { CategoryComponent } from "./category/category.component";
// import { Routes, RouterModule } from "@angular/router";
// import { LoginComponent } from "./login/login.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// import { ProductComponent } from "./product/product.component";
// import { AuthGuardService } from "./auth-guard.service";
// import { BrandComponent } from "./brand/brand.component";
// import { BrandShowComponent } from "./brand/brand-show/brand-show.component";
// import { CategoryShowComponent } from "./category/category-show/category-show.component";
// import { ProductShowComponent } from "./product/product-show/product-show.component";
// import { ProductImageuploadComponent } from "./product/product-show/product-imageupload/product-imageupload.component";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { CategoryEditComponent } from "./category/category-edit/category-edit.component";

// const appRoutes: Routes = [
//   { path: "", redirectTo: "/login", pathMatch: "full" },
//   { path: "login", component: LoginComponent },
//   {
//     path: "",
//     component: MainNavComponent,
//     children: [
//       { path: "dashboard", component: DashboardComponent },
//       { path: "category", component: CategoryComponent },
//       { path: "category/category-show", component: CategoryShowComponent },
//       { path: "category/category-edit", component: CategoryEditComponent },
//       { path: "product", component: ProductComponent },
//       { path: "product/product-show", component: ProductShowComponent },
//       {
//         path: "product/product-show/product-imageupload",
//         component: ProductImageuploadComponent,
//       },
//       { path: "brand", component: BrandComponent },
//       { path: "brand/brand-show", component: BrandShowComponent },
//     ],
//     canActivate: [AuthGuardService],
//   },
//   {
//     path: "not-found",
//     component: PageNotFoundComponent,
//     canActivate: [AuthGuardService],
//   },
//   { path: "**", redirectTo: "/not-found" },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule],
//   entryComponents: [ProductImageuploadComponent],
// })
// export class AppRoutingModule {}
