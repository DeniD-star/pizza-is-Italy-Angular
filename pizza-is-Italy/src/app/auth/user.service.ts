import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_KEY = '[user]';
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  getAllUsers() {//questo e' quello che ho aggiunto io
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    const {appUsersUrl} = environment;
    return this.http.get<User[]>(`${appUsersUrl}`);
  }

  login(): void {
    this.user = {
      email: 'john.berry@abv.bg',
      password: '1234',
      username: 'DeniD',
      repeatPassword: ''
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

  // register(): void{
  //   this.user = {
  //     email: 'john.berry@abv.bg',
  //     username: 'DeniD',
  //     password: '1234',
  //     repeatPassword: '1234'
  //   };
  //   localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  // }
}
