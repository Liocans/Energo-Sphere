
//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared-modules/primeng/primeng.module';
import { AvatarModule } from 'primeng/avatar';

//Components
import { ManagerComponent } from './manager.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { BuildingViewComponent } from './building-view/building-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { MeterViewComponent } from './meter-view/meter-view.component';
import { ProviderViewComponent } from './provider-view/provider-view.component';
import { DynamicTableComponent } from './layouts/dynamic-table/dynamic-table.component';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ContractFormComponent } from './contract-view/contract-form/contract-form.component';
import { CustomerFormComponent } from './customer-view/customer-form/customer-form.component';
import { BuildingFormComponent } from './building-view/building-form/building-form.component';
import { MeterFormComponent } from './meter-view/meter-form/meter-form.component';
import { MeterHistoryComponent } from './meter-view/meter-history/meter-history.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { UserCardComponent } from './layouts/menu/user-card/user-card.component';
import { NotificationComponent } from './layouts/notification/notification.component';
import { NotificationFormComponent } from './layouts/notification/notification-form/notification-form.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { MeterHistoryFormComponent } from './meter-view/meter-history/meter-history-form/meter-history-form.component';
import { PriceViewComponent } from './contract-view/price-view/price-view.component';
import { PriceFormComponent } from './contract-view/price-view/price-form/price-form.component';
import { WalletFormComponent } from './wallet-view/wallet-form/wallet-form.component';
import { WalletMeterFormComponent } from './wallet-view/wallet-meter-form/wallet-meter-form.component';
import { FormStatusModule } from './layouts/form-status/form-status.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ManagerComponent,
    MenuComponent,
    ContractViewComponent,
    BuildingViewComponent,
    CustomerViewComponent,
    MeterViewComponent,
    ProviderViewComponent,
    DynamicTableComponent,
    WalletViewComponent,
    ContractFormComponent,
    CustomerFormComponent,
    BuildingFormComponent,
    MeterFormComponent,
    MeterHistoryComponent,
    UserCardComponent,
    NotificationComponent,
    NotificationFormComponent,
    ChartViewComponent,
    MeterHistoryFormComponent,
    PriceViewComponent,
    PriceFormComponent,
    WalletFormComponent,
    WalletMeterFormComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    AvatarModule,
    RouterModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageSelectorModule,
    FormStatusModule,
    TranslateModule
  ],

})
export class ManagerModule {
  
  public directTranslate(){
    
  }
 }
