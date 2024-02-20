import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { Contract } from 'src/app/core/models/datamodels/Contract';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components
import { ContractFormComponent } from './contract-form/contract-form.component';

//services
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';
import { ContractService } from 'src/app/core/services/contract.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss'],
  providers: [DialogService]
})

export class ContractViewComponent implements OnInit, IRefreashable, IFormable {

  public contracts: Contract[];

  public contractsCounter: number;

  public selectedContract: Contract;

  public cols: DynamicColumn[];
  
  public formHeader: string;

  public isLoading: boolean = false; 

  private roles: string[];

  public paginationParams: PaginationParams;

  constructor(
    private readonly router: Router,
    private readonly contractService: ContractService, 
    public dialogService: DialogService, 
    private translateService: TranslateService,
    private localStorage: LocalService) {}
  
  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.cols = [
      {field: 'startDate', header: 'startdate'},
      {field: 'endDate', header: 'enddate'},
      {field: 'providerName', header: 'provider'},
      {field: 'contractType.value', header: 'contracttype'},
      {field: 'buildingAdress', header: 'buildingadress'},
    ];
    this.refreshData();
  }

  public createFormDialog(): void {
    this.translateService.get("contractform").subscribe(translation => {
      const ref = this.dialogService.open(ContractFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });

        ref.onClose.subscribe((contract: Contract) => {
          if(contract){
            this.contractService.createContract(contract).subscribe(() =>{
              this.refreshData();
            });
          }
        });
    })
  }
  
  public editFormDialog(data: any): void {
    this.translateService.get("contractform").subscribe(translation => {
      const ref = this.dialogService.open(ContractFormComponent,
        {
          header: translation,
          data: data,
          draggable: true,
          resizable: true,
          maximizable: true
        });

        ref.onClose.subscribe((contract: Contract) => {
          if(contract){
            this.contractService.updateContract(contract).subscribe(() =>{
              this.refreshData();
            });
          }
        });
    });
  }

  public onShowContractPricesClick(): void{
    this.router.navigateByUrl(`/manager/contract/${this.selectedContract.id}/prices`);
  }

  public onContractSelected(contract: Contract): void{
    this.selectedContract = contract;
  }

  public updatePaginationParams(params: PaginationParams): void{
    this.paginationParams = params;
    this.refreshData();
  }

  public refreshData(): void {
    this.isLoading = true;
    this.roles.includes("ADMIN") ? this.loadProviderContracts() : this.loadCustomerContracts();
  }

  private async loadCustomerContracts(): Promise<void>{
    await this.contractService.countContractByCustomerId(this.localStorage.getData('id')).toPromise().then((contractsCounter: number) => {
      this.contractsCounter = contractsCounter;
    });
    await this.contractService.getContractsByCustomerId(
      this.localStorage.getData('id'), 
      this.paginationParams.first, 
      this.paginationParams.rowsNumber).toPromise().then((contracts: Contract[]) => {
        this.contracts = contracts;
        this.isLoading = false;
      });
  }

  private async loadProviderContracts(): Promise<void>{
    await this.contractService.countContractByProviderId(this.localStorage.getData('id')).toPromise().then((contractsCounter: number) => {
      this.contractsCounter = contractsCounter;
    });
    await this.contractService.getContractsByProviderId(
      this.localStorage.getData('id'), 
      this.paginationParams.first, 
      this.paginationParams.rowsNumber).toPromise().then((contracts: Contract[]) => {
        this.contracts = contracts;
        this.isLoading = false;
      });
  }

  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
