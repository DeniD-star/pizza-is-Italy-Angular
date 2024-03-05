import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getWhitePizzas(){
   // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
   //ot tuk natatuk vij workshopcomponents minuta 00:43
  //}
  // getTraditionalPizzas()
  // getClientsPizzas()
}
