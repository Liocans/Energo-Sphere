import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Language } from '../models/datamodels/Language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.baseUrl+"/language/getAllLanguages");
  }

}
