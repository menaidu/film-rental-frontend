import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store.model';
 
@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
 
  private baseUrl="http://localhost:8088/api/store";
  apiUrl: any;
 
  constructor(private httpClient:HttpClient){}
 
    getStore() : Observable<Store[]>{
      return this.httpClient.get<Store[]>(`${this.baseUrl}/getAll`);
    }
 
    storeById(id:number): Observable<Store>{
      return this.httpClient.get<Store>(`${this.baseUrl}${id}`);
    }
    getStorerByStatus(status:string) : Observable<Store[]>{
      return this.httpClient.get<Store[]>(`${this.baseUrl}status/${status}`);
    }
    addStore(store: Store): Observable<any>{
      const url = `${this.baseUrl}/post`;
      return this.httpClient.post(url, store);
   
    }
    deleteStore(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}${id}`);
    }
    updateStore(store:Store) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}`,store);
    }
 
    updatePhone(store: Store, id: number) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/update/phone/${id}`, store);
    }
   
    updateCustomerId(store: Store, id: number) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/update/customer/${id}`, store);
    }
   
   
    updateStaffId(store: Store, id: number) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/update/staff/${id}`, store);
    }
   
   
   
    updateAddress(store: Store, id: number) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}/address`, store.address);
    }
   
    updateManagerId(store: Store, id: number) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/update/manager/${id}`, store.manager);
    }
 
   
   
    getStoreByPhone(phone: string): Observable<Store> {
      return this.httpClient.get<Store>(`${this.baseUrl}/phone/${phone}`);
    }
 
    getStoresByStoreId(getStoreId: number): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.baseUrl}/store/${getStoreId}`);
    }
   
  }
