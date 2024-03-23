import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm, FormBuilder } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  userDetails: User | undefined;

  form = this.fb.group({

    username: ['username'],
    password: ['password'],


  });
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder){

  }
  login(form: NgForm):void{
    //ToDo For now we are not handling the data
    console.log(form.value);
    if(form.invalid){
      return;
    }

      this.userService.login();
      this.router.navigate(['/']);
      this.userDetails = {...this.form.value} as User;
  }
}
