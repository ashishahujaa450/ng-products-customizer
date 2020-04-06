import { Injectable, EventEmitter } from "@angular/core";
import { Products } from "../app.model";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private cartList: Products[] = [];

  public updateTotalQty = new EventEmitter<number>();

  constructor() {}

  get getList() {
    return this.cartList;
  }

  public addItemToCart(payload: any) {
    if (payload.isAdded) {
      this.cartList.push(payload.product);
    } else {
      this.removeItemFromCart(payload.product.id);
    }

    this.setTotalQty();
  }

  public calcTotalAmount(): number {
    let amount = 0;
    this.cartList.forEach(elm => {
      amount = amount + elm.price * elm.qty;
    });

    return amount;
  }

  public removeItemFromCart(id: number) {
    const index = this.cartList.findIndex(elm => elm.id === id);
    this.cartList.splice(index, 1);

    this.setTotalQty();
  }

  private setTotalQty(): void {
    let total = 0;
    this.cartList.forEach(elm => {
      total = total + elm.qty;
    });
    this.updateTotalQty.emit(total);
  }
}
