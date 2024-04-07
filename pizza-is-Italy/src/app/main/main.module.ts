import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { DessertsComponent } from './main/desserts/desserts.component';
import { DrinksComponent } from './main/drinks/drinks.component';
import { CreateComponent } from '../pizza/create/create.component';
import { EditComponent } from './main/edit/edit.component';
import { DetailsComponent } from './main/details/details.component';
import { PizzaModule } from '../pizza/pizza.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './main/details/comments/comments.component';

@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    DessertsComponent,
    DrinksComponent,
    EditComponent,
    DetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PizzaModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    MainComponent,
    CatalogComponent,
    DessertsComponent,
    DrinksComponent,
    EditComponent,
    CreateComponent,
    DetailsComponent
  ],
})
export class MainModule { }
