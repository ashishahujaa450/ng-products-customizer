import { Injectable } from "@angular/core";
import { Products } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private productListing: Products[] = [];

  constructor() {}

  get getProducts() {
    return this.productListing;
  }

  addProduct(item: Products) {
    //generate id
    item.id =
      this.productListing.length > 0
        ? this.productListing[this.productListing.length - 1].id + 1
        : 1;

    this.productListing.push(item);
  }
}
