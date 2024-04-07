import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/auth/user.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-clients-catalog',
  templateUrl: './clients-catalog.component.html',
  styleUrls: ['./clients-catalog.component.scss']
})
export class ClientsCatalogComponent implements OnInit {
  clientsPizzas: Pizza[] = [];
  thereAreNoPizzas: boolean = false;

  constructor(private apiService: ApiService, private userService: UserService) {  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    // chiama il servizio getMenuPizza e filtra solo per le pizze di tipo client
    this.apiService.getMenuPizza().subscribe((cPizzas) => {
      this.clientsPizzas = cPizzas.filter((pizza) => pizza.type === 'client');
      if (this.clientsPizzas.length === 0) {
        this.thereAreNoPizzas = true;
      }
    })
  }

}
