import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppEmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [AppEmailDirective]
})
export class SharedModule { }
