"use strict";
(self["webpackChunkppeWebApp"] = self["webpackChunkppeWebApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _features_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/login/login.component */ 7601);
/* harmony import */ var _features_manager_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/manager/manager.component */ 3765);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _core_guards_manager_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/manager.guard */ 3444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: 'login',
  component: _features_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_customer_service_ts-src_app_features_language-selector_language-207085"), __webpack_require__.e("src_app_features_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/login/login.module */ 8656)).then(module => module.LoginModule),
  canActivate: [_core_guards_manager_guard__WEBPACK_IMPORTED_MODULE_3__.ManagerGuard]
}, {
  path: 'manager',
  component: _features_manager_manager_component__WEBPACK_IMPORTED_MODULE_1__.ManagerComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_customer_service_ts-src_app_features_language-selector_language-207085"), __webpack_require__.e("src_app_features_manager_manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/manager/manager.module */ 7951)).then(module => module.ManagerModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 9007);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3854);
/* harmony import */ var _core_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);

//models
//components


//services







class AppComponent {
  constructor(titleService, localStorage, translateService) {
    this.titleService = titleService;
    this.localStorage = localStorage;
    this.translateService = translateService;
  }
  ngOnInit() {
    chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.titleService.setTitle("Energo Sphere");
    if (this.localStorage.getData('language') == null) {
      this.localStorage.saveData('language', 'en');
    }
    this.translateService.use(this.localStorage.getData('language'));
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  consts: [[1, "app-container"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
  styles: [".app-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(209, 209, 209);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFFQSxvQ0FBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvaW5kZXhcIiBhcyAqO1xyXG5cclxuLmFwcC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA5LCAyMDkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_directives_previousButtonDirective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/directives/previousButtonDirective */ 4040);
/* harmony import */ var _core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/directives/route-history.service */ 5220);
/* harmony import */ var _core_services_httpInterceptor_http_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/httpInterceptor/http.interceptor */ 1614);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _core_guards_manager_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/guards/manager.guard */ 3444);
/* harmony import */ var _core_guards_provider_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guards/provider.guard */ 9566);
/* harmony import */ var _core_guards_customer_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/guards/customer.guard */ 7913);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);

















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_3__.RouteHistoryService, _core_services_httpInterceptor_http_interceptor__WEBPACK_IMPORTED_MODULE_4__.httpInterceptorProviders, _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _core_guards_manager_guard__WEBPACK_IMPORTED_MODULE_6__.ManagerGuard, _core_guards_customer_guard__WEBPACK_IMPORTED_MODULE_8__.CustomerGuard, _core_guards_provider_guard__WEBPACK_IMPORTED_MODULE_7__.ProviderGuard],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _core_directives_previousButtonDirective__WEBPACK_IMPORTED_MODULE_2__.PreviousButtonDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule]
  });
})();

/***/ }),

/***/ 4040:
/*!************************************************************!*\
  !*** ./src/app/core/directives/previousButtonDirective.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviousButtonDirective": () => (/* binding */ PreviousButtonDirective)
/* harmony export */ });
/* harmony import */ var _route_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-history.service */ 5220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class PreviousButtonDirective {
  constructor(routeHistory) {
    this.routeHistory = routeHistory;
  }
  onClick() {
    this.routeHistory.back();
  }
}
PreviousButtonDirective.ɵfac = function PreviousButtonDirective_Factory(t) {
  return new (t || PreviousButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_route_history_service__WEBPACK_IMPORTED_MODULE_0__.RouteHistoryService));
};
PreviousButtonDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: PreviousButtonDirective,
  selectors: [["", "previousButton", ""]],
  hostBindings: function PreviousButtonDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PreviousButtonDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }
});

/***/ }),

/***/ 5220:
/*!**********************************************************!*\
  !*** ./src/app/core/directives/route-history.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteHistoryService": () => (/* binding */ RouteHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





class RouteHistoryService {
  constructor(router, location) {
    this.router = router;
    this.location = location;
    this.routeHistory = [];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart && event.url != this.routeHistory[this.routeHistory.length - 1]) {
        this.routeHistory.push(event.url);
      }
      if (this.routeHistory.length == 0 && event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        this.routeHistory.push(event.url);
      }
    });
  }
  ngOnInit() {}
  back() {
    this.routeHistory.pop();
    if (this.routeHistory.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
}
RouteHistoryService.ɵfac = function RouteHistoryService_Factory(t) {
  return new (t || RouteHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
};
RouteHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RouteHistoryService,
  factory: RouteHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class AuthGuard {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  canActivate() {
    if (this.localStorage.getData('id') != null && this.localStorage.getData('id') != '') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7913:
/*!***********************************************!*\
  !*** ./src/app/core/guards/customer.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerGuard": () => (/* binding */ CustomerGuard)
/* harmony export */ });
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class CustomerGuard {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  canActivate() {
    if (JSON.parse(this.localStorage.getData('role'))[0] == "USER") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
CustomerGuard.ɵfac = function CustomerGuard_Factory(t) {
  return new (t || CustomerGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
};
CustomerGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomerGuard,
  factory: CustomerGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3444:
/*!**********************************************!*\
  !*** ./src/app/core/guards/manager.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerGuard": () => (/* binding */ ManagerGuard)
/* harmony export */ });
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class ManagerGuard {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  canActivate() {
    if (this.localStorage.getData('id') == null || this.localStorage.getData('id') == '') {
      return true;
    } else {
      this.router.navigate(['/manager']);
      return false;
    }
  }
}
ManagerGuard.ɵfac = function ManagerGuard_Factory(t) {
  return new (t || ManagerGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
};
ManagerGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ManagerGuard,
  factory: ManagerGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9566:
/*!***********************************************!*\
  !*** ./src/app/core/guards/provider.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderGuard": () => (/* binding */ ProviderGuard)
/* harmony export */ });
/* harmony import */ var _services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





class ProviderGuard {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  canActivate() {
    if (JSON.parse(this.localStorage.getData('role'))[0] == "ADMIN") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
ProviderGuard.ɵfac = function ProviderGuard_Factory(t) {
  return new (t || ProviderGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
};
ProviderGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProviderGuard,
  factory: ProviderGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1745:
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class AuthenticationService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  signin(username, password) {
    return this.httpClient.post(this.baseUrl + `/auth/signin?username=${username}&password=${password}`, null);
  }
  signout() {
    return this.httpClient.post(this.baseUrl + "/auth/signout", null, {
      responseType: 'text'
    });
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1614:
/*!*******************************************************************!*\
  !*** ./src/app/core/services/httpInterceptor/http.interceptor.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpRequestInterceptor": () => (/* binding */ HttpRequestInterceptor),
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication.service */ 1745);
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local.service */ 8389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);










class HttpRequestInterceptor {
  constructor(authenticationService, router, localStorage) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.localStorage = localStorage;
  }
  intercept(req, next) {
    req = req.clone({
      withCredentials: true
    });
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {}, error => {
      if (error.status === 403) {
        this.authenticationService.signout().subscribe(msg => {
          this.localStorage.clearData();
          this.router.navigate(['/login']);
        });
      }
      if (error.status === 401) {
        this.authenticationService.signout().subscribe(msg => {
          this.localStorage.clearData();
          this.router.navigate(['/login']);
          this.throwError("There is a problem with the database, please contact the creators fo the app");
        });
      }
      if (error.status === 0) {
        this.localStorage.clearData();
        this.router.navigate(['/login']);
        this.throwError("The server seems to be offline, please contact the creators of the app");
      }
    }));
  }
  throwError(value) {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      throw new Error(value);
    }
  }
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) {
  return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService));
};
HttpRequestInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpRequestInterceptor,
  factory: HttpRequestInterceptor.ɵfac
});
const httpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true
}];

/***/ }),

/***/ 8389:
/*!************************************************!*\
  !*** ./src/app/core/services/local.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalService": () => (/* binding */ LocalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocalService {
  constructor() {}
  saveData(key, value) {
    localStorage.setItem(key, value);
  }
  getData(key) {
    return localStorage.getItem(key);
  }
  removeData(key) {
    localStorage.removeItem(key);
  }
  clearData() {
    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage.key(index);
      if (element == 'roles') {
        localStorage.setItem(element, JSON.stringify([]));
      } else {
        if (element != 'language') {
          localStorage.setItem(element, '');
        }
      }
    }
  }
}
LocalService.ɵfac = function LocalService_Factory(t) {
  return new (t || LocalService)();
};
LocalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalService,
  factory: LocalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1645:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class NotificationService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  createNotification(notification) {
    return this.httpClient.post(this.baseUrl + `/notification/createNotification`, notification, {
      responseType: 'text'
    });
  }
  getNotificationsByCustomerId(customerId, offset, limit) {
    if (offset === undefined || limit === undefined) {
      return this.httpClient.get(this.baseUrl + `/notification/getNotificationsByCustomerId?customerId=${customerId}`);
    }
    return this.httpClient.get(this.baseUrl + `/notification/getNotificationsByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }
  getSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew, offset, limit) {
    if (offset === undefined || limit === undefined) {
      return this.httpClient.get(this.baseUrl + `/notification/getSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
    }
    return this.httpClient.get(this.baseUrl + `/notification/getSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}&=offset=${offset}&limit=${limit}`);
  }
  countSpecificNotificationsByCustomerId(customerId, isAccept, isRead, isNew) {
    return this.httpClient.get(this.baseUrl + `/notification/countSpecificNotificationsByCustomerId?customerId=${customerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
  }
  countNotificationsByCustomerId(customerId) {
    return this.httpClient.get(this.baseUrl + `/notification/countNotificationsByCustomerId?customerId=${customerId}`);
  }
  getNumberOfNewNotificationsByCustomerId(customerId) {
    return this.httpClient.get(this.baseUrl + `/notification/getNumberOfNewNotificationsByCustomerId?customerId=${customerId}`);
  }
  getNotificationsByProviderId(providerId, offset, limit) {
    if (offset === undefined || limit === undefined) {
      return this.httpClient.get(this.baseUrl + `/notification/getNotificationsByProviderId?providerId=${providerId}`);
    }
    return this.httpClient.get(this.baseUrl + `/notification/getNotificationsByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }
  getSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew, offset, limit) {
    if (offset === undefined || limit === undefined) {
      return this.httpClient.get(this.baseUrl + `/notification/getSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
    }
    return this.httpClient.get(this.baseUrl + `/notification/getSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}&offset=${offset}&limit=${limit}`);
  }
  countSpecificNotificationsByProviderId(providerId, isAccept, isRead, isNew) {
    return this.httpClient.get(this.baseUrl + `/notification/countSpecificNotificationsByProviderId?providerId=${providerId}&isAccept=${isAccept}&isRead=${isRead}&isNew=${isNew}`);
  }
  countNotificationsByProviderId(providerId) {
    return this.httpClient.get(this.baseUrl + `/notification/countNotificationsByProviderId?providerId=${providerId}`);
  }
  getNumberOfNewNotificationsByProviderId(providerId) {
    return this.httpClient.get(this.baseUrl + `/notification/getNumberOfNewNotificationsByProviderId?providerId=${providerId}`);
  }
  updateNotification(notification) {
    return this.httpClient.put(this.baseUrl + `/notification/updateNotification`, notification);
  }
  deleteNotificationById(id) {
    return this.httpClient.delete(this.baseUrl + `/notification/deleteNotificationById?id=${id}`);
  }
}
NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2526:
/*!***************************************************************************!*\
  !*** ./src/app/features/language-selector/language-selector.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageSelectorComponent": () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
//services









function LanguageSelectorComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.selectedLanguage.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.selectedLanguage.name);
  }
}
function LanguageSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LanguageSelectorComponent_ng_template_1_div_0_Template, 4, 2, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedLanguage);
  }
}
function LanguageSelectorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const language_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", language_r3.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r3.name);
  }
}
class LanguageSelectorComponent {
  constructor(translate, localStorage) {
    this.translate = translate;
    this.localStorage = localStorage;
    this.languagesList = [{
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English'
    }, {
      imgUrl: '/assets/images/French.png',
      code: 'fr',
      name: 'Français'
    }];
  }
  ngOnInit() {
    const actualLanguage = this.localStorage.getData('language') == "en" ? this.languagesList[0] : this.languagesList[1];
    this.selectedLanguage = actualLanguage;
    this.changeLanguageByCode(actualLanguage.code);
  }
  changeLanguage(language) {
    this.localStorage.saveData('language', language.code);
    this.translate.use(language.code);
  }
  changeLanguageByCode(languageCode) {
    this.localStorage.saveData('language', languageCode);
    this.translate.use(languageCode);
  }
}
LanguageSelectorComponent.ɵfac = function LanguageSelectorComponent_Factory(t) {
  return new (t || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
};
LanguageSelectorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LanguageSelectorComponent,
  selectors: [["app-language-selector"]],
  decls: 3,
  vars: 3,
  consts: [["appendTo", "body", "optionLabel", "name", "placeholder", "Select a language", 1, "purple-dropdown", 3, "options", "ngModel", "showClear", "ngModelChange", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["class", "dropdown-container", 4, "ngIf"], [1, "dropdown-container"], [3, "src"]],
  template: function LanguageSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dropdown", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LanguageSelectorComponent_Template_p_dropdown_ngModelChange_0_listener($event) {
        return ctx.selectedLanguage = $event;
      })("onChange", function LanguageSelectorComponent_Template_p_dropdown_onChange_0_listener($event) {
        return ctx.changeLanguage($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LanguageSelectorComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LanguageSelectorComponent_ng_template_2_Template, 4, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.languagesList)("ngModel", ctx.selectedLanguage)("showClear", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate],
  styles: ["img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.fr[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n}\n\n.dropdown-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZ3VhZ2Utc2VsZWN0b3IvbGFuZ3VhZ2Utc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvaW5kZXhcIiBhcyAqO1xyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmZye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KVxyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IC41cmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7601:
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language-selector/language-selector.component */ 2526);



class LoginComponent {
  constructor() {}
  ngOnInit() {}
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 11,
  vars: 0,
  consts: [[1, "login-container"], [1, "upper-band"], [1, "brand-container"], ["src", "/assets/images/smol_logo.png", 1, "brand-logo"], [1, "brand-name"], [1, "options-container"], [1, "content-container"], [1, "footer"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Energo Sphere");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-language-selector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent],
  styles: ["section.login-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-flow: column;\n}\nsection.login-container[_ngcontent-%COMP%]   div.upper-band[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  background: radial-gradient(ellipse at top, #13405e 0%, #5e5382 100%);\n  flex: 0 1 auto;\n  box-shadow: 0px 0.6px 1.9px rgba(0, 0, 0, 0.045), 0px 1.3px 4.3px rgba(0, 0, 0, 0.07), 0px 2.4px 7.7px rgba(0, 0, 0, 0.089), 0px 4px 12.8px rgba(0, 0, 0, 0.106), 0px 6.6px 21.2px rgba(0, 0, 0, 0.121), 0px 11.6px 37px rgba(0, 0, 0, 0.135), 0px 25px 80px rgba(0, 0, 0, 0.15);\n}\nsection.login-container[_ngcontent-%COMP%]   div.upper-band[_ngcontent-%COMP%]   div.brand-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\nsection.login-container[_ngcontent-%COMP%]   div.upper-band[_ngcontent-%COMP%]   div.brand-container[_ngcontent-%COMP%]   img.brand-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  margin: 0.7rem 2rem;\n}\nsection.login-container[_ngcontent-%COMP%]   div.upper-band[_ngcontent-%COMP%]   div.brand-container[_ngcontent-%COMP%]   span.brand-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 25px;\n  letter-spacing: 2px;\n  word-spacing: 7px;\n  font-family: \"Didact Gothic\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\nsection.login-container[_ngcontent-%COMP%]   div.upper-band[_ngcontent-%COMP%]   div.options-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem 0 1rem;\n}\nsection.login-container[_ngcontent-%COMP%]   div.content-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nsection.login-container[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  background: radial-gradient(ellipse at bottom, #13405e 0%, #5e5382 100%);\n  flex: 0 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvX3B1cnBsZVBhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VDU0oscUVBQUE7RUROSSxjQUFBO0VBQ0EsZ1JBQ0k7QUFIWjtBQVlRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBVlo7QUFZWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQVZoQjtBQWFZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWmhCO0FBZ0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFkWjtBQW1CSTtFQUNJLGNBQUE7QUFqQlI7QUFxQkk7RUFDSSxjQUFBO0VDdENKLHdFQUFBO0VEd0NJLGNBQUE7QUFuQlIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy9pbmRleFwiIGFzICo7XHJcblxyXG5zZWN0aW9uLmxvZ2luLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgZGl2LnVwcGVyLWJhbmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIC8vaGVpZ2h0OiA1LjVyZW07XHJcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS11cHBlci1yYWRpYWwtZ3JhZGllbnQ7XHJcbiAgICAgICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAgICAgYm94LXNoYWRvdzpcclxuICAgICAgICAgICAgMHB4IDAuNnB4IDEuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNDUpLFxyXG4gICAgICAgICAgICAwcHggMS4zcHggNC4zcHggcmdiYSgwLCAwLCAwLCAwLjA3KSxcclxuICAgICAgICAgICAgMHB4IDIuNHB4IDcuN3B4IHJnYmEoMCwgMCwgMCwgMC4wODkpLFxyXG4gICAgICAgICAgICAwcHggNHB4IDEyLjhweCByZ2JhKDAsIDAsIDAsIDAuMTA2KSxcclxuICAgICAgICAgICAgMHB4IDYuNnB4IDIxLjJweCByZ2JhKDAsIDAsIDAsIDAuMTIxKSxcclxuICAgICAgICAgICAgMHB4IDExLjZweCAzN3B4IHJnYmEoMCwgMCwgMCwgMC4xMzUpLFxyXG4gICAgICAgICAgICAwcHggMjVweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG5cclxuICAgICAgICBkaXYuYnJhbmQtY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAgICAgaW1nLmJyYW5kLWxvZ297XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLjdyZW0gMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3Bhbi5icmFuZC1uYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgd29yZC1zcGFjaW5nOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Lm9wdGlvbnMtY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmNvbnRlbnQtY29udGFpbmVyeyAgICAgICAgXHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpdi5mb290ZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1mb290ZXItcmFkaWFsLWdyYWRpZW50O1xyXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vbWFpbiBjb2xvcnNcclxuJHByaW1hcnktY29sb3I6ICM2QjZGRDU7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM5MTk2ZjU7XHJcbiRob3Zlci1jb2xvcjogIzIxMjM1ZDtcclxuJGhvdmVyLWl0ZW0tY29sb3I6ICNlMGUxZmY7XHJcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuJGJveC1zaGFkb3ctY29sb3I6ICNhY2IwZmY7XHJcblxyXG4vL2dyYWRpZW50c1xyXG5cclxuJHByaW0tZ3JhZC1jb2xvci0xOiAjMTM0MDVlO1xyXG4kcHJpbS1ncmFkLWNvbG9yLTI6IzVlNTM4MjtcclxuQG1peGluIHByaW1hcnktbGluZWFyLWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICN7JHByaW0tZ3JhZC1jb2xvci0xfSAwJSwgI3skcHJpbS1ncmFkLWNvbG9yLTJ9IDEwMCUpO1xyXG59XHJcblxyXG5AbWl4aW4gcHJpbWFyeS11cHBlci1yYWRpYWwtZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIGVsbGlwc2UgYXQgdG9wLCAjeyRwcmltLWdyYWQtY29sb3ItMX0gMCUsICN7JHByaW0tZ3JhZC1jb2xvci0yfSAxMDAlKTtcclxufVxyXG5cclxuQG1peGluIHByaW1hcnktZm9vdGVyLXJhZGlhbC1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCggZWxsaXBzZSBhdCBib3R0b20sICN7JHByaW0tZ3JhZC1jb2xvci0xfSAwJSwgI3skcHJpbS1ncmFkLWNvbG9yLTJ9IDEwMCUpO1xyXG59XHJcblxyXG4kc2VjLWdyYWQtY29sb3ItMTogIzY2N2VlYTtcclxuJHNlYy1ncmFkLWNvbG9yLTI6ICAjNzY0YmEyO1xyXG5AbWl4aW4gc2Vjb25kYXJ5LWxpbmVhci1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICN7JHNlYy1ncmFkLWNvbG9yLTF9IDAlLCAjeyRzZWMtZ3JhZC1jb2xvci0yfSAxMDAlKTtcclxufVxyXG5cclxuJGhvdi1zZWMtZ3JhZC1jb2xvci0xOiAjNmU0NWUyO1xyXG4kaG92LXNlYy1ncmFkLWNvbG9yLTI6ICM4OGQzY2U7XHJcbkBtaXhpbiBob3Zlci1zZWNvbmRhcnktbGluZWFyLWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI3skaG92LXNlYy1ncmFkLWNvbG9yLTF9IDAlLCAjeyRob3Ytc2VjLWdyYWQtY29sb3ItMn0gMTAwJSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2503:
/*!*******************************************************************************!*\
  !*** ./src/app/features/manager/layouts/form-status/form-status.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStatusComponent": () => (/* binding */ FormStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



function FormStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "formBad"));
  }
}
function FormStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "formGood"));
  }
}
class FormStatusComponent {}
FormStatusComponent.ɵfac = function FormStatusComponent_Factory(t) {
  return new (t || FormStatusComponent)();
};
FormStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormStatusComponent,
  selectors: [["app-form-status"]],
  inputs: {
    validity: "validity"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "form-status"], ["class", "text-form-status invalid-form-status", 4, "ngIf"], ["class", "text-form-status valid-form-status", 4, "ngIf"], [1, "text-form-status", "invalid-form-status"], [1, "text-form-status", "valid-form-status"]],
  template: function FormStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormStatusComponent_div_1_Template, 4, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormStatusComponent_div_2_Template, 4, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validity);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validity);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".form-status[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-status[_ngcontent-%COMP%]   .text-form-status[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.form-status[_ngcontent-%COMP%]   .valid-form-status[_ngcontent-%COMP%] {\n  background: rgba(103, 255, 103, 0.2);\n  color: green;\n}\n.form-status[_ngcontent-%COMP%]   .invalid-form-status[_ngcontent-%COMP%] {\n  background: rgba(255, 103, 103, 0.2);\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9sYXlvdXRzL2Zvcm0tc3RhdHVzL2Zvcm0tc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFFSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUFSO0FBR0k7RUFDSSxvQ0FBQTtFQUNBLFVBQUE7QUFEUiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCIvc3JjL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzL2luZGV4XCIgYXMgKjtcclxuXHJcbi5mb3JtLXN0YXR1c3tcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAudGV4dC1mb3JtLXN0YXR1c3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudmFsaWQtZm9ybS1zdGF0dXN7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDMsIDI1NSwgMTAzLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmludmFsaWQtZm9ybS1zdGF0dXN7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwMywgMTAzLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7961:
/*!*****************************************************************!*\
  !*** ./src/app/features/manager/layouts/menu/menu.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-card/user-card.component */ 3811);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


//models
//components

//services







const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
function MenuComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MenuComponent_li_2_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onLinkClick(item_r1.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, item_r1.link === ctx_r0.selectedLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", item_r1.icon, " icon-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, item_r1.label), "");
  }
}
class MenuComponent {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const roles = yield JSON.parse(_this.localStorage.getData('roles'));
      if (roles.includes("ADMIN")) {
        _this.menuItems = [{
          link: 'contracts',
          label: 'contracts',
          icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeIcons.FILE
        }, {
          link: 'customers',
          label: 'customers',
          icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeIcons.USERS
        }];
      } else {
        _this.menuItems = [{
          link: 'contracts',
          label: 'contracts',
          icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeIcons.FILE
        }, {
          link: 'wallets',
          label: 'wallets',
          icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeIcons.WALLET
        }];
      }
    })();
  }
  onLinkClick(link) {
    this.selectedLink = link;
    this.router.navigate(['/manager/', link]);
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 4,
  vars: 1,
  consts: [[1, "menu-container"], [1, "menu"], ["class", "menu-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "menu-item", 3, "ngClass", "click"], [1, "menu-link"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MenuComponent_li_2_Template, 5, 9, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-user-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_2__.UserCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".menu-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%] {\n  list-style-type: none;\n  height: 100%;\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 6rem;\n  padding: 1rem;\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]   i.icon-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  font-size: 2rem;\n  color: #ffffff;\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]   a.menu-link[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding-left: 20%;\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%]   li.menu-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.1254901961);\n}\n.menu-container[_ngcontent-%COMP%]   menu.menu[_ngcontent-%COMP%]   li.menu-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9sYXlvdXRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUtJO0VBRUkscUJBQUE7RUFFQSxZQUFBO0FBTFI7QUFPUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0FBUlo7QUFVWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUmhCO0FBV1k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFUaEI7QUFZWTtFQUNJLGVBQUE7RUFDQSxtREFBQTtBQVZoQjtBQWFZO0VBQ0kscUNBQUE7QUFYaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy9pbmRleFwiIGFzICo7XHJcblxyXG4ubWVudS1jb250YWluZXJ7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBtZW51Lm1lbnV7XHJcblxyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGxpLm1lbnUtaXRlbXtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaS5pY29uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhLm1lbnUtbGlua3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMjA7XHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zZWxlY3RlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3811:
/*!********************************************************************************!*\
  !*** ./src/app/features/manager/layouts/menu/user-card/user-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCardComponent": () => (/* binding */ UserCardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../notification/notification.component */ 1610);
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authentication.service */ 1745);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var _language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../language-selector/language-selector.component */ 2526);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


//models
//components

//services











class UserCardComponent {
  constructor(localStorage, authenticationService, router) {
    this.localStorage = localStorage;
    this.authenticationService = authenticationService;
    this.router = router;
    this.user = {
      id: '',
      username: '',
      role: '',
      name: ''
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user.id = yield _this.localStorage.getData('id');
      _this.user.username = yield _this.localStorage.getData('username');
      _this.user.role = yield JSON.parse(_this.localStorage.getData('roles'))[0].toLowerCase();
      _this.user.name = yield _this.localStorage.getData('name');
    })();
  }
  onSignOut() {
    var _this2 = this;
    this.authenticationService.signout().subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (msg) {
        _this2.localStorage.clearData();
        _this2.router.navigate(['/login']);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  changeDisplay() {
    this.notification.toggleNotification();
  }
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) {
  return new (t || UserCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
UserCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UserCardComponent,
  selectors: [["app-user-card"]],
  viewQuery: function UserCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.notification = _t.first);
    }
  },
  decls: 25,
  vars: 8,
  consts: [[1, "user-card"], [1, "header"], [1, "user-avatar"], [1, "notification-icon"], ["styleClass", "mr-2", "size", "large", "shape", "circle", 3, "label"], [1, "user-infos"], [1, "user-info-row"], [1, "pi", "pi-user"], [1, "user-name"], [1, "pi", "pi-shield"], [1, "role"], [1, "actions"], [1, "notification"], ["pButton", "", "type", "button", "icon", "pi pi-inbox", 1, "mr-2", "purple-gradient-button", 3, "click"], [1, "btn", 3, "click"], [1, "pi", "pi-sign-out"], [3, "myEvent"]],
  template: function UserCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3)(4, "p-avatar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-language-selector");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 12)(18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserCardComponent_Template_button_click_18_listener() {
        return ctx.changeDisplay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11)(20, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserCardComponent_Template_a_click_20_listener() {
        return ctx.onSignOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "app-notification", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("myEvent", function UserCardComponent_Template_app_notification_myEvent_24_listener() {
        return ctx.changeDisplay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", ctx.user.name.charAt(0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 4, ctx.user.role));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 6, "signout"), "");
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_avatar__WEBPACK_IMPORTED_MODULE_8__.Avatar, _language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_4__.LanguageSelectorComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["section.user-card[_ngcontent-%COMP%] {\n  width: 17rem;\n  background: rgba(255, 255, 255, 0.13);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(12.8px);\n  -webkit-backdrop-filter: blur(12.8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  margin: 0.3rem;\n  border-radius: 5px;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.3rem 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  width: 87%;\n  display: flex;\n  flex-direction: column;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%]   div.user-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%]   div.user-info-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 0 0.4rem;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%]   div.user-info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%]   div.user-info-row[_ngcontent-%COMP%]   span.user-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nsection.user-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user-infos[_ngcontent-%COMP%]   div.user-info-row[_ngcontent-%COMP%]   span.role[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 0.9rem;\n  text-transform: lowercase;\n  border-radius: 15px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 0.1rem 1.5rem;\n  min-width: 50%;\n}\nsection.user-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(96, 104, 119);\n  padding: 0.5rem 0.2rem;\n  display: flex;\n  justify-content: space-evenly;\n}\nsection.user-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9rem;\n}\nsection.user-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #8ea9ba;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9sYXlvdXRzL21lbnUvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy9fcHVycGxlUGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtBQUZKO0FBSUk7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBT1k7RUFDSSxlQUFBO0FBTGhCO0FBU1E7RUFDSSxvQkFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFSWjtBQVVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFSaEI7QUFVZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFScEI7QUFXZ0I7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVHBCO0FBWWdCO0VBQ0ksZUFBQTtBQVZwQjtBQWFnQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQ2xDaEIsNkRBQUE7RURvQ2dCLHNCQUFBO0VBQ0EsY0FBQTtBQVhwQjtBQWtCSTtFQUVJLHVDQUFBO0VBRUEsc0JBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7QUFuQlI7QUFxQlE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUFwQlo7QUFzQlk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXBCaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy9pbmRleFwiIGFzICo7XHJcblxyXG5zZWN0aW9uLnVzZXItY2FyZHtcclxuICAgIHdpZHRoOiAxN3JlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTIuOHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEyLjhweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICBtYXJnaW46IC4zcmVtO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxLjNyZW0gMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnVzZXItYXZhdGFye1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItaW5mb3N7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NyU7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgZGl2LnVzZXItaW5mby1yb3d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3Bhbi51c2VyLW5hbWV7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3Bhbi5yb2xle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc2Vjb25kYXJ5LWxpbmVhci1ncmFkaWVudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnN7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5NiwgMTA0LCAxMTkpO1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwLjJyZW07XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgIC5idG57XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhlYTliYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuLy9tYWluIGNvbG9yc1xyXG4kcHJpbWFyeS1jb2xvcjogIzZCNkZENTtcclxuJHNlY29uZGFyeS1jb2xvcjogIzkxOTZmNTtcclxuJGhvdmVyLWNvbG9yOiAjMjEyMzVkO1xyXG4kaG92ZXItaXRlbS1jb2xvcjogI2UwZTFmZjtcclxuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xyXG4kYm94LXNoYWRvdy1jb2xvcjogI2FjYjBmZjtcclxuXHJcbi8vZ3JhZGllbnRzXHJcblxyXG4kcHJpbS1ncmFkLWNvbG9yLTE6ICMxMzQwNWU7XHJcbiRwcmltLWdyYWQtY29sb3ItMjojNWU1MzgyO1xyXG5AbWl4aW4gcHJpbWFyeS1saW5lYXItZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI3skcHJpbS1ncmFkLWNvbG9yLTF9IDAlLCAjeyRwcmltLWdyYWQtY29sb3ItMn0gMTAwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiBwcmltYXJ5LXVwcGVyLXJhZGlhbC1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCggZWxsaXBzZSBhdCB0b3AsICN7JHByaW0tZ3JhZC1jb2xvci0xfSAwJSwgI3skcHJpbS1ncmFkLWNvbG9yLTJ9IDEwMCUpO1xyXG59XHJcblxyXG5AbWl4aW4gcHJpbWFyeS1mb290ZXItcmFkaWFsLWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCBlbGxpcHNlIGF0IGJvdHRvbSwgI3skcHJpbS1ncmFkLWNvbG9yLTF9IDAlLCAjeyRwcmltLWdyYWQtY29sb3ItMn0gMTAwJSk7XHJcbn1cclxuXHJcbiRzZWMtZ3JhZC1jb2xvci0xOiAjNjY3ZWVhO1xyXG4kc2VjLWdyYWQtY29sb3ItMjogICM3NjRiYTI7XHJcbkBtaXhpbiBzZWNvbmRhcnktbGluZWFyLWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI3skc2VjLWdyYWQtY29sb3ItMX0gMCUsICN7JHNlYy1ncmFkLWNvbG9yLTJ9IDEwMCUpO1xyXG59XHJcblxyXG4kaG92LXNlYy1ncmFkLWNvbG9yLTE6ICM2ZTQ1ZTI7XHJcbiRob3Ytc2VjLWdyYWQtY29sb3ItMjogIzg4ZDNjZTtcclxuQG1peGluIGhvdmVyLXNlY29uZGFyeS1saW5lYXItZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjeyRob3Ytc2VjLWdyYWQtY29sb3ItMX0gMCUsICN7JGhvdi1zZWMtZ3JhZC1jb2xvci0yfSAxMDAlKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6719:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/manager/layouts/notification/notification-form/notification-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationFormComponent": () => (/* binding */ NotificationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-status/form-status.component */ 2503);

//components

//services














function NotificationFormComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "customer"));
  }
}
function NotificationFormComponent_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 15);
  }
}
function NotificationFormComponent_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "provider"));
  }
}
function NotificationFormComponent_input_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 16);
  }
}
class NotificationFormComponent {
  constructor(fb, ref, config, confirmationService, localStorage, translateService) {
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.confirmationService = confirmationService;
    this.localStorage = localStorage;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem("roles"));
    this.initForm();
  }
  initForm() {
    this.notificationForm = this.fb.group({
      id: [null],
      customerId: [this.isAdmin() ? '' : this.localStorage.getData('id'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      providerId: [this.isAdmin() ? this.localStorage.getData('id') : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      accept: [false],
      read: [false],
      new: this.isAdmin() ? [true] : [false]
    });
  }
  cancelDialog() {
    this.translateService.get("cancelMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'cancelDialog',
        accept: () => {
          this.ref.close();
        }
      });
    });
  }
  saveDialog() {
    this.translateService.get("saveMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'saveDialog',
        accept: () => {
          this._notification = this.notificationForm.value;
          this.ref.close(this._notification);
        }
      });
    });
  }
  isAdmin() {
    return this.roles.includes("ADMIN");
  }
}
NotificationFormComponent.ɵfac = function NotificationFormComponent_Factory(t) {
  return new (t || NotificationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
};
NotificationFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NotificationFormComponent,
  selectors: [["app-notification-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService])],
  decls: 25,
  vars: 16,
  consts: [[1, "notification", "dialog-component"], [1, "form-section"], [1, "grid-form", "notification-form", 3, "formGroup"], ["class", "label", 4, "ngIf"], ["class", "field purple-input", "formControlName", "customerId", "type", "text", "pInputText", "", 4, "ngIf"], ["class", "field purple-input", "formControlName", "providerId", "pInputText", "", 4, "ngIf"], [1, "label"], ["formControlName", "message", "pInputText", "", 1, "field"], [1, "form-required"], [1, "form-validation"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["formControlName", "customerId", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["formControlName", "providerId", "pInputText", "", 1, "field", "purple-input"]],
  template: function NotificationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NotificationFormComponent_label_3_Template, 5, 3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NotificationFormComponent_input_4_Template, 1, 0, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NotificationFormComponent_label_5_Template, 5, 3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NotificationFormComponent_input_6_Template, 1, 0, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 8)(14, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-form-status", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationFormComponent_Template_button_click_19_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationFormComponent_Template_button_click_21_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "p-confirmDialog", 13)(24, "p-confirmDialog", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.notificationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAdmin());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAdmin());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "message"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validity", ctx.notificationForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 12, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 14, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.notificationForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1610:
/*!*********************************************************************************!*\
  !*** ./src/app/features/manager/layouts/notification/notification.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _notification_form_notification_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-form/notification-form.component */ 6719);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ 1645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);



//components

//services


















function NotificationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function NotificationComponent_ng_template_2_div_0_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_ng_template_2_div_0_ng_container_20_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.markNotificationAsRead(notification_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("pen-action ", notification_r4.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, "markRead"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("pi ", ctx_r6.notifOptions[2].icon, "");
  }
}
function NotificationComponent_ng_template_2_div_0_ng_container_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_ng_template_2_div_0_ng_container_20_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.acceptNotification(notification_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_ng_template_2_div_0_ng_container_20_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.rejectNotification(notification_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("read-action ", notification_r4.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 14, "accept"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("pi ", ctx_r7.notifOptions[3].icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("read-action ", notification_r4.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 16, "reject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("pi ", ctx_r7.notifOptions[4].icon, "");
  }
}
function NotificationComponent_ng_template_2_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_ng_template_2_div_0_ng_container_20_div_1_Template, 5, 9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_ng_template_2_div_0_ng_container_20_div_2_Template, 9, 18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", notification_r4.code == "PEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", notification_r4.code == "READ");
  }
}
function NotificationComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 10)(8, "div", 11)(9, "span")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Customer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12)(15, "span")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Provider: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NotificationComponent_ng_template_2_div_0_ng_container_20_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("notification ", notification_r4.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("icon pi ", notification_r4.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](notification_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", notification_r4.customerId, " - ", notification_r4.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", notification_r4.providerId, " - ", notification_r4.providerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.formatDate(notification_r4.date), " ");
  }
}
function NotificationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NotificationComponent_ng_template_2_div_0_Template, 23, 13, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.notifications);
  }
}
function NotificationComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_ng_template_3_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClick", function NotificationComponent_ng_template_3_ng_template_2_Template_p_button_onClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.refreshData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "new"));
  }
}
function NotificationComponent_ng_template_3_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("pi ", option_r25.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, option_r25.tooltip));
  }
}
function NotificationComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "p-selectButton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotificationComponent_ng_template_3_ng_template_3_Template_p_selectButton_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.selectedOption = $event);
    })("onChange", function NotificationComponent_ng_template_3_ng_template_3_Template_p_selectButton_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.updateNotifications($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_ng_template_3_ng_template_3_ng_template_2_Template, 2, 6, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r20.notifOptions)("ngModel", ctx_r20.selectedOption);
  }
}
const _c0 = function () {
  return [5, 10, 15];
};
function NotificationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-paginator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onPageChange", function NotificationComponent_ng_template_3_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.paginate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-toolbar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_ng_template_3_ng_template_2_Template, 3, 3, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NotificationComponent_ng_template_3_ng_template_3_Template, 3, 2, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", 5)("totalRecords", ctx_r2.notificationsCounter)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
  }
}
class NotificationComponent {
  constructor(notificationService, translateService, changeDetectorRef, dialogService, localStorage, datePipe) {
    this.notificationService = notificationService;
    this.translateService = translateService;
    this.changeDetectorRef = changeDetectorRef;
    this.dialogService = dialogService;
    this.localStorage = localStorage;
    this.datePipe = datePipe;
    this.display = false;
    this.waiting = {
      color: "notification--waiting",
      icon: "pi-clock"
    };
    this.reject = {
      color: "notification--alert",
      icon: "pi-times"
    };
    this.accept = {
      color: "notification--accept",
      icon: "pi-check"
    };
    this.message = {
      color: "",
      icon: "pi-bell"
    };
    this.read = {
      color: "notification--read",
      icon: "pi-eye"
    };
    this.notifications = [];
  }
  ngOnInit() {
    this.notifOptions = [{
      icon: "pi-inbox",
      code: 'ALL',
      isNew: null,
      isRead: null,
      isAccept: null,
      tooltip: "allNotification"
    }, {
      icon: "pi-clock",
      code: 'PEN',
      isNew: false,
      isRead: false,
      isAccept: false,
      tooltip: "pendingNotification"
    }, {
      icon: "pi-eye",
      code: 'READ',
      isNew: false,
      isRead: true,
      isAccept: false,
      tooltip: "readNotification"
    }, {
      icon: "pi-check",
      code: 'ACC',
      isNew: true,
      isRead: true,
      isAccept: true,
      tooltip: "approveNotification"
    }, {
      icon: "pi-times",
      code: 'REJ',
      isNew: true,
      isRead: true,
      isAccept: false,
      tooltip: "rejectNotification"
    }, {
      icon: "pi-bell",
      code: 'MES',
      isNew: true,
      isRead: false,
      isAccept: false,
      tooltip: "infoNotification"
    }];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.selectedOption = this.notifOptions[0];
    this.roles = JSON.parse(this.localStorage.getData("roles"));
    this.intervalId = setInterval(() => {
      this.refreshData();
    }, 60000);
    this.refreshData();
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  modifyObjects(notifications) {
    var tempNotifications = [];
    for (let index = 0; index < notifications.length; index++) {
      const notification = notifications[index];
      if (!notifications[index].accept && !notifications[index].read && !notifications[index].new) {
        notification.color = this.waiting.color;
        notification.icon = this.waiting.icon;
        notification.code = "PEN";
      }
      if (!notifications[index].accept && !notifications[index].read && notifications[index].new) {
        notification.color = this.message.color;
        notification.icon = this.message.icon;
        notification.code = "MES";
      }
      if (!notifications[index].accept && notifications[index].read && notifications[index].new) {
        notification.color = this.reject.color;
        notification.icon = this.reject.icon;
        notification.code = "REJ";
      }
      if (notifications[index].accept && notifications[index].read && notifications[index].new) {
        notification.color = this.accept.color;
        notification.icon = this.accept.icon;
        notification.code = "ACC";
      }
      if (!notifications[index].accept && notifications[index].read && !notifications[index].new) {
        notification.color = this.read.color;
        notification.icon = this.read.icon;
        notification.code = "READ";
      }
      tempNotifications.push(notification);
    }
    return tempNotifications;
  }
  paginate(event) {
    this.paginationParams = {
      first: event.first,
      rowsNumber: event.rows
    };
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }
  toggleNotification() {
    this.display = !this.display;
  }
  updateNotifications(option) {
    this.selectedOption = option;
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }
  refreshData() {
    this.getNotification();
    this.changeDetectorRef.markForCheck();
  }
  getNotification() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isAdmin()) {
        if (_this.selectedOption.code == "ALL") {
          yield _this.notificationService.countNotificationsByProviderId(_this.localStorage.getData("id")).toPromise().then(cnt => {
            _this.notificationsCounter = cnt;
          });
          yield _this.notificationService.getNotificationsByProviderId(_this.localStorage.getData("id"), _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(notifications => {
            _this.notifications = _this.modifyObjects(notifications);
          });
        } else {
          yield _this.notificationService.countSpecificNotificationsByProviderId(_this.localStorage.getData("id"), _this.selectedOption.isAccept, _this.selectedOption.isRead, _this.selectedOption.isNew).toPromise().then(cnt => {
            _this.notificationsCounter = cnt;
          });
          yield _this.notificationService.getSpecificNotificationsByProviderId(_this.localStorage.getData("id"), _this.selectedOption.isAccept, _this.selectedOption.isRead, _this.selectedOption.isNew, _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(notifications => {
            _this.notifications = _this.modifyObjects(notifications);
          });
        }
      } else {
        if (_this.selectedOption.code == "ALL") {
          yield _this.notificationService.countNotificationsByCustomerId(_this.localStorage.getData("id")).toPromise().then(cnt => {
            _this.notificationsCounter = cnt;
          });
          yield _this.notificationService.getNotificationsByCustomerId(_this.localStorage.getData("id"), _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(notifications => {
            _this.notifications = _this.modifyObjects(notifications);
          });
        } else {
          yield _this.notificationService.countSpecificNotificationsByCustomerId(_this.localStorage.getData("id"), _this.selectedOption.isAccept, _this.selectedOption.isRead, _this.selectedOption.isNew).toPromise().then(cnt => {
            _this.notificationsCounter = cnt;
          });
          yield _this.notificationService.getSpecificNotificationsByCustomerId(_this.localStorage.getData("id"), _this.selectedOption.isAccept, _this.selectedOption.isRead, _this.selectedOption.isNew, _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(notifications => {
            _this.notifications = _this.modifyObjects(notifications);
          });
        }
      }
    })();
  }
  isAdmin() {
    return this.roles.includes("ADMIN");
  }
  createFormDialog() {
    this.translateService.get("notificationForm").subscribe(translation => {
      const ref = this.dialogService.open(_notification_form_notification_form_component__WEBPACK_IMPORTED_MODULE_1__.NotificationFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(notification => {
        if (notification) {
          this.notificationService.createNotification(notification).subscribe(() => {
            this.updateNotifications(this.selectedOption);
          });
        }
      });
    });
  }
  formatDate(date) {
    return this.datePipe.transform(date, 'dd/MM/yyyy hh:mm a');
  }
  updateNotification(notification) {
    this.notificationService.updateNotification(notification).subscribe(() => {
      this.refreshData();
    });
  }
  markNotificationAsRead(notification) {
    const newNotification = this.createNotification(notification);
    newNotification.read = true;
    this.updateNotification(newNotification);
  }
  acceptNotification(notification) {
    const newNotification = this.createNotification(notification);
    newNotification.accept = true;
    newNotification.new = true;
    this.updateNotification(newNotification);
  }
  rejectNotification(notification) {
    const newNotification = this.createNotification(notification);
    newNotification.new = true;
    this.updateNotification(newNotification);
  }
  createNotification(notification) {
    const deepNotification = JSON.parse(JSON.stringify(notification));
    delete deepNotification.color;
    delete deepNotification.icon;
    delete deepNotification.code;
    return deepNotification;
  }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
  return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe));
};
NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotificationComponent,
  selectors: [["app-notification"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe])],
  decls: 4,
  vars: 2,
  consts: [["position", "right", "styleClass", "p-sidebar-md", 3, "visible", "transitionOptions", "visibleChange"], ["pTemplate", "header"], ["class", "notification-body", "pTemplate", "body"], ["pTemplate", "footer"], [1, "notification-header"], [3, "class", 4, "ngFor", "ngForOf"], [1, "notification-icon"], [1, "content-body"], [1, "message-section"], [1, "message"], [1, "contact-section"], [1, "customer-info"], [1, "provider-info"], [4, "ngIf"], [1, "update-date-section"], ["class", "action-section", 4, "ngIf"], [1, "action-section"], ["pButton", "", "type", "button", "styleClass", "p-button-sm", 3, "click"], [1, "purple-paginator", 3, "rows", "totalRecords", "rowsPerPageOptions", "onPageChange"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "purple-button", 3, "label", "click"], ["icon", "pi pi-sync", "styleClass", "p-button-sm", 1, "purple-button-icon", 3, "onClick"], [1, "selectButton"], [1, "purple-selectbutton", 3, "options", "ngModel", "ngModelChange", "onChange"], ["pTemplate", "item"], [3, "pTooltip"]],
  template: function NotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-sidebar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function NotificationComponent_Template_p_sidebar_visibleChange_0_listener($event) {
        return ctx.display = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NotificationComponent_ng_template_1_Template, 3, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NotificationComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NotificationComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.display)("transitionOptions", "200ms");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__.Sidebar, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__.SelectButton, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_paginator__WEBPACK_IMPORTED_MODULE_14__.Paginator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["div.notification[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  border-radius: 10px;\n  margin: 40px auto 0;\n  background-color: #0074D9;\n  color: #fff;\n  transition: all 0.2s ease;\n}\ndiv.notification.is-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\ndiv.notification.notification--waiting[_ngcontent-%COMP%] {\n  background-color: #F39C12;\n}\ndiv.notification.notification--alert[_ngcontent-%COMP%] {\n  background-color: #FF4136;\n}\ndiv.notification.notification--accept[_ngcontent-%COMP%] {\n  background-color: #2ECC40;\n}\ndiv.notification.notification--read[_ngcontent-%COMP%] {\n  background-color: #9B59B6;\n}\ndiv.notification[_ngcontent-%COMP%]   div.notification-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 10px 0 0 10px;\n  background-color: rgba(0, 0, 0, 0.25);\n  padding: 0.5rem;\n}\ndiv.notification[_ngcontent-%COMP%]   div.notification-icon[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%] {\n  width: 94%;\n  padding: 0.7rem 0.5rem;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.message-section[_ngcontent-%COMP%]   p.message[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.15);\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 16px;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.contact-section[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 13px;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.update-date-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 14px;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  margin-right: 0.4rem;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.read-action[_ngcontent-%COMP%] {\n  background-color: #9B59B6;\n  border: 1px solid #fff;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.read-action[_ngcontent-%COMP%]:hover {\n  background-color: #8E44AD;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.read-action[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #9B59B6, 0 1px 2px 0 black;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.pen-action[_ngcontent-%COMP%] {\n  background-color: #F39C12;\n  border: 1px solid #fff;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.pen-action[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.137254902);\n  border: 1px solid #cd8513;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button.pen-action[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #ffb70f, 0 1px 2px 0 black;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 0.3rem;\n}\ndiv.notification[_ngcontent-%COMP%]   div.content-body[_ngcontent-%COMP%]   div.action-section[_ngcontent-%COMP%]   button.p-button[_ngcontent-%COMP%]   i.pi[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9sYXlvdXRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBWkY7QUFjRTtFQUNFLGFBQUE7QUFaSjtBQWVFO0VBQ0UseUJBQUE7QUFiSjtBQWdCRTtFQUNFLHlCQUFBO0FBZEo7QUFpQkU7RUFDRSx5QkFBQTtBQWZKO0FBa0JFO0VBQ0UseUJBQUE7QUFoQko7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBRUEsZUFBQTtBQWxCSjtBQW9CSTtFQUNFLGVBQUE7QUFsQk47QUFzQkU7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUFwQko7QUF1Qk07RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFyQlI7QUF5Qkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQXZCTjtBQTBCSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUF4Qk47QUEyQkk7RUFDRSxlQUFBO0FBekJOO0FBMkJNO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQXpCUjtBQTJCUTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUF6QlY7QUEyQlU7RUFDRSx5QkFBQTtBQXpCWjtBQTRCVTtFQUNFLG1FQUFBO0FBMUJaO0FBOEJRO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQTVCVjtBQThCVTtFQUNFLDRDQUFBO0VBQ0EseUJBQUE7QUE1Qlo7QUErQlU7RUFDRSxtRUFBQTtBQTdCWjtBQWlDUTtFQUNFLGdCQUFBO0FBL0JWO0FBaUNVO0VBQ0UsaUJBQUE7QUEvQloiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiL3NyYy9hc3NldHMvc3R5bGVzL2NvbnN0YW50cy9pbmRleFwiIGFzICo7XHJcblxyXG4kYy1ibGFjazogIzExMTtcclxuJGMtd2hpdGU6ICNmZmY7XHJcbiRjLWJsdWVzOiAjMjk4MEI5LCAjMDA3NEQ5LCAjMDA5RkUzO1xyXG4kYy1ncmV5czogIzM0M0MzRiwgI0EyQUNCMCwgI0Q5RTFFNDtcclxuJGMtZ3JlZW5zOiAjMjdBRTYwLCAjMkVDQzQwLCAjMDFGRjcwO1xyXG4kYy1yZWRzOiAjQzAzOTJCLCAjRkY0MTM2LCAjRTc0QzNDO1xyXG4kYy15ZWxsb3dzOiAjRjM5QzEyLCAjZmZiNzBmLCAjY2Q4NTEzO1xyXG4kYy1wdXJwbGVzOiAjNTMyRTYyLCAjOEU0NEFELCAjOUI1OUI2O1xyXG5cclxuZGl2Lm5vdGlmaWNhdGlvbiB7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRjLWJsdWVzLCAyKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIFxyXG4gICYuaXMtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLm5vdGlmaWNhdGlvbi0td2FpdGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGMteWVsbG93cywgMSk7XHJcbiAgfVxyXG4gIFxyXG4gICYubm90aWZpY2F0aW9uLS1hbGVydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGMtcmVkcywgMik7XHJcbiAgfVxyXG4gIFxyXG4gICYubm90aWZpY2F0aW9uLS1hY2NlcHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRjLWdyZWVucywgMik7XHJcbiAgfVxyXG4gIFxyXG4gICYubm90aWZpY2F0aW9uLS1yZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG50aCgkYy1wdXJwbGVzLCAzKTtcclxuICB9XHJcblxyXG4gIGRpdi5ub3RpZmljYXRpb24taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjI1KTtcclxuICAgIFxyXG4gICAgcGFkZGluZzogLjVyZW07XHJcblxyXG4gICAgaS5pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmNvbnRlbnQtYm9keSB7ICBcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBwYWRkaW5nOiAuN3JlbSAuNXJlbTtcclxuICBcclxuICAgIGRpdi5tZXNzYWdlLXNlY3Rpb257XHJcbiAgICAgIHAubWVzc2FnZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAwLjE1KTtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmNvbnRhY3Qtc2VjdGlvbntcclxuICAgICAgcGFkZGluZzogLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2LnVwZGF0ZS1kYXRlLXNlY3Rpb257XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuYWN0aW9uLXNlY3Rpb257XHJcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xyXG5cclxuICAgICAgYnV0dG9uLnAtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAuN3JlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC40cmVtO1xyXG5cclxuICAgICAgICAmLnJlYWQtYWN0aW9ue1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRjLXB1cnBsZXMsIDMpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbnRoKCRjLXdoaXRlLCAxKTtcclxuICAgICAgICBcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG50aCgkYy1wdXJwbGVzLCAyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZmZmZiwgMCAwIDAgNHB4IG50aCgkYy1wdXJwbGVzLCAzKSwgMCAxcHggMnB4IDAgYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnBlbi1hY3Rpb257XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGMteWVsbG93cywgMSk7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBudGgoJGMtd2hpdGUsIDEpO1xyXG5cclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAyMztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbnRoKCRjLXllbGxvd3MsIDMpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmZmZmLCAwIDAgMCA0cHggbnRoKCRjLXllbGxvd3MsIDIpLCAwIDFweCAycHggMCBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICBtYXJnaW46IDAgLjNyZW07XHJcblxyXG4gICAgICAgICAgJi5waXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3765:
/*!*******************************************************!*\
  !*** ./src/app/features/manager/manager.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerComponent": () => (/* binding */ ManagerComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/directives/route-history.service */ 5220);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/menu/menu.component */ 7961);
//models
//components
//services







class ManagerComponent {
  constructor(dialogService, routeHistory) {
    this.dialogService = dialogService;
  }
  ngOnInit() {}
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) {
  return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_0__.RouteHistoryService));
};
ManagerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ManagerComponent,
  selectors: [["app-manager"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DialogService, src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_0__.RouteHistoryService] //dynamic dialog
  )],
  decls: 7,
  vars: 0,
  consts: [[1, "manager-container"], [1, "menu-section"], [1, "data-section"], [1, "content-container"], [1, "content-view-container"]],
  template: function ManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 2)(4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
  styles: ["section.manager-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n}\nsection.manager-container[_ngcontent-%COMP%]   section.menu-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: linear-gradient(0deg, #13405e 0%, #5e5382 100%);\n  box-shadow: 6.4px 0px 7px rgba(0, 0, 0, 0.11), 15.6px 0px 16.8px rgba(0, 0, 0, 0.081), 27.1px 0px 31.6px rgba(0, 0, 0, 0.07), 40.1px 0px 56.3px rgba(0, 0, 0, 0.062), 53.4px 0px 105.3px rgba(0, 0, 0, 0.051), 63px 0px 252px rgba(0, 0, 0, 0.033);\n}\nsection.manager-container[_ngcontent-%COMP%]   section.data-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nsection.manager-container[_ngcontent-%COMP%]   section.data-section[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 2rem 3.8rem;\n}\nsection.manager-container[_ngcontent-%COMP%]   section.data-section[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-view-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  background-color: #ececec;\n  border-radius: 10px;\n  background-image: url(/assets/images/gray_logo.png);\n  background-repeat: no-repeat;\n  background-position: center;\n}\nsection.manager-container[_ngcontent-%COMP%]   section.data-section[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-view-container[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzL19wdXJwbGVQYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7QUFGSjtBQUlJO0VBQ0ksYUFBQTtFQ0tKLDJEQUFBO0VERkksa1BBQ0k7QUFKWjtBQWFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFYUjtBQWFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVhaO0FBYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQWRoQjtBQWlCZ0I7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFoQnBCIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvaW5kZXhcIiBhcyAqO1xyXG5cclxuc2VjdGlvbi5tYW5hZ2VyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIHNlY3Rpb24ubWVudS1zZWN0aW9ue1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgQGluY2x1ZGUgcHJpbWFyeS1saW5lYXItZ3JhZGllbnQ7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDYuNHB4IDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjExKSxcclxuICAgICAgICAgICAgMTUuNnB4IDBweCAxNi44cHggcmdiYSgwLCAwLCAwLCAwLjA4MSksXHJcbiAgICAgICAgICAgIDI3LjFweCAwcHggMzEuNnB4IHJnYmEoMCwgMCwgMCwgMC4wNyksXHJcbiAgICAgICAgICAgIDQwLjFweCAwcHggNTYuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNjIpLFxyXG4gICAgICAgICAgICA1My40cHggMHB4IDEwNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA1MSksXHJcbiAgICAgICAgICAgIDYzcHggMHB4IDI1MnB4IHJnYmEoMCwgMCwgMCwgMC4wMzMpXHJcbiAgICAgICAgICAgIDtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uLmRhdGEtc2VjdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDMuOHJlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50LXZpZXctY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2dyYXlfbG9nby5wbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG4vL21haW4gY29sb3JzXHJcbiRwcmltYXJ5LWNvbG9yOiAjNkI2RkQ1O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjOTE5NmY1O1xyXG4kaG92ZXItY29sb3I6ICMyMTIzNWQ7XHJcbiRob3Zlci1pdGVtLWNvbG9yOiAjZTBlMWZmO1xyXG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XHJcbiRib3gtc2hhZG93LWNvbG9yOiAjYWNiMGZmO1xyXG5cclxuLy9ncmFkaWVudHNcclxuXHJcbiRwcmltLWdyYWQtY29sb3ItMTogIzEzNDA1ZTtcclxuJHByaW0tZ3JhZC1jb2xvci0yOiM1ZTUzODI7XHJcbkBtaXhpbiBwcmltYXJ5LWxpbmVhci1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjeyRwcmltLWdyYWQtY29sb3ItMX0gMCUsICN7JHByaW0tZ3JhZC1jb2xvci0yfSAxMDAlKTtcclxufVxyXG5cclxuQG1peGluIHByaW1hcnktdXBwZXItcmFkaWFsLWdyYWRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCBlbGxpcHNlIGF0IHRvcCwgI3skcHJpbS1ncmFkLWNvbG9yLTF9IDAlLCAjeyRwcmltLWdyYWQtY29sb3ItMn0gMTAwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiBwcmltYXJ5LWZvb3Rlci1yYWRpYWwtZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIGVsbGlwc2UgYXQgYm90dG9tLCAjeyRwcmltLWdyYWQtY29sb3ItMX0gMCUsICN7JHByaW0tZ3JhZC1jb2xvci0yfSAxMDAlKTtcclxufVxyXG5cclxuJHNlYy1ncmFkLWNvbG9yLTE6ICM2NjdlZWE7XHJcbiRzZWMtZ3JhZC1jb2xvci0yOiAgIzc2NGJhMjtcclxuQG1peGluIHNlY29uZGFyeS1saW5lYXItZ3JhZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjeyRzZWMtZ3JhZC1jb2xvci0xfSAwJSwgI3skc2VjLWdyYWQtY29sb3ItMn0gMTAwJSk7XHJcbn1cclxuXHJcbiRob3Ytc2VjLWdyYWQtY29sb3ItMTogIzZlNDVlMjtcclxuJGhvdi1zZWMtZ3JhZC1jb2xvci0yOiAjODhkM2NlO1xyXG5AbWl4aW4gaG92ZXItc2Vjb25kYXJ5LWxpbmVhci1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICN7JGhvdi1zZWMtZ3JhZC1jb2xvci0xfSAwJSwgI3skaG92LXNlYy1ncmFkLWNvbG9yLTJ9IDEwMCUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  baseUrl: 'http://localhost:8080',
  production: true,
  apiURL: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map