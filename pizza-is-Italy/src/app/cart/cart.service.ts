import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cart, Order, Pizza } from '../types/pizza';
import { User } from '../types/user';
import { USER_KEY } from '../shared/constants';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private appUrl = environment.appUrl;
  constructor(private http: HttpClient) { }

  getCart() {
    return this.http.get<Cart[]>(`${this.appUrl}/cart`);
  }

  addToCart(itemId: string, userId: string, quantity: number, item: Pizza) {
    return this.http.post<Cart[]>(`${this.appUrl}/cart`, {itemId, userId, quantity, item}, this.getToken());
  }

  deleteToCart(pizzaId: string) {
    return this.http.delete<void>(`${this.appUrl}/cart/${pizzaId}`, this.getToken());
  }

  confirmOrder(currentOrder: Cart[]) {
    return this.http.post<Order>(`${this.appUrl}/orders`, {currentOrder}, this.getToken());
  }

  getConfirmedOrder() {
    return this.http.get<Order[]>(`${this.appUrl}/orders`,);
  }

  private getToken(): { headers: HttpHeaders; } {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    return { headers: new HttpHeaders().set('X-Authorization', user?.accessToken!) };
  }
}
