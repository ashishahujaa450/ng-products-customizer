import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "listing", component: ProductListComponent },
  { path: "", redirectTo: "/listing", pathMatch: "full" },
  { path: "add", component: AddProductComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
