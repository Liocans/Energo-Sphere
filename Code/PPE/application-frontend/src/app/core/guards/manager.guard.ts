import {Router } from "@angular/router";
import { LocalService } from "../services/local.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class ManagerGuard {

    constructor(private router: Router, private localStorage: LocalService) {}
  
    canActivate(): boolean {
      if (this.localStorage.getData('id') == null || this.localStorage.getData('id') == '') {
        return true;
      } else {
        this.router.navigate(['/manager'])
        return false;
      }
    }
  }