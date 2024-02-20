import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

//models
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { Meter } from 'src/app/core/models/datamodels/Meter';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components
import { MeterHistoryComponent } from './meter-history/meter-history.component';
import { MeterFormComponent } from './meter-form/meter-form.component';
import { DialogService } from 'primeng/dynamicdialog';

//services
import { LocalService } from 'src/app/core/services/local.service';
import { TranslateService } from '@ngx-translate/core';
import { MeterService } from 'src/app/core/services/meter.service';
import { RouteHistoryService } from 'src/app/core/directives/route-history.service';

@Component({
  selector: 'app-meter-view',
  templateUrl: './meter-view.component.html',
  styleUrls: ['./meter-view.component.scss']
})
export class MeterViewComponent implements OnInit, IRefreashable, IFormable{
  
  public meters: Meter[];

  public cols: DynamicColumn[];

  public formHeader: string;

  public currentBuildingId: string;

  public selectedMeter: Meter;

  //table data (move to an observable?)
  public paginationParams: PaginationParams;
  public isLoading: boolean = false; 
  public first: number;
  public rowsNumber: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute, 
    private readonly meterService: MeterService,  
    public dialogService: DialogService,
    private routeHistory: RouteHistoryService,
    private translateService: TranslateService,
    private localStorage: LocalService) {}
  
  ngOnInit(): void {
    this.cols = [
      {field: 'value', header: 'value'},
      {field: 'energyType.value', header: 'energytype'},
      {field: 'numeric', header: 'numeric'},
      {field: 'open', header: 'open'}
    ];
    this.refreshData();
  }

  public createFormDialog(): void {
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(MeterFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
        ref.onClose.subscribe((meter: Meter) => {
          if(meter){
            this.meterService.createMeter(meter, this.currentBuildingId).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    });
  }

  public editFormDialog(data: any): void {
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(MeterFormComponent,
        {
          header: translation,
          data: data,
          draggable: true,
          resizable: true,
          maximizable: true
        });
        ref.onClose.subscribe((meter: Meter) => {
          if(meter){
            this.meterService.updateMeter(meter).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    });
  }

  public deleteMeter(id: any): void{
    this.meterService.deleteMeter(id).subscribe(() => {
      this.refreshData();
    });
  }

  public onMeterSelected(meter: Meter): void{
    this.selectedMeter = meter;
  }

  public onShowHistoryClick(): void{
    this.translateService.get("meterhistories").subscribe(translation => {
      const ref = this.dialogService.open(MeterHistoryComponent,
        {
          header: translation,
          data: this.selectedMeter.id,
          draggable: true,
          resizable: true,
          maximizable: true
        });
    })
  }

  public onPreviousClick(): void{
    this.routeHistory.back();
  }

  public async refreshData():Promise<void>{
    this.currentBuildingId = this.activatedRoute.snapshot.params['buildingId'];
    this.isLoading = true;
    if(this.currentBuildingId.includes('H')){
      await this.meterService.getMetersByBuildingId(this.currentBuildingId).toPromise().then((meters: Meter[]) => {
        this.meters = meters;
        this.isLoading = false;
      });
    }else{
      await this.meterService.getMetersByWalletId(this.currentBuildingId).toPromise().then((meters: Meter[]) => {
        this.meters = meters;
        this.isLoading = false;
    });
    }    
  }

  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
