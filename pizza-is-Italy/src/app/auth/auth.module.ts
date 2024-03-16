import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user.routing.module';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { UserPizzasComponent } from './user/user-pizzas/user-pizzas.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserOrdersComponent,
    UserPizzasComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserOrdersComponent,
    UserPizzasComponent,
  ],
})
export class AuthModule {}
