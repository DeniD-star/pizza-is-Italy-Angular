import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,

    HeaderComponent,

    FooterComponent,
    PageNotFoundComponent,
    ContactsComponent,
    AboutUsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomeComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    PageNotFoundComponent,
  ],
})
export class CoreModule {}
