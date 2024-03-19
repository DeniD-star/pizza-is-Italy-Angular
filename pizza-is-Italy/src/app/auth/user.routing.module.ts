import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { UserPizzasComponent } from './user/user-pizzas/user-pizzas.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';


const routes: Routes = [
{
  path: 'login',
 component: LoginComponent,
//  canActivate: [AuthActivate ]
},
{
  path: 'register',
  component: RegisterComponent,
  // canActivate: [AuthActivate ]
},
{
  path: 'profile',
  component: ProfileComponent,
  //  canActivate: [AuthActivate ],
  children: [
    {
      path: 'user-pizzas',
      component: UserPizzasComponent
    },

    {
      path: 'user-orders',
      component: UserOrdersComponent,

    },
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
