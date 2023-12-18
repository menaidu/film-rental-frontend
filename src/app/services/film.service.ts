import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {

  private baseUrl = 'http://localhost:8088/api/films';

  constructor(private httpClient: HttpClient) {}

  getAllFilm(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.baseUrl}/getAll`);
  }

  getFilmById(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.baseUrl}/id/${id}`);
  }

  getFilmByTitle(title: string): Observable<Film> {
    return this.httpClient.get<Film>(`${this.baseUrl}/title/${title}`);
  }

  getFilmByReleaseYear(year: string): Observable<Film> {
    return this.httpClient.get<Film>(`${this.baseUrl}/year/${year}`);
  }

  getFilmByLanguage(lang: string): Observable<Film> {
    return this.httpClient.get<Film>(`${this.baseUrl}/language/${lang}`);
  }

  getFilmByRentalRateGreaterThan(rate: number){
    return this.httpClient.get<Film>(`${this.baseUrl}/rate/gt/${rate}`);
  }

  getFilmByCategory(category: string): Observable<Film>{
    return this.httpClient.get<Film>(`${this.baseUrl}/category/${category}`);
  }

  addFilm(film: any): Observable<string> {
    const url = `${this.baseUrl}/post`;
    return this.httpClient.post(url, film,{responseType:'text'});
  }
  
  updateFilmTitle(film: Film, id: number): Observable<Film> {
    return this.httpClient.put<Film>(`${this.baseUrl}/update/title/${id}`, film);
  }

  updateFilmReleaseYear(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/releaseyear/${id}`, film);
  }

  updateFilmRentalDurtion(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/rentaldurtion/${id}`, film);
  }

  updateFilmRentalRate(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/rentalrate/${id}`, film);
  }

  updateFilmRating(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/rating/${id}`, film);
  }

  updateFilmLanguage(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/language/${id}`, film);
  }

  updateFilmCategory(film: Film, id: number):  Observable<Film>{
    return this.httpClient.put<Film>(`${this.baseUrl}/update/category/${id}`, film);
  }
}