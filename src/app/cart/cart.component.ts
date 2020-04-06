import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Products } from "../app.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  public cartListing: Products[];

  constructor(private cartSerivce: CartService) {}

  ngOnInit(): void {
    this.cartListing = this.cartSerivce.getList;
  }

  calcTotal() {
    return this.cartSerivce.calcTotalAmount();
  }

  removeItem(item: Products) {
    this.cartSerivce.removeItemFromCart(item.id);
  }
}
