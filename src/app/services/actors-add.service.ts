import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { Actor } from '../models/actor.model';
 
@Injectable({
  providedIn: 'root'
})
export class ActorsAddService {
  private baseUrl='http://localhost:8088/api/actors';
 
  constructor( private httpClient:HttpClient) { }
 
  getAllActors():Observable<Actor[]>{
    return this.httpClient.get<Actor[]>(`${this.baseUrl}/all`);
  }
 
  addActor(Actor:any): Observable<string>{
    const url =`${this.baseUrl}/post`;
    return this.httpClient.post(url,Actor,{responseType:'text'});
  }
 
  getActorsByLastName(ln: string): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(`${this.baseUrl}/lastname/${ln}`);
  }
 
  getActorsByFirstName(fn: string): Observable<Actor[]> {
    return this.httpClient.get<Actor[]>(`${this.baseUrl}/firstname/${fn}`);
  }
 
  updateLastName(actor:Actor, id:number): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/update/lastname/${id}`,actor);
  }
 
  updateFirstName(actor: Actor,id:number): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/update/firstname/${id}`,actor)
  }
 
  getFilmsByActorId(actorId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/$films/{id}`);
  }
 
  getActorById(actorId: number):Observable<any>{
    return this.httpClient.get<Actor>(`${this.baseUrl}/${actorId}`);
  }
 
  assignFilmToActor(actorId: number, assignFilm:Film): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${actorId}/film`, {assignFilm });
  }
 
  getTopTenActorsByFilmCount(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/filmCount`);
  }
 
 
 
}
