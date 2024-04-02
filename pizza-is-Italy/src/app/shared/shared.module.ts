import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { CheckUserPipe } from './check-user.pipe';


@NgModule({
  declarations: [
    AppEmailDirective,
    CheckUserPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [AppEmailDirective, CheckUserPipe]
})
export class SharedModule { }
