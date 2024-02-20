import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { DatePipe } from '@angular/common';

//models
import { PaginationParams } from 'src/app/core/models/utility/PaginationParams';
import {Notification} from 'src/app/core/models/datamodels/Notification'

//components
import { NotificationFormComponent } from './notification-form/notification-form.component';

//services
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';
import { DialogService } from 'primeng/dynamicdialog';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [DatePipe]
})

export class NotificationComponent implements OnInit{
  public display:boolean = false;
  public selectedOption: any;
  public roles : string[];
  public notifOptions: any[];
  
  private waiting : any = {
    color: "notification--waiting",
    icon: "pi-clock"
  }

  private reject : any = {
    color: "notification--alert",
    icon:"pi-times"
  }

  private accept : any = {
    color:"notification--accept", 
    icon:"pi-check"
  }

  private message : any = {
    color: "",
    icon: "pi-bell"
  }

  private read : any = {

    color :"notification--read",
    icon: "pi-eye"
  }

  public notifications : any[] = [];

  public notificationsCounter: number

  private intervalId : any;
  
  public paginationParams: PaginationParams;

  constructor(
    private notificationService : NotificationService, 
    private translateService: TranslateService, 
    private changeDetectorRef: ChangeDetectorRef,
    public dialogService: DialogService,
    private localStorage : LocalService,
    private datePipe: DatePipe) {}


  ngOnInit(): void {
    this.notifOptions = [
      {
        icon : "pi-inbox",
        code: 'ALL',
        isNew: null,
        isRead: null,
        isAccept: null,
        tooltip:"allNotification"
      },
      {
        icon : "pi-clock",
        code: 'PEN',
        isNew: false,
        isRead: false,
        isAccept: false,
        tooltip:"pendingNotification"
      },
      {
        icon:"pi-eye",
        code: 'READ',
        isNew: false,
        isRead: true,
        isAccept: false,
        tooltip:"readNotification"
      },
      {
        icon : "pi-check",
        code: 'ACC',
        isNew: true,
        isRead: true,
        isAccept: true,
        tooltip:"approveNotification"
      },
      {
        icon : "pi-times",
        code : 'REJ',
        isNew: true,
        isRead: true,
        isAccept: false,
        tooltip:"rejectNotification"
      },
      {
        icon : "pi-bell",
        code : 'MES',
        isNew: true,
        isRead: false,
        isAccept: false,
        tooltip:"infoNotification"
      }
    ]
    
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    }
    
    this.selectedOption = this.notifOptions[0];
    this.roles = JSON.parse(this.localStorage.getData("roles"));
    this.intervalId = setInterval(() => {this.refreshData();}, 60000);
    this.refreshData();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  public modifyObjects(notifications:Notification[]): any[]{
    var tempNotifications : any[] = [];
    for (let index = 0; index < notifications.length; index++) {
      const notification : any = notifications[index];

      if(!notifications[index].accept && !notifications[index].read && !notifications[index].new){
        notification.color = this.waiting.color;
        notification.icon = this.waiting.icon;
        notification.code = "PEN";
      }

      if(!notifications[index].accept && !notifications[index].read && notifications[index].new){
        notification.color = this.message.color;
        notification.icon = this.message.icon;
        notification.code = "MES";
      }

      if(!notifications[index].accept && notifications[index].read && notifications[index].new){
        notification.color = this.reject.color;
        notification.icon = this.reject.icon;
        notification.code = "REJ";
      }

      if(notifications[index].accept && notifications[index].read && notifications[index].new){
        notification.color = this.accept.color;
        notification.icon = this.accept.icon;
        notification.code = "ACC"
      }

      if(!notifications[index].accept && notifications[index].read && !notifications[index].new){
        notification.color = this.read.color;
        notification.icon = this.read.icon;
        notification.code = "READ"
      }
      tempNotifications.push(notification);
    }
    return tempNotifications;
  }

  public paginate(event: any): void {
    this.paginationParams = {
      first: event.first,
      rowsNumber: event.rows
    }
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }

  public toggleNotification(){
    this.display = !this.display;
  }

  public updateNotifications(option:any){
    this.selectedOption = option;
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }

  public refreshData(){
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }

  public async getNotification(): Promise<void>{
    if(this.isAdmin()){
      if(this.selectedOption.code == "ALL"){
        await this.notificationService.countNotificationsByProviderId(this.localStorage.getData("id")).toPromise().then((cnt: number) =>{
          this.notificationsCounter = cnt;
        });
        await this.notificationService.getNotificationsByProviderId(this.localStorage.getData("id"), this.paginationParams.first, this.paginationParams.rowsNumber).toPromise().then((notifications : Notification[]) => {
          this.notifications = this.modifyObjects(notifications);
        });
      }else{
        await this.notificationService.countSpecificNotificationsByProviderId(this.localStorage.getData("id"), this.selectedOption.isAccept, this.selectedOption.isRead, this.selectedOption.isNew).toPromise().then((cnt: number) => {
          this.notificationsCounter = cnt;
        });
        await this.notificationService.getSpecificNotificationsByProviderId(this.localStorage.getData("id"), this.selectedOption.isAccept, this.selectedOption.isRead, this.selectedOption.isNew, this.paginationParams.first, this.paginationParams.rowsNumber).toPromise().then((notifications : Notification[]) => {
          this.notifications = this.modifyObjects(notifications);
        });
      }
        
    }else{
      if(this.selectedOption.code == "ALL"){
        await this.notificationService.countNotificationsByCustomerId(this.localStorage.getData("id")).toPromise().then((cnt: number) =>{
          this.notificationsCounter = cnt;
        });
        await this.notificationService.getNotificationsByCustomerId(this.localStorage.getData("id"), this.paginationParams.first, this.paginationParams.rowsNumber).toPromise().then((notifications : Notification[]) => {
          this.notifications = this.modifyObjects(notifications);
        });
      }else{
        await this.notificationService.countSpecificNotificationsByCustomerId(this.localStorage.getData("id"), this.selectedOption.isAccept, this.selectedOption.isRead, this.selectedOption.isNew).toPromise().then((cnt: number) => {
          this.notificationsCounter = cnt;
        });
        await this.notificationService.getSpecificNotificationsByCustomerId(this.localStorage.getData("id"), this.selectedOption.isAccept, this.selectedOption.isRead, this.selectedOption.isNew, this.paginationParams.first, this.paginationParams.rowsNumber).toPromise().then((notifications : Notification[]) => {
          this.notifications = this.modifyObjects(notifications);
        });
      }
    }
  }

  public isAdmin(): boolean{
    return this.roles.includes("ADMIN");
  }

  public createFormDialog(): void {
    this.translateService.get("notificationForm").subscribe(translation => {
      const ref = this.dialogService.open(NotificationFormComponent,
        {
          header: translation,
          draggable: true,
          resizable: true,
          maximizable: true
        });
  
        ref.onClose.subscribe((notification: Notification) => {
          if(notification){
            this.notificationService.createNotification(notification).subscribe(() => {
              this.updateNotifications(this.selectedOption);
            });
          }
        });
    });
  }

  public formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy hh:mm a');
  }

  public updateNotification(notification:Notification): void{
    this.notificationService.updateNotification(notification).subscribe(()=>{
      this.refreshData();
    })
  }

  public markNotificationAsRead(notification:any): void{
    const newNotification:Notification = this.createNotification(notification);
    newNotification.read = true;
    this.updateNotification(newNotification);
    
  }

  public acceptNotification(notification:any): void{
    const newNotification:Notification = this.createNotification(notification);
    newNotification.accept = true;
    newNotification.new = true;
    this.updateNotification(newNotification);
  }

  public rejectNotification(notification:any): void{
    const newNotification:Notification = this.createNotification(notification);
    newNotification.new = true;
    this.updateNotification(newNotification);
  }

  public createNotification(notification:any): Notification{
    const deepNotification = JSON.parse(JSON.stringify(notification))
    delete deepNotification.color;
    delete deepNotification.icon;
    delete deepNotification.code;
    return deepNotification;
  }

}
