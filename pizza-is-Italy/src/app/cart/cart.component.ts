import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Cart } from '../types/pizza';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { User } from '../types/user';
import { USER_KEY } from '../shared/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartList: Cart[] = [];
  public totalPrice: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.userService.isLogged) {
      this.router.navigate(['login']);
      return;
    }
    this.getOrders();
  }

  public deleteOrder(): void {
    this.cartList.forEach(
      (item) => this.cartService.deleteToCart(item._id).subscribe(() => this.getOrders())
    )
  }

  public confirmOrder(): void {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    let currentOrder = this.cartList;
    currentOrder.forEach(order => {
      order._ownerId = user._id
      order.dateOrder = new Date().getTime()
    });
    this.cartService.confirmOrder(currentOrder).subscribe(
      (result) => {
        if (result._id) {
          console.log(result._id);
          this.cartList.forEach(
            (item) => this.cartService.deleteToCart(item._id).subscribe(() => this.getOrders())
          )
        }
      }
    )
  }

  private getOrders(): void {
    this.cartService.getCart().subscribe(
      (cart: Cart[]) => (this.cartList = cart, this.calculateTotalPrice())
    )
  }

  private calculateTotalPrice(): void {
    var price = 0;
    this.cartList.forEach(
      (order) => price += (order.item.price * order.quantity)
    )
    this.totalPrice = price;
  }
}
