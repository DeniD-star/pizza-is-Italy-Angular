import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { ClientsCatalogComponent } from './main/clients-catalog/clients-catalog.component';
import { TraditionalPizzasComponent } from '../pizza/traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from '../pizza/white-pizzas/white-pizzas.component';
import { DessertsComponent } from './main/desserts/desserts.component';
import { DrinksComponent } from './main/drinks/drinks.component';
import { CreateComponent } from './main/create/create.component';
import { EditComponent } from './main/edit/edit.component';
import { ProfileComponent } from '../auth/profile/profile.component';
import { DetailsComponent } from './main/details/details.component';
import { MainRoutingModule } from './main.routing.module';
import { UserPizzasComponent } from '../auth/user/user-pizzas/user-pizzas.component';
import { UserOrdersComponent } from '../auth/user/user-orders/user-orders.component';
import { PizzaModule } from '../pizza/pizza.module';
import { PizzaRoutingModule } from '../pizza/pizza.router.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    ClientsCatalogComponent,
CreateComponent,
    DessertsComponent,
    DrinksComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent,
    DetailsComponent,
    // UserOrdersComponent,
    // UserPizzasComponent

  ],
  imports: [CommonModule, MainRoutingModule, PizzaModule, CoreModule],
  exports: [
    MainComponent,
    CatalogComponent,
    ClientsCatalogComponent,
    DessertsComponent,
    DrinksComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent,
    CreateComponent
    // UserOrdersComponent,
    // UserPizzasComponent
  ],
})
export class MainModule {}
