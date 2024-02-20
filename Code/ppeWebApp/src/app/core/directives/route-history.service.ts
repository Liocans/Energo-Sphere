import { Injectable, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService implements OnInit{

  private routeHistory: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart && event.url != this.routeHistory[this.routeHistory.length - 1 ]){
        this.routeHistory.push(event.url);
      }
      if(this.routeHistory.length == 0 && event instanceof NavigationEnd){
        this.routeHistory.push(event.url);
      }
    });
   }

  ngOnInit(): void {
    
  }

  public back(): void {
    this.routeHistory.pop();
    if (this.routeHistory.length > 0) {
      this.location.back();
    }else{
      this.router.navigateByUrl("/");
    }
  }

  /* debug
  public displayHistory(): void {
    console.log(this.routeHistory);
  }
  */
}
