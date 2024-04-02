import { Component, OnInit, inject } from '@angular/core';
// import {  NgForm } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
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


  //   editPizzaSubmitHandler(pizza: NgForm): void{
  //     if(pizza.invalid){
  //       return;
  //     }
  //     console.log(pizza.value);

  // }

  constructor(private apiService: ApiService) {
    // const pizzaId = this.route.snapshot.params['pizzaId'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const pizzaId = params['pizzaId'];
      this.apiService.getClientPizza(pizzaId).subscribe(
        (pizza: Pizza) => this.pizza = pizza
      );
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    this.isOwner = !this.isOwner;
  }

  addToTheCartHandler(): void {

  }

  deletePizza(): void {

  }
}
