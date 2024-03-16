import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Pizza } from './types/pizza';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWhitePizzas() {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    const {appUrl} = environment;
    return this.http.get<Pizza[]>(`${appUrl}/whitePizzas`);
  }
  getWhitePizza(id:string) {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    const {appUrl} = environment;
    return this.http.get<Pizza>(`${appUrl}/whitePizzas/${id}`);
  }
  getTraditionalPizzas() {
    const {appUrl} = environment;
    return this.http.get<Pizza[]>(`${appUrl}/traditionalPizzas`);
  }
  getTraditionalPizza(id:string) {
    const {appUrl} = environment;
    return this.http.get<Pizza>(`${appUrl}/traditionalPizzas/${id}`);
  }
  getClientPizzas() {
    const {appUrl} = environment;
    return this.http.get<Pizza[]>(`${appUrl}/clientPizzas`);
  }
  getClientPizza(id: string) {
    const {appUrl} = environment;
    return this.http.get<Pizza>(`${appUrl}/clientPizzas/${id}`);
  }
}
