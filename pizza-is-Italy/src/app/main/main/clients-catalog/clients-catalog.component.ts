import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-clients-catalog',
  templateUrl: './clients-catalog.component.html',
  styleUrls: ['./clients-catalog.component.scss']
})
export class ClientsCatalogComponent implements OnInit{

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.apiService.getClientPizzas().subscribe((cPizzas)=>{
      console.log(cPizzas);

    })
  }

}
