import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {  

  cartItem=[];
  constructor() { }

  addCartItem(item) {
    this.cartItem.push(item)
  }
}
