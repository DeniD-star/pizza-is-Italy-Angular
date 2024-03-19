import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './main/catalog/catalog.component';
import { ClientsCatalogComponent } from '../pizza/clients-catalog/clients-catalog.component';
import { TraditionalPizzasComponent } from '../pizza/traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from '../pizza/white-pizzas/white-pizzas.component';
// import { DessertsComponent } from './main/desserts/desserts.component';
// import { DrinksComponent } from './main/drinks/drinks.component';
import { CreateComponent } from '../pizza/create/create.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { MainComponent } from './main/main.component';
import { CardPizzaComponent } from '../pizza/card-pizza/card-pizza.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { DetailsComponent } from './main/details/details.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
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
      //   component: DrinksComponent,
      // },
      // {
      //   path: 'desserts',
      //   component: DessertsComponent,
      // },
      // {
      //   path: 'create',
      //   component: CreateComponent,
      //   canActivate: [AuthActivate ]
      // },
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
    path: 'page-not-found',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
