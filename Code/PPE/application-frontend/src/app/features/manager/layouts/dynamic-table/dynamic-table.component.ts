import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

//models
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';

//services
import { ConfirmationService } from 'primeng/api';
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  providers: [ConfirmationService]
})
export class DynamicTableComponent{

  //data input
  @Input() collection: any[];
  @Input() totalRecords: number;
  @Input() cols: DynamicColumn[];

  //emitter
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  

  //selection
  public selectedItems: any[] = [];
  public selectedItem: any;

  //pagination
  public rowsNumber: number = 5;
  public rowsPerPage: number[] = [5, 10, 15];

  
  @Output() onPageChange: EventEmitter<PaginationParams> = new EventEmitter();

  //table params
  @Input() public isEditable: boolean = false;
  @Input() public isDeletable: boolean = false;
  @Input() public isLoading: boolean = false;
  @Input() public isPaginable: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private translateService: TranslateService){}

  public loadCollectionLazy(event: LazyLoadEvent): void {
    const paginationParams: PaginationParams = {
      first: event.first || 0,
      rowsNumber: event.rows || 5
    };
    this.onPageChange.emit(paginationParams);
  }

  public onEditClick(rowData: any): void {
    this.onEdit.emit(rowData);
  }

  public onDeleteClick(id: any): void{
    this.translateService.get("deleteMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'deleteDialog',
        accept: () => {
            this.onDelete.emit(id);
        }
      }); 
    });
  }

  public onSelectionSend(): void {
    this.onSelect.emit(this.selectedItem);
  }

  /*
  public debug(data: any, field: string) {
    console.log(data);
    console.log("field: " + field);
  }
  */

  public parseData(data: any, field: string): string {
    if(typeof data[field] == 'boolean') this.parseBoolean(data, field);
    if(field.includes('.')) return field.split('.').reduce((acc: any, obj: any) => acc[obj], data);
    if(typeof data[field] == 'string' && (data[field].match(/ - /g) || []).length === 1){
      const parts = data[field].split(" - ");
      var element = "";
      this.translateService.get(parts[0]).subscribe(translation => {
        element = translation + " - " + parts[1]
      });
      return element;
    }
    else return data[field];
  }

  public parseBoolean(data: any, booleanField: string): any {
    return data[booleanField] ? data[booleanField] = '✔️' : data[booleanField] = '❌'
  }
}
