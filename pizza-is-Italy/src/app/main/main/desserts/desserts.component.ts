import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {
  public desserts: Pizza[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getMenuPizza().subscribe((cDesserts) => {
      this.desserts = cDesserts.filter((cDesserts) => cDesserts.type === 'dessert');
    })
  }
}
