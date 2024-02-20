import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//models

//components
import { NotificationComponent } from '../../notification/notification.component';

//services
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {

  @ViewChild(NotificationComponent) notification: NotificationComponent;

  public user: any = {
    id: '',
    username: '',
    role: '',
    name:''

  };

  constructor(
    private localStorage: LocalService, 
    private authenticationService: AuthenticationService, 
    private readonly router: Router){}

  async ngOnInit(): Promise<void> {
    this.user.id = await this.localStorage.getData('id');
    this.user.username = await this.localStorage.getData('username');
    this.user.role = await (JSON.parse(this.localStorage.getData('roles'))[0]).toLowerCase()
    this.user.name = await this.localStorage.getData('name');
  }

  public onSignOut(): void{
    this.authenticationService.signout().subscribe(async (msg)=>{
      this.localStorage.clearData();
      this.router.navigate(['/login']);
    });
  }

  public changeDisplay(): void{
    this.notification.toggleNotification();
  }
}
