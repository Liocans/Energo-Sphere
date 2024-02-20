import { ContractEnergyType } from "./ContractEnergyType";
import { ContractType } from "./ContractType";

export class Contract{

    id?: string;

    startDate?: string;

    endDate?: string;

    providerId?: string;

    providerName?: string;

    contractType?: ContractType;

    buildingId?: string;

    buildingAdress? : string;

    customerId?: string;

    customerName?: string;
    
    contractEnergyType?: ContractEnergyType[];

    public constructor(id:string, startDate:string, endDate:string, providerId:string, contractType:ContractType, buildingId:string, customerId:string){
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.providerId = providerId;
        this.contractType = contractType;
        this.buildingId = buildingId;
        this.customerId = customerId;
    }
}