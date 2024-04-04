import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cart } from '../types/pizza';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllOrders() {
    const { appUrl } = environment;
    return this.http.get<Cart[]>(`${appUrl}/cart`);
  }
}
