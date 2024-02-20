import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/datamodels/Notification';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  private readonly baseUrl: string = environment.baseUrl + environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

  public createNotification(notification : Notification) : Observable<string> {
    return this.httpClient.post(this.baseUrl+`/notification/createNotification`, notification, {responseType: 'text'});
  }

  public getNotificationsByCustomerId(customerId : string, offset? : number, limit? : number) : Observable<Notification[]>{
    if(offset === undefined || limit === undefined){
      return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getNotificationsByCustomerId?customerId=${customerId}`);
    }
    return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getNotificationsByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }

  public getSpecificNotificationsByCustomerId(customerId: string, isAccept : boolean, isRead : boolean, isNew : boolean, offset? : number, limit? : number):Observable<Notification[]>{
    if(offset === undefined || limit === undefined){
      return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
    }   
    return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}&=offset=${offset}&limit=${limit}`);
  }

  public countSpecificNotificationsByCustomerId(customerId: string, isAccept : boolean, isRead : boolean, isNew : boolean): Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/notification/countSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
  }

  public countNotificationsByCustomerId(customerId : string){
    return this.httpClient.get<number>(this.baseUrl+`/notification/countNotificationsByCustomerId?customerId=${customerId}`);
  }

  public getNumberOfNewNotificationsByCustomerId(customerId : string) : Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/notification/getNumberOfNewNotificationsByCustomerId?customerId=${customerId}`);
  }

  public getNotificationsByProviderId(providerId : string, offset? : number, limit? : number) : Observable<Notification[]> {
    if(offset === undefined || limit === undefined){
      return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getNotificationsByProviderId?providerId=${providerId}`);
    }
    return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getNotificationsByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }

  public getSpecificNotificationsByProviderId(providerId: string, isAccept : boolean, isRead : boolean, isNew : boolean, offset? : number, limit? : number):Observable<Notification[]>{
    if(offset === undefined || limit === undefined){
      return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`)
    }
    return this.httpClient.get<Notification[]>(this.baseUrl+`/notification/getSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}&offset=${offset}&limit=${limit}`);
  }

  public countSpecificNotificationsByProviderId(providerId: string, isAccept : boolean, isRead : boolean, isNew : boolean):Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/notification/countSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
  }

  public countNotificationsByProviderId(providerId : string){
      return this.httpClient.get<number>(this.baseUrl+`/notification/countNotificationsByProviderId?providerId=${providerId}`);
  }

  public getNumberOfNewNotificationsByProviderId(providerId : string) : Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+`/notification/getNumberOfNewNotificationsByProviderId?providerId=${providerId}`);
  }

  public updateNotification(notification : Notification) : Observable<string> {
    return this.httpClient.put<string>(this.baseUrl+`/notification/updateNotification`, notification);
  }

  public deleteNotificationById(id : string) : Observable<string>{
    return this.httpClient.delete<string>(this.baseUrl+`/notification/deleteNotificationById?id=${id}`);
  }
}
