import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { ClientsCatalogComponent } from './clients-catalog/clients-catalog.component';
import { MainComponent } from '../main/main/main.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { CardPizzaComponent } from './card-pizza/card-pizza.component';
import { DetailsComponent } from '../main/main/details/details.component';
import { EditComponent } from '../main/main/edit/edit.component';

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
      // {
      //   path: 'drinks',
      //   // component: DrinksComponent,
      // },
      // {
      //   path: 'desserts',
      //   // component: DessertsComponent,
      // },
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
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate ]
  },
  {
    path: 'white',
    component: WhitePizzasComponent,

  },

   {
  path: 'details/:pizzaId',
   component: DetailsComponent,
   },
   {
  path: 'edit/:pizzaId',
   component: EditComponent,
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaRoutingModule {}
