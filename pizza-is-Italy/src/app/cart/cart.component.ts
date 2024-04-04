import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Cart } from '../types/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService){
  }

  ngOnInit(): void {
    this.cartService.getAllOrders().subscribe(
      (cart: Cart[]) => console.log(cart)
    )
  }
}
