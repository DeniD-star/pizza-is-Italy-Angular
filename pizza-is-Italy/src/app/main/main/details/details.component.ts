import { Component, inject } from '@angular/core';
// import {  NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],

})
export class DetailsComponent {
  isEditMode: boolean = false;
  isOwner: boolean = false;

  route: ActivatedRoute = inject(ActivatedRoute);
  apiService = inject(ApiService);
  pizza: Pizza | undefined;


//   editPizzaSubmitHandler(pizza: NgForm): void{
//     if(pizza.invalid){
//       return;
//     }
//     console.log(pizza.value);

// }

constructor() {
  const pizzaId = this.route.snapshot.params['id'];
 this.pizza = Object(this.apiService.getClientPizza(pizzaId)) ;
}

  toggleEditMode():void{
    this.isEditMode = !this.isEditMode;
    this.isOwner = !this.isOwner;
  }
  addToTheCartHandler():void{

  }

  deletePizza():void{

  }
}
