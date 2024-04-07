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
import { DrinksComponent } from '../main/main/drinks/drinks.component';
import { DessertsComponent } from '../main/main/desserts/desserts.component';
import { CatalogComponent } from '../main/main/catalog/catalog.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
  },
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
    canActivate: [AuthActivate]
  },
  {
    path: 'drinks',
    component: DrinksComponent,
  },
  {
    path: 'desserts',
    component: DessertsComponent,
  },
  {
    path: 'white',
    component: WhitePizzasComponent
  },
  {
    path: 'details/:pizzaId',
    component: DetailsComponent,
  },
  {
    path: 'edit/:pizzaId',
    component: EditComponent,
    canActivate: [AuthActivate]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaRoutingModule { }
