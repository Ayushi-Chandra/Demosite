import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,throwError } from 'rxjs';
import { Icontactinfo } from '../models/icontactinfo';


@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {

  constructor(private httpClient:HttpClient) { }
  private customers: Icontactinfo[] = [];

  private serverUrl:string ="http://localhost:9000";

  public getCustomer():Observable<Icontactinfo[]>{
    let dataUrl=`${this.serverUrl}/customers`;
    return this.httpClient.get<Icontactinfo[]>(dataUrl).pipe(catchError(this.handleError))
  }

  public getCustomerById(customerId:string):Observable<Icontactinfo>{
    let dataUrl=`${this.serverUrl}/customers/${customerId}`;
    return this.httpClient.get<Icontactinfo>(dataUrl).pipe(catchError(this.handleError))
  }

  public addCustomer(customer: Icontactinfo): Observable<Icontactinfo> {
    let dataUrl = `${this.serverUrl}/customers`;
    return this.httpClient.post<Icontactinfo>(dataUrl, customer).pipe(catchError(this.handleError));
  }
  


  public updateContact(customerId:string,customer:Icontactinfo):Observable<Icontactinfo>{
    let dataUrl=`${this.serverUrl}/customers/${customerId}`
    return this.httpClient.put<Icontactinfo>(dataUrl,customer).pipe(catchError(this.handleError))
  }

  public deleteContactById(customerId:number):Observable<{}>{
    let dataUrl=`${this.serverUrl}/customers/${customerId}`
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError))
  }
  getCustomers(): Icontactinfo[] {
    return this.customers;
  }
  // searchCustomers(searchQuery: string): Icontactinfo[] {
  //   return this.customers.filter(
  //     customer => JSON.stringify(customer).toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }
  public searchCustomers(searchName: string): Observable<Icontactinfo[]> {
    
    const dataUrl = `${this.serverUrl}/customers?search=${searchName}`;

    return this.httpClient.get<Icontactinfo[]>(dataUrl);
  }



  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage=`Error :${error.error.message}`;
    }
    else{
      //server error
      errorMessage=`Status :${error.status}`;
    }
    return throwError(errorMessage);
  }
}
