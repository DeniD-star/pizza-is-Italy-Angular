import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile', // lazy loading, carica il modulo Auth quando entra in una rotta dell'user
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cart', // lazy loading, carica il modulo Cart quando entra in una rotta del cart
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'catalog', // lazy loading, carica il modulo Pizza quando entra in una rotta del catalogo
    loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule)
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
