import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';
import { User } from 'src/app/types/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userDetails: User | undefined;

  form = this.fb.group({
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    username: ['', [Validators.required, Validators.minLength(5)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  register(): void {
    if (this.form.invalid) { return; }

    const { passGroup: { password, rePassword } = {} } = this.form.value;
    const user: User = {
      username: this.form.get('username')?.value as string,
      email: this.form.get('email')?.value as string,
      password: password as string,
      repeatPassword: rePassword as string
    }

    this.userService.register(user).subscribe({
      complete: () => this.router.navigate(['/users/login'])
    });

  }
}
