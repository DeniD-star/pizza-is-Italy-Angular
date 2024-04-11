import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Order } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit{
  public confirmOrders: Order[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getConfirmedOrder().subscribe(
      (orders) => {
        let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);//take the user from the session storage
        this.confirmOrders = orders.filter(order => order._ownerId === user._id)//take the orders made by the user
      }
    )
  }
}
