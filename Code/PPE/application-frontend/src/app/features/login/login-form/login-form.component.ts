import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

//models
import { User } from 'src/app/core/models/utility/User';
import { CustomerCreator } from 'src/app/core/models/datamodels/CustomerCreator';
import { CustomerPassword } from 'src/app/core/models/datamodels/CustomerPassword';
import { Customer } from 'src/app/core/models/datamodels/Customer';

//components
import { CustomerCreationFormComponent } from '../customer-creation-form/customer-creation-form.component';
import { ResetFormComponent } from '../reset-form/reset-form.component';

//services
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LocalService } from 'src/app/core/services/local.service';
import { DialogService} from 'primeng/dynamicdialog';
import { CustomerService } from 'src/app/core/services/customer.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [DialogService],
})

export class LoginFormComponent implements OnInit {

  public title: string;

  public usernameInput: string;

  public passwdInput: string;

  public labelPasswdInput: string;

  public labelIdInput:string;

  public loginError: boolean;

  public isLoading: boolean;
  
  constructor(
    private readonly router: Router, 
    private authenticationService: AuthenticationService, 
    private localStorage:LocalService, 
    private translateService: TranslateService,
    public dialogService: DialogService,
    public customerService: CustomerService){}

  ngOnInit(): void {
    this.checkRoute();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == "Enter"){
      this.onLoginClick();
    }
  }

  private checkRoute(): void{
    this.title = "welcome";
    this.labelIdInput = "username";
    this.labelPasswdInput = "password";
    this.loginError = false;
    this.isLoading = false;
  }

  public onLoginClick(): void{
    this.authenticationService.signin(this.usernameInput, this.passwdInput).subscribe((user: User)=>{
      if(user != null){
        this.isLoading = true;
        this.localStorage.saveData('id',  user.id);
        this.localStorage.saveData('language',  user.language.toLowerCase());
        this.localStorage.saveData('roles',  JSON.stringify(user.roles));
        this.localStorage.saveData('username',  user.username);
        this.localStorage.saveData('name', user.name);
        this.router.navigate(["/manager"]);
      }else{
        this.loginError = true;
        setTimeout(() => {this.loginError = false;}, 6500);
      }
    });
  }

  public createFormDialog(): void {
    this.translateService.get("customerform").subscribe(translation => {
      const ref = this.dialogService.open(CustomerCreationFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
      
      ref.onClose.subscribe((customerCreator: CustomerCreator) => {
        if(customerCreator){
          let customer:Customer = {
            id: null,
            name: customerCreator.name,  
            surname: customerCreator.surname, 
            phoneNumber : customerCreator.phoneNumber,
            email: customerCreator.email,  
            language: customerCreator.language
          };
          this.customerService.createCustomer(customer, customerCreator.password).subscribe(() => {});        
        } 
      });
    });
  }

  resetFormDialog(): void {
    this.translateService.get("resetform").subscribe(translation =>{
      const ref = this.dialogService.open(ResetFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
        ref.onClose.subscribe((customer: CustomerPassword) => {
          if(customer){
            this.customerService.resetCustomerPassword(customer.email, customer.password).subscribe(() => {});        
          } 
        });
    });
  }
}
