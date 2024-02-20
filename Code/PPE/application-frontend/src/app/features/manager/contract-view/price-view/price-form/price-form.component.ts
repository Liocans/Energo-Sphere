import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { EnergyType } from 'src/app/core/models/datamodels/EnergyType';
import { ContractEnergyType } from 'src/app/core/models/datamodels/ContractEnergyType';

//components
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

//services
import { ContractService } from 'src/app/core/services/contract.service';
import { LocalService } from 'src/app/core/services/local.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss'],
  providers: [ConfirmationService]
})

export class PriceFormComponent implements OnInit {
  
  //Current contractEnergyType
  private _contractEnergyType: ContractEnergyType;

  //Form
  public priceForm: FormGroup;

  public modeForm: "create" | "edit";

  public energies: EnergyType[];

  public selectedEnergy: EnergyType;

  constructor(
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    private translateService: TranslateService,
    private confirmationService: ConfirmationService,
    private contractService: ContractService,
    private localStorage: LocalService){}

  ngOnInit(): void {
    this.initForm();

    this.contractService.getEnergyTypeByProviderId(this.localStorage.getData('id')).subscribe((energies: EnergyType[]) =>{
      this.energies = energies;
      for (let index = 0; index < this.energies.length; index++) {
        this.translateService.get(this.energies[index].value).subscribe( translation => {
          this.energies[index].value = translation;
        })
      };  
    });
  }

  private initForm(): void {
    this.priceForm = this.fb.group({
      id: [null],
      dayPrice: [0.0, Validators.required],
      nightPrice: [0.0, Validators.required],
      energyType: [null, Validators.required]
    });

    if(this.config.data){
      this.modeForm = "edit";
      this._contractEnergyType = this.config.data;
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
    this.translateService.get("saveMessage").subscribe( translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'saveDialog',
        accept: () => {
          this._contractEnergyType = this.priceForm.value;
          if(this.modeForm == "create"){
            this._contractEnergyType.energyTypeId = this._contractEnergyType.energyType as unknown as number;
            delete this._contractEnergyType.energyType;
          }
          this.ref.close(this._contractEnergyType);
        }
      }); 
    });
  }

  private updateForm() {
    this.priceForm.patchValue(this._contractEnergyType);
    if(this.modeForm === "edit"){
      this.priceForm.get("energyType").patchValue(this._contractEnergyType.energyTypeId);
      this.priceForm.get("energyType").disable();
    }
  }
}
