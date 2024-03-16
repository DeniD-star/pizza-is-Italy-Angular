import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/auth/user.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.scss'],
})
export class CardPizzaComponent implements OnInit {
  pizza: Pizza | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged; //questo in caso mi servisse dopo per Guard *ngIf="isLogged" za comentarite, da komentira samo koito e lognat
  }

  ngOnInit(): void {
    this.fetchPizza();
  }

  fetchPizza(): void {
    const id = this.activatedRoute.snapshot.params['pizzaId'];
    this.apiService.getTraditionalPizza(id).subscribe((pizza) => {
      this.pizza = pizza;
    });
  }
}
