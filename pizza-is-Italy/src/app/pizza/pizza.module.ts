import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';
import { PizzaRoutingModule } from './pizza.router.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { AuthModule } from '../auth/auth.module';
import { ClientsCatalogComponent } from './clients-catalog/clients-catalog.component';

@NgModule({
  declarations: [
    ClientsCatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    CardPizzaComponent, 
    CreateComponent
  ],
  imports: [
    CommonModule, PizzaRoutingModule, FormsModule, AuthModule
  ],
  exports: [TraditionalPizzasComponent, WhitePizzasComponent, CreateComponent]
})
export class PizzaModule { }
