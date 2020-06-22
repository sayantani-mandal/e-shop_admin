import { NgModule } from "@angular/core";
import { CategoryService } from "./category/category.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./shared/token-interceptor.service";

@NgModule({
  providers: [
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
