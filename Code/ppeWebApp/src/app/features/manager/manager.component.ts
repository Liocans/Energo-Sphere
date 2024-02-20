import { Component, OnInit } from '@angular/core';

//models

//components

//services
import { RouteHistoryService } from 'src/app/core/directives/route-history.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [DialogService, RouteHistoryService] //dynamic dialog
})
export class ManagerComponent implements OnInit {

  constructor(public dialogService: DialogService, routeHistory: RouteHistoryService){}
  
  ngOnInit(): void {
  }

}
