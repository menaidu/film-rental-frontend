import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8088/api/login";
  constructor(private httpClient: HttpClient) { }

  validate(newUser: User): Observable<User>{
    return this.httpClient.post<User>(this.baseUrl, newUser);
  }
}
