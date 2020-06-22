import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "brandFilter",
})
export class BrandFilterPipe implements PipeTransform {
  transform(brands: any, searchTerm: string) {
    if (!brands || !searchTerm) {
      return brands;
    }
    return brands.filter(
      (brand) =>
        brand.brandName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
