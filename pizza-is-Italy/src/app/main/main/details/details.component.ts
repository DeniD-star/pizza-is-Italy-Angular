import { Component, OnInit, inject } from '@angular/core';
// import {  NgForm } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart/cart.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Pizza } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],

})
export class DetailsComponent implements OnInit {
  isEditMode: boolean = false;
  isOwner: boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  pizza: Pizza | undefined;
  quantity = 1;
  added: boolean = false;
  user!: User;

  constructor(private apiService: ApiService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    this.route.params.subscribe((params: Params) => {
      const pizzaId = params['pizzaId'];
      this.apiService.getOnePizza(pizzaId).subscribe(
        (pizza: Pizza) => this.pizza = pizza
      );
    });
  }

  addToTheCart(): void {
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }
    if (this.pizza) {
      this.cartService.addToCart(this.pizza._id as string, this.user._id as string, this.quantity, this.pizza).subscribe({
        complete: () => this.added = true
      })
    }
  }

  changeQuantity(isAdd: boolean): void {
    if (isAdd && this.quantity < 10) {
      this.quantity++
    } else if (!isAdd && this.quantity > 1) {
      this.quantity--
    }
  }

  deletePizza(pizza: Pizza | undefined): void {
    const confirmation = window.confirm(
      "Are you sure you want to delete this pizza?"
    );

    if (confirmation) {
      if (pizza?._id) {
        this.apiService.deletePizza(pizza._id).subscribe({
          complete: () => this.router.navigate(['clientsPizzas'])
        })
      }
    }
  }
}
