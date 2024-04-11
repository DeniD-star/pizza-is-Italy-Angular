import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { ClientsCatalogComponent } from './clients-catalog/clients-catalog.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { EditComponent } from './edit/edit.component';
import { DrinksComponent } from './drinks/drinks.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DetailsComponent } from './details-pizza/details.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'traditional',
    component: TraditionalPizzasComponent,
  },
  {
    path: 'clientsPizzas',
    component: ClientsCatalogComponent,
    canActivate: [AuthActivate]
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
    /* canActivate: [AuthActivate] */
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
