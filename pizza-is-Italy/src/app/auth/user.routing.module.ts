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
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    component: ProfileComponent,
   canActivate: [AuthActivate ],
  },
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
    path: 'user-pizzas',
    component: UserPizzasComponent,
    canActivate: [AuthActivate ],
  },
  {
    path: 'user-orders',
    component: UserOrdersComponent,
    canActivate: [AuthActivate ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
