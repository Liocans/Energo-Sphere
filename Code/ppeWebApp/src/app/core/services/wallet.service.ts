import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wallet } from '../models/datamodels/Wallet';

@Injectable({
  providedIn: 'root'
})

export class WalletService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllWallets(): Observable<Wallet[]>{
    return this.httpClient.get<Wallet[]>(this.baseUrl+"/wallet/getAllWallets");
  }

  public getWalletByCustomerId(customerId:string): Observable<Wallet[]>;
  public getWalletByCustomerId(customerId:string, offset:number, limit:number): Observable<Wallet[]>;
  public getWalletByCustomerId(customerId:string, offset?:number, limit?:number): Observable<Wallet[]>{
    if(offset === undefined || limit === undefined){
      return this.httpClient.get<Wallet[]>(this.baseUrl+`/wallet/getWalletByCustomerId?customerId=${customerId}`);
    } 
    return this.httpClient.get<Wallet[]>(this.baseUrl+`/wallet/getWalletByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }

  public countWalletByCustomerId(customerId: string):Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/wallet/countWalletByCustomerId?customerId=${customerId}`);
  }

  public createWallet(buildingId: string, customerId: string):Observable<string>{
    return this.httpClient.post(this.baseUrl+`/wallet/createWallet?customerId=${customerId}&buildingId=${buildingId}`, null,  {responseType: 'text'});
  }

  public createWalletMeter(walletId: string, meterId: string):Observable<string>{
    return this.httpClient.post(this.baseUrl+`/walletMeter/createWalletMeter?meterId=${meterId}&walletId=${walletId}`, null,  {responseType: 'text'});
  }
}
