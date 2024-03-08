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
  getTraditionalPizzas() {
    const {appUrl} = environment;
    return this.http.get<Pizza[]>(`${appUrl}/traditionalPizzas`);
  }
  getClientPizzas() {
    const {appUrl} = environment;
    return this.http.get<Pizza[]>(`${appUrl}/clientPizzas`);
  }
}
