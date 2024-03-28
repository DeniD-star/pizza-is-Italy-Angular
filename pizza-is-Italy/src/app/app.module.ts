import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
 import { SharedModule } from './shared/shared.module';
import { UserRoutingModule } from './auth/user.routing.module';
import { PizzaRoutingModule } from './pizza/pizza.router.module';
import { FormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';



@NgModule({
  declarations: [AppComponent,  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, AuthModule, MainModule, SharedModule, UserRoutingModule, PizzaRoutingModule],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
