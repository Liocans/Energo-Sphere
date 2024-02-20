import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { PreviousButtonDirective } from './core/directives/previousButtonDirective';
import { RouteHistoryService } from './core/directives/route-history.service';
import { httpInterceptorProviders } from './core/services/httpInterceptor/http.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { ManagerGuard } from './core/guards/manager.guard';
import { ProviderGuard } from './core/guards/provider.guard';
import { CustomerGuard } from './core/guards/customer.guard';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    PreviousButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    RouteHistoryService,
    httpInterceptorProviders, 
    AuthGuard,
    ManagerGuard,
    CustomerGuard,
    ProviderGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}