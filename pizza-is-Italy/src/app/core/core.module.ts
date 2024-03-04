import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    HomeComponent,

    HeaderComponent,
    AboutUsComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
