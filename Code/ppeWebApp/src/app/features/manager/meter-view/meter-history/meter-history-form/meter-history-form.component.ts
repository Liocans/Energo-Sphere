import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { MeterHistory } from 'src/app/core/models/datamodels/MeterHistory';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { MeterService } from 'src/app/core/services/meter.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-meter-history-form',
  templateUrl: './meter-history-form.component.html',
  styleUrls: ['./meter-history-form.component.scss'],
  providers: [ConfirmationService]
})
export class MeterHistoryFormComponent implements OnInit{

    //Current meter
    private _meterHistory: MeterHistory;

    //Form
    public meterHistoryForm: FormGroup;
    public modeForm: "create" | "edit";

    constructor(    
      private readonly meterService: MeterService, 
      private fb: FormBuilder, 
      public ref: DynamicDialogRef, 
      public config: DynamicDialogConfig, 
      private confirmationService: ConfirmationService,
      private translateService: TranslateService){}
      
  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    
    this.meterHistoryForm = this.fb.group({
      id: [null],
      date: [null, Validators.required],
      value: [0.0, Validators.required],
    });

    if(this.config.data){
      this.modeForm = "edit";
      this._meterHistory = this.config.data;
      this.updateForm();
    }else{
      this.modeForm = "create";
    }
  }

  public cancelDialog(): void{
    this.translateService.get("cancelMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'cancelDialog',
        accept: () => {
          this.ref.close();
        }
      });
    });
  }

  public saveDialog(): void{
    this.translateService.get("saveMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'saveDialog',
        accept: () => {
          this._meterHistory = this.meterHistoryForm.value;
          this.ref.close(this._meterHistory);
        }
      });  
    })
  }

  private updateForm(): void {
    this.meterHistoryForm.patchValue(this._meterHistory);
  }
}
