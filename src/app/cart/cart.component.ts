import { Component, OnInit } from '@angular/core';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: IDishes[] = [];
  items: number = 0;
  products: number = 0;
  service: number = 0;
  discount: number = 0;
  total: number = 0;

  constructor(private CS: CartService) { }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.products = this.CS.calcTotal();
    this.items = this.cart.length;

    this.service = this.products * 0.1;

    if (this.products > 40) {
      this.discount = this.products * 0.15;
      this.discount.toFixed(2);
    }
    this.total = this.products + this.service - this.discount;
  }
}
