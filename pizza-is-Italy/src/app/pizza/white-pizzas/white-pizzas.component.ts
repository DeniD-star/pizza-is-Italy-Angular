import { Component , OnInit} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-white-pizzas',
  templateUrl: './white-pizzas.component.html',
  styleUrls: ['./white-pizzas.component.scss']
})
export class WhitePizzasComponent implements OnInit{
whitePizzas: Pizza[] = [];
  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.apiService.getMenuPizza().subscribe((wPizzas)=>{
      console.log(wPizzas);
      this.whitePizzas = wPizzas.filter((pizza) => pizza.type === 'white');

    })
  }

}
