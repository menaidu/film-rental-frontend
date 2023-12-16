import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  // private baseUrltitle="http://localhost:8088/api/films/title/"
  //private baseUrlid="http://localhost:8088/api/films/film_id/"
  // private baseUrl="http://localhost:8088/api/films/getAll";

  private Url = 'http://localhost:8088/api/films';
  baseUrl: any;

  constructor(private httpClient: HttpClient) {}
  getFilmByTitle(title: string): Observable<Film> {
    return this.httpClient.get<Film>(`${this.Url}/title/${title}`);
  }

  getFilm(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.Url}/getAll`);
  }

  filmById(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.Url}/id/${id}`);
  }

  getFilmByStatus(status: string): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.Url}status/${status}`);
  }

  addFilm(film: Film): Observable<any> {
    const url = `${this.baseUrl}/post`;
    return this.httpClient.post(url, film);
  }

  deleteFilm(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.Url}${id}`);
  }
  
  updateFilm(film: any, id: any): Observable<Object> {
    return this.httpClient.put(`${this.Url}/update/title/${id}`, film);
  }
}
