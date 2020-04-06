import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Router } from "@angular/router";
import { Products } from "../app.model";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  productData: Products = {
    title: "",
    description: "",
    qty: 1,
    price: 1,
    imageUrl: ""
  };

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProduct(ev: Event) {
    ev.preventDefault();

    //add into service
    this.productService.addProduct(this.productData);

    //routing
    this.router.navigate(["listing"]);
  }
}
