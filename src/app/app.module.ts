import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { ProductImageuploadComponent } from './product/product-show/product-imageupload/product-imageupload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { BrandModule } from './brand/brand.module';
import { CategoriesModule } from './category/categories.module';
import { CoreModule } from './core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './order.effects';

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
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrandModule,
    // CategoriesModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([OrderEffects]),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
