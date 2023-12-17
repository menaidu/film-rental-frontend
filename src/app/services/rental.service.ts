import { Injectable } from '@angular/core';
import { Rental } from '../models/rental.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private baseUrl="http://localhost:8088/api/rental/getAll";

  constructor(private httpClient:HttpClient) {}

  getRentals() : Observable<Rental[]>{

    return this.httpClient.get<Rental[]>(`${this.baseUrl}`);

  }

  RentalById(id:number): Observable<Rental>{

    return this.httpClient.get<Rental>(`${this.baseUrl}${id}`);

  }

  getRentalByStatus(status:string) : Observable<Rental[]>{

    return this.httpClient.get<Rental[]>(`${this.baseUrl}status/${status}`);

  }

  addRental(rental: Rental): Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`,rental);

  }

  deleteRental(id: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseUrl}${id}`);

  }

  updateRental(rental:Rental) : Observable<Object>{

    return this.httpClient.put(`${this.baseUrl}`,rental);

  }

}

