import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})

export class DotnetcoreService {
  readonly ApiUrl="https://localhost:5001/api"
 
  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/Customer');
  }

  getCustomerWId(id:number):Observable<any>{
    return this.http.get<any>(this.ApiUrl+`/Customer/${id}`);
  }

  updateCustomer(id:number,customer:Customer):Observable<any>{
    const url=`${this.ApiUrl}/customer/update/${id}`;
    return this.http.put<any>(url,customer,httpOptions);
  }

  addCustomer(customer: Customer):Observable<any>{
    const url=`${this.ApiUrl}/customer/add`;
    return this.http.post<any>(url,customer,httpOptions);
  }

  deleteCustomer(id:number):Observable<number>{
    const url = `${this.ApiUrl}/customer/${id}`;
    return this.http.delete<number>(url,httpOptions)
  }
  
  
}
