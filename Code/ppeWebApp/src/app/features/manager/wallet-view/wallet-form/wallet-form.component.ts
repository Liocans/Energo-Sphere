import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { Building } from 'src/app/core/models/datamodels/Building';
import { WalletCreator } from 'src/app/core/models/datamodels/WalletCreator';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { BuildingService } from 'src/app/core/services/building.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-wallet-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.scss'],
  providers:[ConfirmationService]
})

export class WalletFormComponent {

  //Current meter
  private _customerId: string;

  private walletCreator: WalletCreator;
  
  //Form
  public walletForm: FormGroup;

  //Dropdown
  public buildings: Building[];
  public selectedEnergy: Building;

  constructor(
    private readonly buildingService: BuildingService,
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    private translateService: TranslateService,
    private confirmationService: ConfirmationService) {}
  
  async ngOnInit() {

    this.initForm();

    this.buildingService.getBuildingByCustomerId(this._customerId, 0, 50).subscribe((buildings: Building[]) => {
      this.buildings = buildings;
      this.buildings.forEach(element =>{
        element.fullAdress = (element.buildingName? "" : element.buildingName) + `${element.street} ${element.number}, ${element.zipCode} ${element.city}` 
      })
    });
  }

  private initForm(): void{
    
    this.walletForm = this.fb.group({
      customer:[null, Validators.required],
      building: [null, Validators.required],
    });
    
    this._customerId = this.config.data;
    this.updateForm();
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
          this.walletCreator = this.walletForm.value;
          this.ref.close(this.walletCreator);
        }
      });  
    });
  }

  private updateForm(): void {
    this.walletForm.get("customer").patchValue(this._customerId);
  }
}
