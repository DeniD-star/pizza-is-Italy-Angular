import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { AboutUsComponent } from './core/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, FooterComponent, ContactsComponent, AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
