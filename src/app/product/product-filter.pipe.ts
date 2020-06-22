import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "productFilter",
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any, searchTerm: string) {
    if (!products || !searchTerm) {
      return products;
    }
    return products.filter(
      (product) =>
        product.proName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
