import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import { Customer } from 'src/app/core/models/datamodels/Customer';
import { DynamicColumn } from 'src/app/core/models/utility/DynamicColumn';
import { IFormable } from 'src/app/core/models/utility/IFormable';
import { IRefreashable } from 'src/app/core/models/utility/IRefreshable';

//components
import { CustomerFormComponent } from './customer-form/customer-form.component';

//services
import { LocalService } from 'src/app/core/services/local.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { DialogService } from 'primeng/dynamicdialog';
import { promise } from 'protractor';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, IRefreashable, IFormable {
  
  public customers: Customer[];

  public customersCounter: number;

  public cols: DynamicColumn[];

  public selectedCustomer: Customer;

  public formHeader: string;

  public paginationParams: PaginationParams;

  public isLoading: boolean = false; 

  constructor(
    private readonly router: Router, 
    private readonly customerService: CustomerService, 
    public dialogService: DialogService, 
    private translateService: TranslateService,
    private localStorage: LocalService) {}
  
  ngOnInit(): void {
    this.cols = [
      {field: 'name', header: 'name'},
      {field: 'surname', header: 'surname'},
      {field: 'phoneNumber', header: 'phonenumber'},
      {field: 'email', header: 'email'},
    ];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.refreshData();
  }

  public createFormDialog(): void {
    this.translateService.get("customerform").subscribe(translation => {
      const ref = this.dialogService.open(CustomerFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
      ref.onClose.subscribe((customer: Customer) => {
        if(customer){
          this.customerService.createCustomer(customer, "Customer").subscribe(() => {
            this.refreshData();
          });        
        } 
      });
    });
  }

  public editFormDialog(data: any): void {
    this.translateService.get("customerform").subscribe(translation => {
      const ref = this.dialogService.open(CustomerFormComponent,
        {
          header: translation,
          data: data,
          draggable: true,
          resizable: true,
          maximizable: true
        });
        ref.onClose.subscribe((customer: Customer) => {
          if(customer){
            this.customerService.updateCustomer(customer).subscribe(() =>{
              this.refreshData();
            });
          }
        });
    });
  }

  public onCustomerSelected(customer:Customer): void{
    this.selectedCustomer = customer;
  }

  public deleteCustomer(id: any): void{
    this.customerService.deleteCustomerById(id).subscribe(() =>{      
      this.refreshData();
    });
  }

  public onShowBuildingsClick(): void{
    this.router.navigateByUrl(`/manager/customer/${this.selectedCustomer.id}/buildings`);
  }

  public updatePaginationParams(params: PaginationParams): void{
    this.paginationParams = params;
    this.refreshData();
  }

  public async refreshData():Promise<void>{
    this.isLoading = true;
    await this.customerService.countCustomerByProviderId(this.localStorage.getData('id')).toPromise().then((customersCounter: number) =>{
      this.customersCounter = customersCounter;
    });
    await this.customerService.getCustomersByProviderId(
      this.localStorage.getData('id'), 
      this.paginationParams.first, 
      this.paginationParams.rowsNumber).toPromise().then((customers: Customer[]) => {
        this.customers = customers;
        this.isLoading = false;
    });
  }

}
