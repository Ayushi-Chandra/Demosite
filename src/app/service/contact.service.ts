import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serverUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public addContact(customerId: string, newContact: any): Observable<any> {
    const dataUrl = `${this.serverUrl}/customers/${customerId}/contacts`;
    return this.httpClient.post(dataUrl, newContact);
  }
}
