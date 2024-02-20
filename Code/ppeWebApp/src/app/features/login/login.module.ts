import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { ResetFormComponent } from './reset-form/reset-form.component';
import { CustomerCreationFormComponent } from './customer-creation-form/customer-creation-form.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PrimengModule } from 'src/app/shared-modules/primeng/primeng.module';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';  
import { FormStatusModule } from '../manager/layouts/form-status/form-status.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ResetFormComponent,
    CustomerCreationFormComponent,
  ],
  imports: [
    LoginRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    LanguageSelectorModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    PrimengModule,
    DialogModule,
    CommonModule,
    FormStatusModule,
    TranslateModule,
  ],
})
export class LoginModule { }
