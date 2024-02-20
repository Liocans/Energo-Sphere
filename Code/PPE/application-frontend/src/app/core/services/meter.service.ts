import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnergyType } from '../models/datamodels/EnergyType';
import { Meter } from '../models/datamodels/Meter';
import { MeterHistory } from '../models/datamodels/MeterHistory';

@Injectable({
  providedIn: 'root'
})

export class MeterService {
 
  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllMeter(): Observable<Meter[]>{
    return this.httpClient.get<Meter[]>(this.baseUrl+"/meter/getAllMeters");
  }

  public getMetersByBuildingId(buildingId: string): Observable<Meter[]>{
    return this.httpClient.get<Meter[]>(this.baseUrl+`/meter/getMetersByBuildingId?buildingId=${buildingId}`);
  }

  public getMetersByWalletId(walletId: string): Observable<Meter[]>{
    return this.httpClient.get<Meter[]>(this.baseUrl+`/meter/getMetersByWalletId?walletId=${walletId}`);
  }

  public getMeterHistoryByMeterId(meterId: string, offset: number, limit: number, columnName:string = "date", order: number = -1): Observable<MeterHistory[]>{
    return this.httpClient.get<MeterHistory[]>(this.baseUrl+`/meterHistory/getMeterHistoryByMeterId?meterId=${meterId}&offset=${offset}&limit=${limit}&columnName=${columnName}&order=${order}`);
  }

  public getMeterHistoryByMeterIdUsingDate(meterId: string, startDate: string, endDate: string): Observable<MeterHistory[]>{
    return this.httpClient.get<MeterHistory[]>(this.baseUrl+`/meterHistory/getMeterHistoryByMeterIdUsingDate?meterId=${meterId}&startDate=${startDate}&endDate=${endDate}`);
  }

  public countMeterHistoryByMeterId(meterId: string): Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/meterHistory/countMeterHistoryByMeterId?meterId=${meterId}`);
  }

  public createMeter(meter: Meter, buildingId: string): Observable<string>{
    return this.httpClient.post(this.baseUrl+`/meter/createMeter?buildingId=${buildingId}`, meter, {responseType: 'text'});
  }

  public deleteMeter(id: string): Observable<string>{
    return this.httpClient.delete<string>(this.baseUrl+`/meter/deleteMeterById?id=${id}`);
  }

  public updateMeter(meter: Meter): Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+`/meter/updateMeter`, meter);
  }

  public getAllEnergyTypes(): Observable<EnergyType[]>{
    return this.httpClient.get<EnergyType[]>(this.baseUrl+"/energyType/getAllEnergyTypes")
  }

  public deleteMeterHistoryById(id: number): Observable<string>{
    return this.httpClient.delete<string>(this.baseUrl+`/meterHistory/deleteMeterHistoryById?id=${id}`);
  }

  public updateMeterHistory(meterHistory: MeterHistory): Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+`/meterHistory/updateMeterHistory`, meterHistory);
  }

  public createMeterHistory(meterHistory : MeterHistory, meterId: string): Observable<string>{
    return this.httpClient.post<string>(this.baseUrl+`/meterHistory/createMeterHistory?meterId=${meterId}`, meterHistory);
  }
}
