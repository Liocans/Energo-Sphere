import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models

//components
import { PrimeIcons } from 'primeng/api';

//services
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  public menuItems: any[];

  public selectedLink: string;

  constructor(private readonly router: Router,  private localStorage:LocalService){}

  async ngOnInit(): Promise<void>{
    const roles = await JSON.parse(this.localStorage.getData('roles'));
    
    if(roles.includes("ADMIN")){
      this.menuItems = [
        {link: 'contracts', label: 'contracts', icon: PrimeIcons.FILE},
        {link: 'customers', label: 'customers', icon: PrimeIcons.USERS},
      ];
    }else{
      this.menuItems = [
        {link: 'contracts', label: 'contracts', icon: PrimeIcons.FILE},
        {link: 'wallets', label: 'wallets', icon: PrimeIcons.WALLET},
      ];
    }
  };

  public onLinkClick(link: string): void{  
    this.selectedLink = link; 
    this.router.navigate(['/manager/', link]);
  }
}
