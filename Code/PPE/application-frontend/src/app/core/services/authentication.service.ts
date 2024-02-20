import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/utility/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService{

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public signin(username: string, password: string): Observable<User>{
    return this.httpClient.post<User>(this.baseUrl + `/auth/signin?username=${username}&password=${password}`, null);
  }

  public signout(): Observable<string>{
    return this.httpClient.post(this.baseUrl + "/auth/signout", null, {responseType: 'text'} );
  }
}
