import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomeComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    PageNotFoundComponent
  ],
})
export class CoreModule {}
