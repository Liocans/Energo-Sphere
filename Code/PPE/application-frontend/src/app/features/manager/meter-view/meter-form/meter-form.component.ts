import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { Meter } from 'src/app/core/models/datamodels/Meter';
import { EnergyType } from 'src/app/core/models/datamodels/EnergyType';

//components
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

//services
import { MeterService } from 'src/app/core/services/meter.service';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-meter-form',
  templateUrl: './meter-form.component.html',
  styleUrls: ['./meter-form.component.scss'],
  providers: [ConfirmationService]
})

export class MeterFormComponent implements OnInit{
  
  //Current meter
  private _meter: Meter;

  //Form
  public meterForm: FormGroup;
  public modeForm: "create" | "edit";

  //Dropdown
  public energies: EnergyType[];
  public selectedEnergy: EnergyType;

  constructor(
    private readonly meterService: MeterService, 
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    private translateService: TranslateService,
    private confirmationService: ConfirmationService) {}
  
  ngOnInit(): void {

    this.initForm();
    
    this.meterService.getAllEnergyTypes().subscribe((energyTypes: EnergyType[]) => {
      this.energies = energyTypes;
      for (let index = 0; index < this.energies.length; index++) {
        this.translateService.get(this.energies[index].value).subscribe(translation => {
          this.energies[index].value = translation;
        });
      }  
    });
  }

  private initForm() {
    
    this.meterForm = this.fb.group({
      id: [null],
      value: [0.0, Validators.required],
      energyType: [null, Validators.required],
      numeric: [false, Validators.required],
      open:[false, Validators.required]
    });

    
    if(this.config.data){
      this.modeForm = "edit";
      this.config.data.numeric = this.config.data.numeric == "✔️";
      this.config.data.open = this.config.data.open == "✔️";
      this._meter = this.config.data;
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
          this._meter = this.meterForm.value;
          this._meter.energyType = this.energies[this._meter.energyType as number];
          this.ref.close(this._meter);
        }
      });  
    });
  }

  private updateForm(): void {
    this.meterForm.patchValue(this._meter);
    if(this.modeForm === "edit"){
      this.meterForm.get("energyType").patchValue(this._meter.energyType.id);
      this.meterForm.get("energyType").disable();
    }
  }
}
