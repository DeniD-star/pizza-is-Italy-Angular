import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart/cart.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Dessert, Pizza } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {
  public desserts: Dessert[] = [];

  constructor(private apiService: ApiService, private cartService: CartService){}

  ngOnInit(): void {
    this.apiService.getMenuPizza().subscribe((cDesserts) => {
      this.desserts = cDesserts.filter((cDesserts) => cDesserts.type === 'dessert') as Dessert[];
      this.desserts.forEach(dessert => { // setto la quantità di default a 1
        dessert.singleQuantity = 1;
      });
    })
  }

  changeQuantity(isAdd: boolean, dessert: Dessert): void {
    if (isAdd && dessert.singleQuantity < 10) {
      dessert.singleQuantity++
    } else if (!isAdd && dessert.singleQuantity > 0) {
      dessert.singleQuantity--
    }
  }

  addToTheCart(dessert: Dessert): void {
    var user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    this.cartService.addToCart(dessert._id as string, user._id as string, dessert.singleQuantity, dessert).subscribe({
      complete: () => dessert.added = true
    })
  }
}
