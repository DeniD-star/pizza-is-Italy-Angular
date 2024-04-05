import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { USER_KEY } from 'src/app/shared/constants';
import { Pizza } from 'src/app/types/pizza';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-pizzas',
  templateUrl: './user-pizzas.component.html',
  styleUrls: ['./user-pizzas.component.scss']
})
export class UserPizzasComponent implements OnInit {
  public userPizzas: Pizza[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    var user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    this.apiService.getMenuPizza().subscribe((cPizzas) => {
      this.userPizzas = cPizzas.filter((pizza) => pizza._ownerId === user._id);
    })
  }
}
