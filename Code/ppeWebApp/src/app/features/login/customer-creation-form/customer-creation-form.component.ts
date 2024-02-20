import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { CustomerCreator } from 'src/app/core/models/datamodels/CustomerCreator';
import { Language } from 'src/app/core/models/datamodels/Language';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { LanguageService } from 'src/app/core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-customer-creation-form',
  templateUrl: './customer-creation-form.component.html',
  styleUrls: ['./customer-creation-form.component.scss'],
  providers: [ConfirmationService]
})

export class CustomerCreationFormComponent implements OnInit {

  public customerForm: FormGroup;

  private _customer: CustomerCreator;

  public languages: Language[];

  constructor(    
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private languageService: LanguageService,
    private translateService: TranslateService){}
  
  async ngOnInit() {
    this.initForm();

    await this.languageService.getAllLanguages().toPromise().then((languages: Language[]) => {
      this.languages = languages;
    });
  }

  private initForm(): void {
    this.customerForm = this.fb.group({
      id: [null],
      name: [null, Validators.required], 
      surname:  [null, Validators.required], 
      phoneNumber:  [null, Validators.required], 
      email:  [null, Validators.required],  
      language:  [null, Validators.required], 
      password:  [null, Validators.required], 
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
          this._customer = this.customerForm.value;
          this._customer.language = this.customerForm.value.language.id;
          this.ref.close(this._customer);
        }
      });
    });
  }
}
