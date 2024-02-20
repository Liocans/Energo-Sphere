import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//models
import { Building } from 'src/app/core/models/datamodels/Building';

//components
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

//services
import { BuildingService } from 'src/app/core/services/building.service';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss'],
  providers: [ConfirmationService]
})

export class BuildingFormComponent implements OnInit{
  
  private _building: Building;
  
  public buildingForm: FormGroup;

  public modeForm: "create" | "edit";

  constructor(
    private fb: FormBuilder,
     private readonly buildingService: BuildingService, 
     public ref: DynamicDialogRef, 
     public config: DynamicDialogConfig,
     private confirmationService: ConfirmationService,
     private translateService: TranslateService) {}
  
  ngOnInit(): void {

    this.initForm();
  }


  private async initForm(): Promise<void>{
    this.buildingForm = this.fb.group({
      id: [null],
      buildingName: [''],
      city: ['', Validators.required],
      number: ['', Validators.required],
      room: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      main: [false, Validators.required]
    });

    if(this.config.data){
      this.modeForm = "edit";
      await this.buildingService.getBuildingById(this.config.data).toPromise().then((building: Building) => {
        this._building = building;
        this.updateForm();
      });
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
    if(this.buildingForm.valid){
      this.translateService.get("saveMessage").subscribe(translation => {
        this.confirmationService.confirm({
          message: translation,
          key: 'saveDialog',
          accept: () => {
            this._building = this.buildingForm.value;
            this.ref.close(this._building);
          }
        }); 
      });
    }
  }

  private updateForm(): void {
    this.buildingForm.patchValue(this._building);
  }
}
