import { Component, OnInit, inject } from '@angular/core';
// import {  NgForm } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

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


  //   editPizzaSubmitHandler(pizza: NgForm): void{
  //     if(pizza.invalid){
  //       return;
  //     }
  //     console.log(pizza.value);

  // }

  constructor(private apiService: ApiService, private router: Router) {
    // const pizzaId = this.route.snapshot.params['pizzaId'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const pizzaId = params['pizzaId'];
      this.apiService.getOnePizza(pizzaId).subscribe(
        (pizza: Pizza) => this.pizza = pizza
      );
    });
  }

  addToTheCartHandler(): void {

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
          complete: () => this.router.navigate(['/clientsPizzas'])
        })
      }
    }
  }
}
