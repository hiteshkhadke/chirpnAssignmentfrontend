import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../entity/customer';
import { backendURL } from '../connectionURL/backendURL';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = `${backendURL.nodeURL}/api`;

  constructor(private http: HttpClient) {}

  getCriteria(selectedValue, searchedValue): Observable<any> {
    if (selectedValue === 'id') return this.getCustomerById(searchedValue);
    else if (selectedValue === 'firstName')
      return this.getCustomerByFirstName(searchedValue);
    else if (selectedValue === 'lastName')
      return this.getCustomerByLastName(searchedValue);
    else if (selectedValue === 'age')
      return this.getCustomerByAge(searchedValue);
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers`);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/id/` + id);
  }

  getCustomerByFirstName(firstName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/firstName/` + firstName);
  }

  getCustomerByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/lastName/` + lastName);
  }

  getCustomerByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/age/` + age);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/customers`, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}/customers/update/` + id, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/customers/delete/` + id);
  }
}
