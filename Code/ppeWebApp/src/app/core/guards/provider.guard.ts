import {Router } from "@angular/router";
import { LocalService } from "../services/local.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class ProviderGuard {

    constructor(private router: Router, private localStorage: LocalService) {}
  
    canActivate(): boolean {
      if (JSON.parse(this.localStorage.getData('role'))[0] == "ADMIN") {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }