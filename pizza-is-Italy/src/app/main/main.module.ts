import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { ClientsCatalogComponent } from './main/clients-catalog/clients-catalog.component';
import { TraditionalPizzasComponent } from './main/traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './main/white-pizzas/white-pizzas.component';
import { DessertsComponent } from './main/desserts/desserts.component';
import { DrinksComponent } from './main/drinks/drinks.component';
import { CreateComponent } from './main/create/create.component';
import { EditComponent } from './main/edit/edit.component';
import { ProfileComponent } from './main/profile/profile.component';
import { DetailsComponent } from './main/details/details.component';



@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    ClientsCatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    DessertsComponent,
    DrinksComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ MainComponent,
    CatalogComponent,
    ClientsCatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    DessertsComponent,
    DrinksComponent,
    CreateComponent,
    EditComponent,
    ProfileComponent]
})
export class MainModule { }
