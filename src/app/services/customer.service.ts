import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  // getCustomers() {
  //   throw new Error('Method not implemented.');
  // }
  private baseUrl="http://localhost:8090/api/customers";
  constructor(private httpClient:HttpClient) {}

  getCustomer() : Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/getAll`);
  }
 
 
  addCustomer(customer: Customer): Observable<any>{
    const url = `${this.baseUrl}/post`;
    return this.httpClient.post(url, customer);
  
  }
 
  updateCustomer(customer:Customer) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`,customer);
  }

  updateLastName(customer: Customer, id: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/ln/${id}`, customer);
  }

  updateFirstName(customer: Customer, id: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/fn/${id}`, customer);
  }


  updateEmail(customer: Customer, id: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/email/${id}`, customer);
  }

  updatePhone(customer: Customer, id: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/phone/${id}`, customer);
  }

  updateAddress(customer: Customer, id: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/address/${id}`, customer.address);
  }

  findByActive(customer: Customer) : Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/active`);
  }

  findByInActive(customer: Customer) : Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/Inactive`);
  }

  getCustomerByLastName(ln: string): Observable<Customer> {
    const Url="http://localhost:8090/api/customers";

    return this.httpClient.get<Customer>(`${Url}/lastname/${ln}`);
  }

  getCustomerByFirstName(fn: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/firstname/${fn}`);
  }

  getCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/email/${email}`);
  }

  getCustomerByPhone(phone: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/phone/${phone}`);
  }

  

}

