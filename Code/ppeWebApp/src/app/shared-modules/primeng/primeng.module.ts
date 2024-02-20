import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChartModule } from 'primeng/chart';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PaginatorModule } from 'primeng/paginator';
import { TranslateModule } from '@ngx-translate/core';
//import comfirmation service in the corresponding view component


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    TableModule,
    MultiSelectModule,
    ToolbarModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    InputNumberModule,
    DynamicDialogModule,
    SidebarModule,
    ConfirmDialogModule,
    SelectButtonModule, 
    ChartModule,
    VirtualScrollerModule,
    ToggleButtonModule,
    SlideMenuModule,
    PaginatorModule,
    TranslateModule
  ]
})
export class PrimengModule { }
