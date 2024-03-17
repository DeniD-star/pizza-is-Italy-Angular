import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user.routing.module';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { UserPizzasComponent } from './user/user-pizzas/user-pizzas.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserOrdersComponent,
    UserPizzasComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, SharedModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserOrdersComponent,
    UserPizzasComponent,
  ],
})
export class AuthModule {}
