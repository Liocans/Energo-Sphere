import { Component } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';

//models
import { MeterHistory } from 'src/app/core/models/datamodels/MeterHistory';

//components
import { MeterHistoryFormComponent } from './meter-history-form/meter-history-form.component';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';

//services
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';
import { MeterService } from 'src/app/core/services/meter.service';

@Component({
  selector: 'app-meter-history',
  templateUrl: './meter-history.component.html',
  styleUrls: ['./meter-history.component.scss'],
  providers: [ConfirmationService]
})

export class MeterHistoryComponent{

  public meterHistoric: MeterHistory[];

  public historiesCounter

  public selectedMeterHistory: MeterHistory;
  
  public first: number = 0;

  public rowsNumber: number = 15;

  public totalRecords: number;
  
  public isLoading: boolean = true;

  constructor(private readonly meterService: MeterService, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    public translateService: TranslateService, 
    public dialogService: DialogService, 
    public localStorage: LocalService,
    private confirmationService: ConfirmationService){}

  public loadHistoricLazy(event: LazyLoadEvent): void{
    this.isLoading = true;
    this.meterService.countMeterHistoryByMeterId(this.config.data).subscribe((historiesCounter: number) => {
      this.totalRecords = historiesCounter;
    });
    if(event.sortField){
      this.meterService.getMeterHistoryByMeterId(this.config.data, event.first, event.rows, event.sortField, event.sortOrder).subscribe((meterHistory: MeterHistory[]) => {
        this.meterHistoric = meterHistory;
        this.isLoading = false;
      });
    }else{
      this.meterService.getMeterHistoryByMeterId(this.config.data, event.first, event.rows).subscribe((meterHistory: MeterHistory[]) => {
        this.meterHistoric = meterHistory;
        this.isLoading = false;
      });
    }

  }

  public editFormDialog(data: any): void {
    this.translateService.get("meterhistoryform").subscribe(translation => {
      const ref = this.dialogService.open(MeterHistoryFormComponent,
        {
          header: translation,
          data: data,
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
        ref.onClose.subscribe((meterHistory: MeterHistory) => {
          if(meterHistory){
            this.meterService.updateMeterHistory(meterHistory).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    });
  }


  public deleteMeterHistory(id: any): void{
    this.translateService.get("deleteMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'deleteDialog',
        accept: () => {
          this.meterService.deleteMeterHistoryById(id).subscribe(() => {
            this.refreshData();
          });
        }
      }); 
    });
  }

  
  public createFormDialog(): void {
    this.translateService.get("meterhistoryform").subscribe(translation => {
      const ref = this.dialogService.open(MeterHistoryFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
        ref.onClose.subscribe((meterHistory: MeterHistory) => {
          if(meterHistory){
            this.meterService.createMeterHistory(meterHistory, this.config.data).subscribe(() => {
              this.refreshData();
            });        
          } 
        });
    })
  }

  public async refreshData(): Promise<void>{
    await this.meterService.countMeterHistoryByMeterId(this.config.data).toPromise().then((historiesCounter: number) => {
      this.totalRecords = historiesCounter;
    });
    await this.meterService.getMeterHistoryByMeterId(this.config.data, this.first , this.rowsNumber).toPromise().then((meterHistory: MeterHistory[]) => {
      this.meterHistoric = meterHistory;
      this.isLoading = false;
    });
  }

  public onMeterHistorySelected(meterHistory: MeterHistory): void{
    this.selectedMeterHistory = meterHistory;
  }

  public isAdmin(): boolean{
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
