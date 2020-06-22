import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";
import { CategoryComponent } from "./category.component";
import { CategoryShowComponent } from "./category-show/category-show.component";
import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoryEditComponent } from "./category-edit/category-edit.component";

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryShowComponent,
    CategoryEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    CategoriesRoutingModule,
    FormsModule,
  ],
  exports: [CategoryComponent, CategoryShowComponent, CategoryEditComponent],
})
export class CategoriesModule {}
