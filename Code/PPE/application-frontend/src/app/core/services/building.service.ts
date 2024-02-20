import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Building } from '../models/datamodels/Building';

@Injectable({
  providedIn: 'root'
})

export class BuildingService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public getAllBuildings(offset: number, limit: number): Observable<Building[]> {
    return this.httpClient.get<Building[]>(this.baseUrl+`/building/getAllBuildings?offset=${offset}&limit=${limit}`);
  }

  public countAllBuildings(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+`/building/countAllBuildings`);
  }

  public getBuildingByCustomerId(customerId: string, offset: number, limit: number): Observable<Building[]> {
    return this.httpClient.get<Building[]>(this.baseUrl+`/building/getBuildingByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`)
  }

  public countBuildingByCustomerId(customerId: string): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+`/building/countBuildingByCustomerId?customerId=${customerId}`);
  }

  public getBuildingById(id: string): Observable<Building> {
    return this.httpClient.get<Building>(this.baseUrl+`/building/getBuildingById?id=${id}`);
  }

  public createBuilding(building: Building, customerId: string): Observable<string>{
    return this.httpClient.post(this.baseUrl+`/building/createBuilding?customerId=${customerId}`, building, {responseType: 'text'});
  }

  public deleteBuilding(id: string): Observable<string>{
    return this.httpClient.delete<string>(this.baseUrl+`/building/deleteBuildingById?id=${id}`);
  }

  public updateBuilding(building: Building): Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+`/building/updateBuilding`, building);
  }
}
