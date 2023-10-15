import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private serverUrl: string = 'http://localhost:9000';

  constructor(private httpClient: HttpClient) { }

  public addAddress(customerId: string, newAddress: any): Observable<any> {
    const dataUrl = `${this.serverUrl}/customers/addresses/${customerId}`;
    return this.httpClient.post(dataUrl, newAddress);
  }
  
}
