import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//models
import { Building } from 'src/app/core/models/datamodels/Building';
import { Contract } from 'src/app/core/models/datamodels/Contract';
import { ContractType } from 'src/app/core/models/datamodels/ContractType';
import { Customer } from 'src/app/core/models/datamodels/Customer';
import { EnergyType } from 'src/app/core/models/datamodels/EnergyType';

//components
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//services
import { BuildingService } from 'src/app/core/services/building.service';
import { ContractService } from 'src/app/core/services/contract.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { LocalService } from 'src/app/core/services/local.service';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
  providers: [ConfirmationService]
})

export class ContractFormComponent implements OnInit {
  
  //current contract
  private _contract: Contract;

  private _customer: any;

  private _newContract:Contract;

  public selectedMinDate: Date;
  public selectedMaxDate: Date;

  //Form
  public contractForm: FormGroup;
  public customerForm: FormGroup;
  public modeForm: "create" | "edit";

  //dropdown
  public energies: EnergyType[] = [];
  public selectedErnegies: EnergyType[];

  public contractTypes: ContractType[];
  public selectedContractType: ContractType;

  //Dropdown
  public buildings: Building[];
  public selectedEnergy: Building;

  //timer
  public timer: any;

  constructor(
    private readonly contractService: ContractService, 
    private readonly customerService: CustomerService, 
    public fb: FormBuilder, public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig, 
    private translateService: TranslateService,
    private confirmationService: ConfirmationService,
    private buildingService: BuildingService,
    private readonly localStorage: LocalService) {}

  async ngOnInit() {
    this.initForm();

    await this.contractService.getAllContractTypes().toPromise().then((contractTypes: ContractType[]) => {
      this.contractTypes = contractTypes;
    });

    await this.contractService.getEnergyTypeByProviderId(this.localStorage.getData('id')).toPromise().then((energyTypes: EnergyType[]) => {
      this.energies = energyTypes;
      for (let index = 0; index < this.energies.length; index++) {
        this.translateService.get(this.energies[index].value).subscribe(translation => {
          this.energies[index].value = translation;
        })
      }
    });

    if(this.modeForm == "edit"){
      await this.loadCustomer(this._contract.customerId);
    }
    
  }

  private async initForm() {
    this.customerForm = this.fb.group({
      id: [null],
      name: [''],
      surname: [''],
      building: [null, Validators.required]
    });

    this.contractForm = this.fb.group({
      id: [null],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      contractType: [null, Validators.required],
    });  
    
    if(this.config.data){
      this.modeForm = "edit";
      this._contract = this.config.data;
      await this.loadCustomerBuilding(this._contract.customerId);
      this.updateContractForm();
    }else{
      this.modeForm = "create";
    }
    
  }

  public async loadCustomerBuilding(customerId: string){
    await this.buildingService.getBuildingByCustomerId(customerId, 0, 50).toPromise().then((buildings: Building[]) => {
      this.buildings = buildings;
      this.buildings.forEach(element =>{
        element.fullAdress = (element.buildingName? "" : element.buildingName) + `${element.street} ${element.number}, ${element.zipCode} ${element.city}` 
      })
    });
  }

  public async loadCustomer(customerId:string){
    await this.customerService.getCustomerById(customerId).toPromise().then((customer: Customer) => {
      this._customer = customer;
      this.customerForm.patchValue(this._customer);
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
          this._contract = this.contractForm.value;
          this._customer = this.customerForm.value;
          this._newContract = new Contract(
            this._contract.id, 
            this._contract.startDate, 
            this._contract.endDate, 
            this.localStorage.getData("id"), 
            this._contract.contractType, 
            this._customer.building.id, 
            this._customer.id
            );
          this.ref.close(this._newContract);
        }
      });  
    });
  }

  private updateContractForm(): void {
    this.contractForm.patchValue(this._contract);
    if(this.modeForm === "edit"){
      this.buildings.forEach(element => {
        if(element.id == this._contract.buildingId){
          this.customerForm.get("building").patchValue(element);
        }
      });
      
    }
  }

  public isReadOnly():boolean{
    return this.modeForm == "edit";
  }

  public onSearch(): void{
    this.loadCustomerBuilding(this.customerForm.get("id").value);
    this.loadCustomer(this.customerForm.get("id").value);
  }

  public onClean(): void{
    this.customerForm.get("id").patchValue(null);
    this.customerForm.get("name").patchValue('');
    this.customerForm.get("surname").patchValue('');
    this.customerForm.get("building").patchValue(null);
  }
}
