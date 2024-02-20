import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//models
import { Customer } from 'src/app/core/models/datamodels/Customer';

//components
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

//services
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [ConfirmationService]
})

export class CustomerFormComponent implements OnInit {

  private _customer: Customer;

  public customerForm: FormGroup;

  public modeForm: "create" | "edit";

  constructor(
    private fb: FormBuilder, 
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private translateService: TranslateService) { }


  ngOnInit(): void {
    this.initForm();

    //display in console values when changed 
    //this.customerForm.valueChanges.subscribe(console.log);
  }

  private initForm(): void {
    this.customerForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: [''],
      email: ['', Validators.required],
      language:  [1, Validators.required]
    });

    if(this.config.data){
      this.modeForm = "edit";
      this._customer = this.config.data;  
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
          this._customer = this.customerForm.value;
          this._customer.phoneNumber = "0"+this.customerForm.value.phoneNumber;
          this.ref.close(this._customer);
        }
      });  
    });
  }

  private updateForm(): void {
    this.customerForm.patchValue(this._customer);
  }
}
