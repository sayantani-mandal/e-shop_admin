import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandComponent } from "./brand.component";
import { BrandShowComponent } from "./brand-show/brand-show.component";
import { MainNavComponent } from "../main-nav/main-nav.component";
import { AuthGuardService } from "../auth-guard.service";

// const routes: Routes = [
//   {
//     path: "",
//     component: MainNavComponent,
//     children: [
//       { path: "brand", component: BrandComponent },
//       { path: "brand/brand-show", component: BrandShowComponent },
//     ],
//     canActivate: [AuthGuardService],
//   },
// ];
const routes: Routes = [
  {
    path: "",
    component: BrandComponent,
  },
  { path: "brand/brand-show", component: BrandShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
