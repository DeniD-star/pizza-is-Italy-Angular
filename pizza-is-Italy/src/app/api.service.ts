import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Comments, Likes, Pizza } from './types/pizza';
import { USER_KEY } from './shared/constants';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',//
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private appUrl = environment.appUrl;

  getWhitePizzas() {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    return this.http.get<Pizza[]>(`${this.appUrl}/whitePizzas`);
  }
  getWhitePizza(id: string) {
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    return this.http.get<Pizza>(`${this.appUrl}/whitePizzas/${id}`);
  }
  getTraditionalPizzas() {
    return this.http.get<Pizza[]>(`${this.appUrl}/traditionalPizzas`);
  }
  getTraditionalPizza(id: string) {
    return this.http.get<Pizza>(`${this.appUrl}/traditionalPizzas/${id}`);
  }
  getClientPizzas() {
    return this.http.get<Pizza[]>(`${this.appUrl}/clientPizzas`);
  }
  getClientPizza(id: string) {
    return this.http.get<Pizza>(`${this.appUrl}/clientPizzas/${id}`);
  }
  getMenuPizza() {
    return this.http.get<Pizza[]>(`${this.appUrl}/menu`);
  }
  getOnePizza(id: string) {
    return this.http.get<Pizza>(`${this.appUrl}/menu/${id}`);
  }
  getPizzaComments(pizzaId: string) {
    const relations = encodeURIComponent(`user=_ownerId:users`)
    const search = encodeURIComponent(`pizzaId="${pizzaId}"`)
    return this.http.get<Comments[]>(`${this.appUrl}/comments?where=${search}&load=${relations}`)
  }
  getPizzaLikes(pizzaId: string) {
    const search = encodeURIComponent(`pizzaId="${pizzaId}"`);
    return this.http.get<Likes[]>(`${this.appUrl}/likes?where=${search}`);
  }
  addLike(pizzaId: string, author: string) {
    return this.http.post(`${this.appUrl}/likes`, { pizzaId, author }, this.getToken());
  }
  removeLike(likeId: string) {
    return this.http.delete(`${this.appUrl}/likes/${likeId}`, this.getToken());
  }
  createComment(pizzaId: string, text: string, author: string) {
    return this.http.post(`${this.appUrl}/comments`, { pizzaId, text, author }, this.getToken())
  }
  createPizza(pizza: Pizza) {
    return this.http.post(`${this.appUrl}/menu`, pizza, this.getToken());
  }
  editPizza(pizza: Pizza) {
    return this.http.put(`${this.appUrl}/menu/${pizza._id}`, pizza, this.getToken());
  }
  deletePizza(pizzaId: string) {
    return this.http.delete<Pizza>(`${this.appUrl}/menu/${pizzaId}`, this.getToken());
  }

  private getToken(): { headers: HttpHeaders; } {
    let user: User = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    return { headers: new HttpHeaders().set('X-Authorization', user?.accessToken!) };
  }
}
