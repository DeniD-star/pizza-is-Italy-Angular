import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm, FormBuilder } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS, USER_KEY } from 'src/app/shared/constants';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  // userDetails: User | undefined;
  //[value]="userDetails?.email"---> in template

  form = this.fb.group({
    email: ['email'],
    password: ['password'],
  });
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe({
      next: (user) => { // salva la risposta del server USER nel sessionStorage
        sessionStorage.setItem(USER_KEY, JSON.stringify(user))
      },
      complete: () => this.router.navigate(['/'])
    });
  }
}
