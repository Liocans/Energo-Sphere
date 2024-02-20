import { Component, OnInit } from '@angular/core';

//models
import { Provider } from 'src/app/core/models/datamodels/Provider';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components

//services
import { ProviderService } from 'src/app/core/services/provider.service';

@Component({
  selector: 'app-provider-view',
  templateUrl: './provider-view.component.html',
  styleUrls: ['./provider-view.component.scss']
})

export class ProviderViewComponent implements OnInit, IRefreashable {

  public providers: Provider[];
  
  public cols: DynamicColumn[];

  public isLoading: boolean = false; 

  constructor(private readonly providerService: ProviderService){}
  
  ngOnInit(): void {
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'number', header: 'Number'},
      {field: 'city', header: 'City'},
      {field: 'country', header: 'Country'},
      {field: 'zipCode', header: 'Zip code'},
    ];
    this.refreshData();
  }


  public refreshData(): void{
    this.isLoading = true;
    this.providerService.getAllProviders().subscribe((providers: Provider[]) => {
      this.providers = providers;
      this.isLoading = false;
    });
  }
}
