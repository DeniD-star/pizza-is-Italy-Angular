import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Comments, Pizza } from './types/pizza';
import { USER_KEY } from './shared/constants';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',//
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getWhitePizzas() {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    const { appUrl } = environment;
    return this.http.get<Pizza[]>(`${appUrl}/whitePizzas`);
  }
  getWhitePizza(id: string) {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    const { appUrl } = environment;
    return this.http.get<Pizza>(`${appUrl}/whitePizzas/${id}`);
  }
  getTraditionalPizzas() {
    const { appUrl } = environment;
    return this.http.get<Pizza[]>(`${appUrl}/traditionalPizzas`);
  }
  getTraditionalPizza(id: string) {
    const { appUrl } = environment;
    return this.http.get<Pizza>(`${appUrl}/traditionalPizzas/${id}`);
  }
  getClientPizzas() {
    const { appUrl } = environment;
    return this.http.get<Pizza[]>(`${appUrl}/clientPizzas`);
  }
  getClientPizza(id: string) {
    const { appUrl } = environment;
    return this.http.get<Pizza>(`${appUrl}/clientPizzas/${id}`);
  }
  getMenuPizza() {
    const { appUrl } = environment;
    return this.http.get<Pizza[]>(`${appUrl}/menu`);
  }
  getOnePizza(id: string) {
    const { appUrl } = environment;
    return this.http.get<Pizza>(`${appUrl}/menu/${id}`);
  }
  getPizzaComments(pizzaId: string) {
    const relations = encodeURIComponent(`user=_ownerId:users`)
    const search = encodeURIComponent(`pizzaId="${pizzaId}"`)
    const { appUrl } = environment;
    return this.http.get<Comments[]>(`${appUrl}/comments?where=${search}&load=${relations}`)
  }
  createComment(pizzaId: string, text: string, author: string) {
    const { appUrl } = environment;
    return this.http.post(`${appUrl}/comments`, { pizzaId, text, author}, this.getToken())
  }
  createPizza(pizza: Pizza) {
    const { appUrl } = environment;
    return this.http.post(`${appUrl}/menu`, pizza, this.getToken());
  }
  editPizza(pizza: Pizza) {
    const { appUrl } = environment;
    return this.http.put(`${appUrl}/menu/${pizza._id}`, pizza, this.getToken());
  }
  deletePizza(pizzaId: string) {
    const { appUrl } = environment;
    return this.http.delete<Pizza>(`${appUrl}/menu/${pizzaId}`, this.getToken());
  }

  private getToken(): { headers: HttpHeaders; } {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    return { headers: new HttpHeaders().set('X-Authorization', user?.accessToken!) };
  }
}
