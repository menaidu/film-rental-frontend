import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerActorsService {

  private baseUrl="http://localhost:8088/api/actors/getAll";

  constructor(private httpClient:HttpClient) {}




  getActors() : Observable<Actor[]>{

    return this.httpClient.get<Actor[]>(`${this.baseUrl}`);

  }

  actorById(id:number): Observable<Actor>{

    return this.httpClient.get<Actor>(`${this.baseUrl}${id}`);

  }

  getActorsByStatus(status:string) : Observable<Actor[]>{

    return this.httpClient.get<Actor[]>(`${this.baseUrl}status/${status}`);

  }

  addActor(actor: Actor): Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`,actor);

  }

  deleteActor(id: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseUrl}${id}`);

  }

  updateActor(actor:Actor) : Observable<Object>{

    return this.httpClient.put(`${this.baseUrl}`,actor);

  }




}
