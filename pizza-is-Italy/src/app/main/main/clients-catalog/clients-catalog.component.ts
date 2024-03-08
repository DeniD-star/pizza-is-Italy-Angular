import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-clients-catalog',
  templateUrl: './clients-catalog.component.html',
  styleUrls: ['./clients-catalog.component.scss']
})
export class ClientsCatalogComponent implements OnInit{
clientsPizzas: Pizza[] = [];
thereAreNoPizzas: boolean = false;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.apiService.getClientPizzas().subscribe((cPizzas)=>{
      console.log(cPizzas);
      this.clientsPizzas = cPizzas;
      //this.clientsPizzas = []// ako iskame da nqma pizzi
      if(this.clientsPizzas.length === 0){
        this.thereAreNoPizzas = true;
      }

    })
  }

}
