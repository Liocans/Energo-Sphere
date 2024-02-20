import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { CustomerPassword } from 'src/app/core/models/datamodels/CustomerPassword';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss'],
  providers: [ConfirmationService]
})

export class ResetFormComponent implements OnInit{
  
  public resetForm: FormGroup;

  private _customer: CustomerPassword;

  constructor(    
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private translateService: TranslateService){}
  
  ngOnInit(): void {
    this.initForm();
  }

  private initForm() : void{
    this.resetForm = this.fb.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
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
          this._customer = this.resetForm.value;
          this.ref.close(this._customer);
        }
      });
    });
  }
}
