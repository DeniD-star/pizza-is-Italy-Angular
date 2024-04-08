import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart/cart.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Drink } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  public drinks: Drink[] = [];

  constructor(private apiService: ApiService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getMenuPizza().subscribe((cDriks) => {
      this.drinks = cDriks.filter((cDriks) => cDriks.type === 'drinks') as Drink[];
      this.drinks.forEach(drink => { // setto la quantità di default a 1
        drink.singleQuantity = 1;
      });
    })
  }

  changeQuantity(isAdd: boolean, drink: Drink): void {
    if (isAdd && drink.singleQuantity < 10) {
      drink.singleQuantity++
    } else if (!isAdd && drink.singleQuantity > 0) {
      drink.singleQuantity--
    }
  }

  addToTheCart(drink: Drink): void {
    var user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.addToCart(drink._id as string, user._id as string, drink.singleQuantity, drink).subscribe({
      complete: () => drink.added = true
    })
  }
}
