import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const productIdFromRoute = Number(routeParams.get("productId"));
    console.log(productIdFromRoute);
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
