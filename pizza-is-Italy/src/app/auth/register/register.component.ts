import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router){

  }
  register(email: string, username: string, password: string, repeatPassword: string):void{
    //ToDo For now we are not handling the data

      this.userService.register();
      this.router.navigate(['/clientPizzas']);

  }
}
