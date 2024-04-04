import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../types/user';

@Pipe({
  name: 'checkUser'
})
export class CheckUserPipe implements PipeTransform {

  constructor() { }

  transform(userKey: string): boolean {
    const user: User = JSON.parse(sessionStorage.getItem(userKey)!);
    if (user) { return true } else { return false };
  }

}
