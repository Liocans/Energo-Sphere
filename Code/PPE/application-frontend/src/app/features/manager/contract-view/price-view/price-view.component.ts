import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteHistoryService } from 'src/app/core/directives/route-history.service';

//models
import { EnergyType } from 'src/app/core/models/datamodels/EnergyType';
import { ContractEnergyType } from 'src/app/core/models/datamodels/ContractEnergyType';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components
import { PriceFormComponent } from './price-form/price-form.component';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { DialogService } from 'primeng/dynamicdialog';

//services
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';
import { ContractService } from 'src/app/core/services/contract.service';

@Component({
  selector: 'app-price-view',
  templateUrl: './price-view.component.html',
  styleUrls: ['./price-view.component.scss']
})

export class PriceViewComponent implements OnInit, IRefreashable, IFormable{

  public energiesPrices: ContractEnergyType[];

  public cols: DynamicColumn[];

  public currentContractId: string;

  public selectedContractEnergy: ContractEnergyType;

  public formHeader: string;

  public isLoading: boolean = false; 
  
  constructor(
    private router: Router,
    private readonly activatedRoute: ActivatedRoute, 
    private readonly contractService: ContractService,  
    public dialogService: DialogService,
    private routeHistory: RouteHistoryService,
    private translateService: TranslateService,
    private localStorage: LocalService){}

  ngOnInit(): void {
    this.cols = [
      {field: 'energyType', header: 'energy'},
      {field: 'dayPrice', header: 'dayprice'},
      {field: 'nightPrice', header: 'nightprice'}     
    ];
    this.refreshData();
  }

  public async refreshData(): Promise<void>{
    this.currentContractId = this.activatedRoute.snapshot.params['contractId'];
    this.isLoading = true;

    //convert id of energy type to energy type name
    let map = new Map<number, string>;
    await this.contractService.getAllEnergyTypes().toPromise().then((energyTypes: EnergyType[]) => {
      energyTypes.forEach((e) =>{
        map.set(e.id, e.value);
      });
    });
    await this.contractService.getContractEnergyTypeByContractId(this.currentContractId).toPromise().then((contractEnergyType: ContractEnergyType[]) => {
      contractEnergyType.forEach((ce)=>{
        ce.energyType = map.get(ce.energyTypeId);
      });
      this.energiesPrices = contractEnergyType;
      this.isLoading = false;
    });
  }
  
  public createFormDialog(): void{
    this.translateService.get("priceform").subscribe( translation => {
      const ref = this.dialogService.open(PriceFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
        ref.onClose.subscribe((contractEnergyType: ContractEnergyType) => {
          if(contractEnergyType){
            this.contractService.createContractEnergyType(contractEnergyType, this.currentContractId).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    });
  }

  public editFormDialog(data: any): void{
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(PriceFormComponent,
        {
          header: translation,
          data: data,
          draggable: true,
          resizable: true,
          maximizable: true
        });
        ref.onClose.subscribe((contractEnergyType: ContractEnergyType) => {
          if(contractEnergyType){
            this.contractService.updateContractEnergyType(contractEnergyType).subscribe(() => {
              this.refreshData();
            });     
          } 
        });
    });      
  }

  public deletePrice(id: any): void{
    this.contractService.deleteContractEnergyTypeById(id).subscribe(() => {
      this.refreshData();
    })
  }

  public onPriceSelected(energy: ContractEnergyType): void{
    this.selectedContractEnergy = energy;
  }

  public onPreviousClick(): void{
    this.routeHistory.back();
  }

  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }

}
