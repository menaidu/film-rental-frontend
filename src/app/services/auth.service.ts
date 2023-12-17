import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn: boolean = false;

  storeUser(user: User) {
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

  retrieveUser() {
    let userString: any = sessionStorage.getItem('userInfo');
    let user = JSON.parse(userString);
    return user;
  }

  removeUser() {
    sessionStorage.removeItem('userInfo');
  }
}
