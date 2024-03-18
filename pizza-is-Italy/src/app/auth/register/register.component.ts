import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['',[Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    username: ['',[Validators.required, Validators.minLength(5)]],
    passGroup: this.fb.group({
      password: ['',[Validators.required, Validators.minLength(5)]],
      rePassword: ['',[Validators.required]],
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }),
  });

  constructor(private fb: FormBuilder) {}
  register(): void {
    //ToDo For now we are not handling the data
    console.log(this.form.value);
    if(this.form.invalid){
      return;
    }

  }
}
