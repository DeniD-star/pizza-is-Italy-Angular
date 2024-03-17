import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { CreateComponent } from '../main/main/create/create.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { ClientsCatalogComponent } from '../main/main/clients-catalog/clients-catalog.component';
import { MainComponent } from '../main/main/main.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';
import { DetailsComponent } from '../main/main/details/details.component';

const routes: Routes = [
  {
    path: 'traditional',
    component: TraditionalPizzasComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },

      {
        path: 'traditional',
        component: TraditionalPizzasComponent,

      },
      {
        path: 'white',
        component: WhitePizzasComponent,
      },
      {
        path: 'drinks',
        // component: DrinksComponent,
      },
      {
        path: 'desserts',
        // component: DessertsComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthActivate ]
      },
      {
        path: ':pizzaId',
        component: CardPizzaComponent
      }
    ],
  },
  {
    path: 'clientsPizzas',
   component: ClientsCatalogComponent,
  },
  {
    path: '/details/:pizzaId',
   component: DetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
