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
  public successOrder = false;

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
    // scorre tutta la cartList e cancella gli item
    this.cartList.forEach(
      (item) => this.cartService.deleteToCart(item._id).subscribe(() => this.getOrders())
    )
  }

  public confirmOrder(): void {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    let currentOrder = this.cartList;
    // assegna cartList alla variabile currentOrder e imposta in ogni ordine l'id dell'user loggato e la data dell'ordine
    currentOrder.forEach(order => {
      order._ownerId = user._id
      order.dateOrder = new Date().getTime()
    });
    // invia l'oggetto currentOrder al servizio confirmOrder
    this.cartService.confirmOrder(currentOrder).subscribe({
      next: (result) => {
        // quando il servizio risponde un risultato con un id vuol dire che è andato a buon fine e svuota il carrello
        if (result._id) {
          console.log(result._id);
          this.cartList.forEach(
            (item) => this.cartService.deleteToCart(item._id).subscribe(() => this.getOrders())
          )
        }
      },
      // quando il servizio è completato setta la variabile successOrder a true per mostrare nell'html il successo dell'ordine
      complete: () => this.successOrder = true
    })
  }

  private getOrders(): void {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    // chiama il servizio getCart e filtra per gli ordini che sono stati inseriti dall'utente loggato
    this.cartService.getCart().subscribe(
      (cart: Cart[]) => (this.cartList = cart.filter((order) => order._ownerId === user._id), this.calculateTotalPrice())
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
