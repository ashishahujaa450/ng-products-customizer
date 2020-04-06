import { Component, OnInit } from "@angular/core";
import { Products } from "../app.model";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  public productListing: Products[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productListing = this.productService.getProducts;
  }
}
