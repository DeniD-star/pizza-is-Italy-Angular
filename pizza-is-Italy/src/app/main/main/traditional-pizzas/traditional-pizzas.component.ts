import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-traditional-pizzas',
  templateUrl: './traditional-pizzas.component.html',
  styleUrls: ['./traditional-pizzas.component.scss'],
})
export class TraditionalPizzasComponent implements OnInit {
 traditionalPizzas: Pizza[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTraditionalPizzas().subscribe((tPizzas) => {
      console.log(tPizzas[0]);
      this.traditionalPizzas = tPizzas;
    });
  }
}
