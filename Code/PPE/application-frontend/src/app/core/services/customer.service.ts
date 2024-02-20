import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/datamodels/Customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl+"/customer/getAllCustomers");
  }

  public getCustomersByProviderId(providerId: string, offset: number, limit: number): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.baseUrl+`/customer/getCustomerByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }

  public countCustomerByProviderId(providerId: string): Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/customer/countCustomerByProviderId?providerId=${providerId}`);
  }

  public getCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl+`/customer/getCustomerById?id=${id}`);
  }

  public createCustomer(customer: Customer, password: string): Observable<string>{
    return this.httpClient.post(this.baseUrl+`/customer/createCustomer?password=${password}`, customer, {responseType: 'text'});
  }

  public deleteCustomerById(id: string): Observable<string>{
    return this.httpClient.delete<string>(this.baseUrl+`/customer/deleteCustomerById?id=${id}`);
  }

  public updateCustomer(customer: Customer): Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+"/customer/updateCustomer", customer);
  }

  public resetCustomerPassword(email:string, password: string): Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+`/customer/resetCustomerPassword?email=${email}&password=${password}`, null);
  }
}
