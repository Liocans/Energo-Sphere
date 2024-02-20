 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../models/datamodels/Provider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllProviders(): Observable<Provider[]>{
    return this.httpClient.get<Provider[]>(this.baseUrl+"/provider/getAllProviders");
  }
}
