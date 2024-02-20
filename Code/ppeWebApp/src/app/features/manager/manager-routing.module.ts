import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuildingViewComponent } from './building-view/building-view.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { MeterViewComponent } from './meter-view/meter-view.component';
import { ProviderViewComponent } from './provider-view/provider-view.component';
import { WalletViewComponent } from './wallet-view/wallet-view.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { PriceViewComponent } from './contract-view/price-view/price-view.component';

const routes: Routes = [
    {
        path: 'contracts',
        component: ContractViewComponent
    },
    {
        path: 'contract/:contractId/prices',
        component: PriceViewComponent
    },
    {
        path: 'buildings',
        component: BuildingViewComponent,
    },
    {
        path: 'building',
        children: [
            {
                path: ':buildingId/meters',
                component: MeterViewComponent
                //component: BuildingMeterViewComponent
            },
            {
                path: ':walletId/meters',
                component: MeterViewComponent
            }
        ]
    },
    {
        path: 'customers',
        component: CustomerViewComponent,
    },
    {
        path: 'customer/:customerId',
        children: [
            {
                path: 'buildings',
                component: BuildingViewComponent
            }
        ]
    },
    {
        path: 'providers',
        component: ProviderViewComponent
    },
    {
        path: 'meters',
        component: MeterViewComponent
    },   
    {
        path: 'wallets',
        component: WalletViewComponent
    },
    {
        path: 'wallets/:buildingId/meters',
        component: MeterViewComponent
    },
    {
        path: 'chart/:id',
        component: ChartViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule { }