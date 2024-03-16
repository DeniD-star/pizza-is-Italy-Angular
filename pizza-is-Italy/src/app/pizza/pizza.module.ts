import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';
import { PizzaRoutingModule } from './pizza.router.module';



@NgModule({
  declarations: [TraditionalPizzasComponent,
    WhitePizzasComponent,
    CardPizzaComponent,],
  imports: [
    CommonModule
  ],
  exports: [TraditionalPizzasComponent, WhitePizzasComponent]
})
export class PizzaModule { }
