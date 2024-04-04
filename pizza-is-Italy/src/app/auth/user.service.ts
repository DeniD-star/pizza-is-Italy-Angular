import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { USER_KEY } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  usersUrl: string = environment.appUsersUrl;

  get isLogged(): boolean {
    this.user = JSON.parse(sessionStorage.getItem(USER_KEY)!);
    if (this.user) { return true } else { return false };
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = sessionStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser);
      console.log(this.user);
    } catch (error) {
      this.user = undefined;
    }
  }

  getAllUsers() {
    //questo e' quello che ho aggiunto io
    // return this.http.get(environment.appUrl)//po tozi na4in si fetchvam dannite
    //ot tuk natatuk vij workshopcomponents minuta 00:43
    
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  login(email: string, password: string) {
    return this.http.post<User>(this.usersUrl + '/login', { email, password });
  }
  register(user: User) {
    return this.http.post<User>(this.usersUrl + '/register', {
      email: user.email,
      username: user.username,
      password: user.password,
      rePassword: user.repPass
    });
  }

  logout(): void {
    this.user = undefined;
    sessionStorage.removeItem(USER_KEY);
  }

}
