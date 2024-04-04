import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit{
  public drinks: Pizza[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getMenuPizza().subscribe((cDriks) => {
      this.drinks = cDriks.filter((cDriks) => cDriks.type === 'drinks');
    })
  }
}
