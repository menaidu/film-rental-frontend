import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseUrl="http://localhost:8088/api/v1/language/getAll";

  constructor(private httpClient:HttpClient){}

    getLanguages() : Observable<Language[]>{
      return this.httpClient.get<Language[]>(`${this.baseUrl}`);
    }
}
