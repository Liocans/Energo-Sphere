import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { Meter } from 'src/app/core/models/datamodels/Meter';
import { Wallet } from 'src/app/core/models/datamodels/Wallet';
import { WalletMeter } from 'src/app/core/models/datamodels/WalletMeter';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { MeterService } from 'src/app/core/services/meter.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-wallet-meter-form',
  templateUrl: './wallet-meter-form.component.html',
  styleUrls: ['./wallet-meter-form.component.scss'],
  providers:[ConfirmationService]
})

export class WalletMeterFormComponent {

  //Current meter
  private _wallet: Wallet;

  private walletMeter: WalletMeter;
  
  //Form
  public walletMeterForm: FormGroup;

  //Dropdown
  public meters: Meter[];
  public selectedMeter: Meter;

  constructor(
    private readonly meterService: MeterService,
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    private translateService: TranslateService,
    private confirmationService: ConfirmationService) {}
  
  async ngOnInit() {

    this.initForm();

    await this.meterService.getMetersByBuildingId(this.config.data.buildingId).toPromise().then((meters: Meter[]) => {
      this.meters = meters;
      this.meters.forEach(element =>{
        this.translateService.get(element.energyType.value).subscribe(translation => {
          element.fullName = element.id + " | "+ translation;
        });
      });
    });
  }

  private initForm(): void{
    
    this.walletMeterForm = this.fb.group({
      wallet: [null, Validators.required],
      meter: [null, Validators.required],
    });
    
    this._wallet = this.config.data;
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
          this.walletMeter = this.walletMeterForm.value;
          this.ref.close(this.walletMeter);
        }
      });  
    })
  }

  private updateForm(): void {
    this.walletMeterForm.get("wallet").patchValue(this._wallet.id);
  }
}
