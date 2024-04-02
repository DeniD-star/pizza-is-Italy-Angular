import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

}
