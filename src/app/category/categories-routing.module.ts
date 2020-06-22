import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CategoryShowComponent } from "./category-show/category-show.component";
import { MainNavComponent } from "../main-nav/main-nav.component";
import { CategoryEditComponent } from "./category-edit/category-edit.component";

const routes: Routes = [
  {
    path: "",
    component: CategoryComponent,
  },
  { path: "category", component: CategoryComponent },
  { path: "category/category-show", component: CategoryShowComponent },
  { path: "category/category-edit", component: CategoryEditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
