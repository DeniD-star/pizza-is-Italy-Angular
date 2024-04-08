import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraditionalPizzasComponent } from './traditional-pizzas/traditional-pizzas.component';
import { WhitePizzasComponent } from './white-pizzas/white-pizzas.component';
import { PizzaRoutingModule } from './pizza.router.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ClientsCatalogComponent } from './clients-catalog/clients-catalog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DrinksComponent } from './drinks/drinks.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details-pizza/details.component';
import { CommentsComponent } from './details-pizza/comments/comments.component';
import { LikesComponent } from './details-pizza/likes/likes.component';

@NgModule({
  declarations: [
    ClientsCatalogComponent,
    TraditionalPizzasComponent,
    WhitePizzasComponent,
    CreateComponent,
    CatalogComponent,
    DessertsComponent,
    DrinksComponent,
    EditComponent,
    DetailsComponent,
    CommentsComponent,
    LikesComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FormsModule
  ],
  exports: []
})
export class PizzaModule { }
