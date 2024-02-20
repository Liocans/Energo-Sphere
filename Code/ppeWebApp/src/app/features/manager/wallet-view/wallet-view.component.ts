import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { WalletMeter } from 'src/app/core/models/datamodels/WalletMeter';
import { WalletCreator } from 'src/app/core/models/datamodels/WalletCreator';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { Wallet } from 'src/app/core/models/datamodels/Wallet';
import { Building } from 'src/app/core/models/datamodels/Building';

//components
import { WalletFormComponent } from './wallet-form/wallet-form.component';
import { WalletMeterFormComponent } from './wallet-meter-form/wallet-meter-form.component';
import { BuildingFormComponent } from '../building-view/building-form/building-form.component';

//services
import { TranslateService } from '@ngx-translate/core';
import { BuildingService } from 'src/app/core/services/building.service';
import { LocalService } from 'src/app/core/services/local.service';
import { WalletService } from 'src/app/core/services/wallet.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss']
})

export class WalletViewComponent implements OnInit, IRefreashable, IFormable {

  public wallets: Wallet[];

  public cols: DynamicColumn[];

  public selectedWallet: Wallet;

  public formHeader: string;

  public isLoading: boolean = false; 
  
  public paginationParams: PaginationParams;

  public walletsCounter: number;

  constructor(
    private readonly router: Router, 
    private readonly walletService: WalletService, 
    private readonly buildingService: BuildingService, 
    public dialogService: DialogService,
    private localStorage: LocalService,
    private translateService: TranslateService){}
  
  ngOnInit(): void {
    this.cols = [
      {field: 'buildingAddress', header: 'buildingadress'},
      {field : 'customerPrivilege', header: 'customerPrivilege'}
    ];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.refreshData(); 
  }


  public editFormDialog(data: any): void {
    throw new Error('Method not implemented (extension).');
  }

  public onWalletSelected(wallet: Wallet): void {
    this.selectedWallet = wallet;
  }

  public updatePaginationParams(params: PaginationParams): void{
    this.paginationParams = params;
    this.refreshData();
  }

  public refreshData(): void {
    this.isLoading = true;
    this.walletService.countWalletByCustomerId(this.localStorage.getData("id")).subscribe( (walletsCounter: number) => {
      this.walletsCounter = walletsCounter;
    });
    this.walletService.getWalletByCustomerId(this.localStorage.getData("id"), this.paginationParams.first, this.paginationParams.rowsNumber).subscribe((wallets: Wallet[]) => {
      this.wallets = wallets;
      this.isLoading = false;
    });
  }

  public onShowMetersClick(): void{
    this.router.navigateByUrl(`/manager/wallets/${this.selectedWallet.id}/meters`);   
  }

  public onShowBuildingFormClick(): void{
    const ref = this.dialogService.open(BuildingFormComponent,
      {
        header: this.formHeader,
        data: this.selectedWallet.buildingId,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe((building: Building) => {
        if(building){
          this.buildingService.updateBuilding(building).subscribe(() => {
            this.refreshData();
          });
        }
      });
  }

  public createFormDialog(): void {
    this.translateService.get("walletform").subscribe(translation => {
      const ref = this.dialogService.open(WalletFormComponent,
        {
          header: translation,
          data: this.localStorage.getData('id'),
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
      ref.onClose.subscribe((wallet: WalletCreator) => {
        if(wallet){
          this.walletService.createWallet(wallet.building, wallet.customer).subscribe(() => {
            this.refreshData();
          });        
        } 
      });
    })
  }

  public createFormDialogMeter(): void {
    this.translateService.get("walletmeterform").subscribe(translation => {
      const ref = this.dialogService.open(WalletMeterFormComponent,
        {
          header: translation,
          data: this.selectedWallet,
          draggable: true,
          resizable: true,
          maximizable: true
        });
    
        ref.onClose.subscribe((walletMeter: WalletMeter) => {
          if(walletMeter){
            this.walletService.createWalletMeter(walletMeter.wallet, walletMeter.meter).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    });
  }

  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }

  public onShowChartClick(): void{
    this.router.navigateByUrl(`/manager/chart/${this.selectedWallet.id}`);   
  }

  public isAdministrator(): boolean{
    return this.selectedWallet == null || this.selectedWallet.customerPrivilege != "Gestionnaire"
  }
}
