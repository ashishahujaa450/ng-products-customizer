import { Component, OnInit, Input } from "@angular/core";
import { Products } from "src/app/app.model";
import { ProductsService } from "src/app/services/products.service";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  @Input("product") currentItem: Products;
  public isAddedToCart: boolean;
  public cartList: Products[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getList;
    this.isAddedCheck();
  }

  private isAddedCheck() {
    if (this.cartList.length > 0) {
      const prdt = this.cartList.find(elm => elm.id === this.currentItem.id);
      if (prdt) {
        this.isAddedToCart = true;
      }
    } else {
      this.isAddedToCart = false;
    }
  }

  qtyUpdate(operation: string) {
    if (operation === "inc") {
      this.currentItem.qty++;
    } else if (operation === "dec") {
      if (this.currentItem.qty > 1) {
        this.currentItem.qty--;
      } else {
        return;
      }
    }
  }

  addToCart(data: Products) {
    this.isAddedToCart = !this.isAddedToCart;

    let payload = {
      isAdded: this.isAddedToCart,
      product: data
    };

    this.cartService.addItemToCart(payload);
  }
}
