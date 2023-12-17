import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerFilmsService {
  getFilms() {
    throw new Error('Method not implemented.');
  }
  private baseUrlid="http://localhost:8088/api/films/Id/";

  private baseUrl="http://localhost:8088/api/films/getAll";
  private baseUrltitle="http://localhost:8088/api/films/title";

  constructor(private httpClient:HttpClient) {}

  getFilmBytitle(title:string) : Observable<Film>{
    return this.httpClient.get<Film>(`${this.baseUrltitle}${title}`);
  }


  getFilm() : Observable<Film[]>{

    return this.httpClient.get<Film[]>(`${this.baseUrl}`);

  }

  filmById(id:number): Observable<Film>{

    return this.httpClient.get<Film>(`${this.baseUrlid}${id}`);

  }

  getFilmByStatus(status:string) : Observable<Film[]>{

    return this.httpClient.get<Film[]>(`${this.baseUrl}status/${status}`);

  }

  addFilm(film: Film): Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`,film);

  }

  deleteFilm(id: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseUrl}${id}`);

  }

  updateFilm(film:Film) : Observable<Object>{

    return this.httpClient.put(`${this.baseUrl}`,film);

  }




}
