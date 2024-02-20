import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStatusComponent } from './form-status.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FormStatusComponent],
  exports: [FormStatusComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
})

export class FormStatusModule { 
}
