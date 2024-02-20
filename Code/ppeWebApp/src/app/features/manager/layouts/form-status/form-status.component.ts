import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})

export class FormStatusComponent {
  //data input
  @Input() validity: boolean;
}
