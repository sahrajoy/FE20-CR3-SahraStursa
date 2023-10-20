import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : IDishes[] = [];

  constructor() { }

  addToCart(obj : IDishes){
    this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  calcTotal(){
    let total : number = 0;

    this.cart.forEach((val) => {
      total += val.price;
    })
    return total;
  }
}
