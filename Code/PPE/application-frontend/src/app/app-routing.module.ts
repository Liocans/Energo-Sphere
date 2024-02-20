import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ManagerComponent } from './features/manager/manager.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ManagerGuard } from './core/guards/manager.guard';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./features/login/login.module').then((module) => module.LoginModule),
    canActivate:[ManagerGuard]
  },
  {
    path: 'manager', //manager route will have children routes for customer and provider 
    component: ManagerComponent,
    loadChildren: () => import('./features/manager/manager.module').then((module) => module.ManagerModule),
    canActivate :[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
