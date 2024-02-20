import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//models
import { Building } from 'src/app/core/models/datamodels/Building';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components
import { BuildingFormComponent } from './building-form/building-form.component';

//services
import { LocalService } from 'src/app/core/services/local.service';
import { RouteHistoryService } from 'src/app/core/directives/route-history.service';
import { DialogService } from 'primeng/dynamicdialog';
import { BuildingService } from 'src/app/core/services/building.service';
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-building-view',
  templateUrl: './building-view.component.html',
  styleUrls: ['./building-view.component.scss']
})

export class BuildingViewComponent implements OnInit, IRefreashable, IFormable {
  
  public buildings: Building[];
  
  public buildingsCounter: number;

  public cols: DynamicColumn[];

  public selectedBuilding: Building;

  public currentCustomerId: string;

  public formHeader: string;

  public isLoading: boolean = false; 

  public paginationParams: PaginationParams;

  constructor(
    private readonly activatedRoute: ActivatedRoute, 
    private readonly router: Router, 
    private readonly buildingService: BuildingService, 
    public dialogService: DialogService,
    private routeHistory: RouteHistoryService,
    private translateService: TranslateService,
    private localStorage: LocalService) {}
  
  ngOnInit(): void {
    this.cols = [
      {field: 'buildingName', header: 'name'},
      {field: 'city', header: 'city'},
      {field: 'number', header: 'number'},
      {field: 'room', header: 'room'},
      {field: 'street', header: 'street'},
      {field: 'zipCode', header: 'zipcode'},
      {field: 'main', header:'main'}
    ];

    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    
    this.refreshData();
  }

  public createFormDialog(): void {
    this.translateService.get("buildingform").subscribe(translation => {
      const ref = this.dialogService.open(BuildingFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
        ref.onClose.subscribe((building: Building) => {
          if(building){
            this.buildingService.createBuilding(building, this.currentCustomerId).subscribe(() => {
              this.refreshData();
            });
          }
        });
    });
  }

  public editFormDialog(data: any): void {
    this.translateService.get("buildingform").subscribe(translation => {
      const ref = this.dialogService.open(BuildingFormComponent,
        {
          header: translation,
          data: data.id,
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
    });
  }

  public onBuildingSelected(building: Building): void {
    this.selectedBuilding = building;
  }

  public deleteBuilding(id: any): void {
    this.buildingService.deleteBuilding(id).subscribe(() => {
      this.refreshData();
    });
  }

  public updatePaginationParams(params: PaginationParams): void{
    this.paginationParams = params;
    this.refreshData();
  }

  public refreshData(): void {
    if(JSON.parse(this.localStorage.getData("roles")).includes("USER")){
      this.currentCustomerId = this.localStorage.getData("id")
    }else{
      this.currentCustomerId = this.activatedRoute.snapshot.params['customerId'];
    }
    this.isLoading = true;
    this.loadBuildingsByCustomerId();
  }
 
  private async loadBuildingsByCustomerId(): Promise<void>{
    await this.buildingService.countBuildingByCustomerId(this.currentCustomerId).toPromise().then((buildingsCounter: number) => {
      this.buildingsCounter = buildingsCounter;
    });
    await this.buildingService.getBuildingByCustomerId(
      this.currentCustomerId, 
      this.paginationParams.first, 
      this.paginationParams.rowsNumber).toPromise().then((buildings: Building[]) =>{
        this.buildings = buildings;
        this.isLoading = false;
    });
  }

  public onShowMetersClick(): void{
    this.router.navigateByUrl(`/manager/building/${this.selectedBuilding.id}/meters`);
  }

  public onPreviousClick(): void{
    this.routeHistory.back();
  }
  
  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }

  public onShowChartClick(): void{
    this.router.navigateByUrl(`/manager/chart/${this.selectedBuilding.id}`);   
  }
}
