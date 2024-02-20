import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contract } from '../models/datamodels/Contract';
import { ContractEnergyType } from '../models/datamodels/ContractEnergyType';
import { ContractType } from '../models/datamodels/ContractType';
import { EnergyType } from '../models/datamodels/EnergyType';

@Injectable({
  providedIn: 'root'
})

export class ContractService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  
  public getAllContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl+"/contract/getAllContracts");
  }

  public getContractsByCustomerId(customerId: string, offset: number, limit:number): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl+`/contract/getContractByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }

  public countContractByCustomerId(customerId: string): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+`/contract/countContractByCustomerId?customerId=${customerId}`);
  }

  public getContractsByProviderId(providerId: string, offset: number, limit:number): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl+`/contract/getContractByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }

  public countContractByProviderId(providerId: string): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+`/contract/countContractByProviderId?providerId=${providerId}`);
  }

  public createContract(contract: Contract): Observable<string>{
    return this.httpClient.post(this.baseUrl+"/contract/createContract", contract, {responseType: 'text'}); 
  }

  public getAllContractTypes(): Observable<ContractType[]> {
    return this.httpClient.get<ContractType[]>(this.baseUrl+"/contractType/getAllContractTypes");
  }

  //should be placed in another service ... utility.service.ts ? 
  public getAllEnergyTypes(): Observable<EnergyType[]>{
    return this.httpClient.get<EnergyType[]>(this.baseUrl+"/energyType/getAllEnergyTypes")
  }

  public updateContract(contract: Contract): Observable<Contract>{
    return this.httpClient.put<Contract>(this.baseUrl+"/contract/updateContract", contract)
  }
  
  public getEnergyTypeByProviderId(providerId: string): Observable<EnergyType[]>{
    return this.httpClient.get<EnergyType[]>(this.baseUrl+`/energyType/getEnergyTypeByProviderId?providerId=${providerId}`);
  }

  public getContractEnergyTypeByContractId(contractId: string): Observable<ContractEnergyType[]>{
    return this.httpClient.get<ContractEnergyType[]>(this.baseUrl+`/contractEnergyType/getContractEnergyTypeByContractId?contractId=${contractId}`);
  }

  public createContractEnergyType(contractEnergyType: ContractEnergyType, contractId: string): Observable<string> {
    return this.httpClient.post(this.baseUrl+`/contractEnergyType/createContractEnergyType?contractId=${contractId}`, contractEnergyType, {responseType: 'text'});
  }

  public updateContractEnergyType(contractEnergyType: ContractEnergyType): Observable<string> {
    return this.httpClient.put<string>(this.baseUrl+"/contractEnergyType/updateContractEnergyType", contractEnergyType);
  }

  public deleteContractEnergyTypeById(id: number): Observable<string> {
    return this.httpClient.delete<string>(this.baseUrl+`/contractEnergyType/deleteContractEnergyTypeById?id=${id}`);
  }
}
