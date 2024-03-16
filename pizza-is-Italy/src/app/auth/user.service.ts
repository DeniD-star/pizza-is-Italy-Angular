import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_KEY = '[user]';
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
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

  register(): void{
    this.user = {
      email: 'john.berry@abv.bg',
      username: 'DeniD',
      password: '1234',
      repeatPassword: '1234'
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
}
