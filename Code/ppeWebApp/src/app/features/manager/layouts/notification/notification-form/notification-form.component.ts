import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { Notification } from 'src/app/core/models/datamodels/Notification';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { LocalService } from 'src/app/core/services/local.service';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.scss'],
  providers: [ConfirmationService]
})

export class NotificationFormComponent implements OnInit{

  public notificationForm: FormGroup;

  private _notification : Notification;

  public roles : string[];

  constructor(
     private fb: FormBuilder,
     public ref: DynamicDialogRef, 
     public config: DynamicDialogConfig,
     private confirmationService: ConfirmationService,
     private localStorage : LocalService,
     private translateService: TranslateService
     ){}


  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem("roles"));
    this.initForm();
  }


    private initForm(): void{
      this.notificationForm = this.fb.group({
        id: [null],
        customerId: [this.isAdmin() ? '' : this.localStorage.getData('id'), Validators.required],
        providerId: [this.isAdmin() ? this.localStorage.getData('id') : '', Validators.required],
        message: ['', Validators.required],
        accept: [false],
        read: [false],
        new: this.isAdmin() ? [true] : [false]
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
      this.translateService.get("saveMessage").subscribe(translation =>{
        this.confirmationService.confirm({
          message: translation,
          key: 'saveDialog',
          accept: () => {
            this._notification = this.notificationForm.value;
            this.ref.close(this._notification);
          }
        });  
      });
    }

    public isAdmin(): boolean{
      return this.roles.includes("ADMIN");
    }
}
