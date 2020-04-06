import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public totalQty: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.updateTotalQty.subscribe((data: number) => {
      this.totalQty = data;
    });
  }
}
