"use strict";
(self["webpackChunkppeWebApp"] = self["webpackChunkppeWebApp"] || []).push([["default-src_app_core_services_customer_service_ts-src_app_features_language-selector_language-207085"],{

/***/ 1173:
/*!***************************************************!*\
  !*** ./src/app/core/services/customer.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CustomerService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllCustomers() {
    return this.httpClient.get(this.baseUrl + "/customer/getAllCustomers");
  }
  getCustomersByProviderId(providerId, offset, limit) {
    return this.httpClient.get(this.baseUrl + `/customer/getCustomerByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }
  countCustomerByProviderId(providerId) {
    return this.httpClient.get(this.baseUrl + `/customer/countCustomerByProviderId?providerId=${providerId}`);
  }
  getCustomerById(id) {
    return this.httpClient.get(this.baseUrl + `/customer/getCustomerById?id=${id}`);
  }
  createCustomer(customer, password) {
    return this.httpClient.post(this.baseUrl + `/customer/createCustomer?password=${password}`, customer, {
      responseType: 'text'
    });
  }
  deleteCustomerById(id) {
    return this.httpClient.delete(this.baseUrl + `/customer/deleteCustomerById?id=${id}`);
  }
  updateCustomer(customer) {
    return this.httpClient.put(this.baseUrl + "/customer/updateCustomer", customer);
  }
  resetCustomerPassword(email, password) {
    return this.httpClient.put(this.baseUrl + `/customer/resetCustomerPassword?email=${email}&password=${password}`, null);
  }
}
CustomerService.ɵfac = function CustomerService_Factory(t) {
  return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustomerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomerService,
  factory: CustomerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1868:
/*!************************************************************************!*\
  !*** ./src/app/features/language-selector/language-selector.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageSelectorModule": () => (/* binding */ LanguageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _language_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-selector.component */ 2526);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class LanguageSelectorModule {}
LanguageSelectorModule.ɵfac = function LanguageSelectorModule_Factory(t) {
  return new (t || LanguageSelectorModule)();
};
LanguageSelectorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LanguageSelectorModule
});
LanguageSelectorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.DropdownModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LanguageSelectorModule, {
    declarations: [_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.DropdownModule],
    exports: [_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent]
  });
})();

/***/ }),

/***/ 8653:
/*!****************************************************************************!*\
  !*** ./src/app/features/manager/layouts/form-status/form-status.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormStatusModule": () => (/* binding */ FormStatusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _form_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-status.component */ 2503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class FormStatusModule {}
FormStatusModule.ɵfac = function FormStatusModule_Factory(t) {
  return new (t || FormStatusModule)();
};
FormStatusModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FormStatusModule
});
FormStatusModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormStatusModule, {
    declarations: [_form_status_component__WEBPACK_IMPORTED_MODULE_0__.FormStatusComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule],
    exports: [_form_status_component__WEBPACK_IMPORTED_MODULE_0__.FormStatusComponent]
  });
})();

/***/ }),

/***/ 9832:
/*!**********************************************************!*\
  !*** ./src/app/shared-modules/primeng/primeng.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimengModule": () => (/* binding */ PrimengModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/multiselect */ 850);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/chart */ 2348);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/virtualscroller */ 8476);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/togglebutton */ 5293);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/slidemenu */ 691);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);





















//import comfirmation service in the corresponding view component
class PrimengModule {}
PrimengModule.ɵfac = function PrimengModule_Factory(t) {
  return new (t || PrimengModule)();
};
PrimengModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PrimengModule
});
PrimengModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_3__.MultiSelectModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__.DynamicDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__.SidebarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialogModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__.SelectButtonModule, primeng_chart__WEBPACK_IMPORTED_MODULE_15__.ChartModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__.VirtualScrollerModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_17__.ToggleButtonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__.SlideMenuModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.PaginatorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    exports: [primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_3__.MultiSelectModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.CalendarModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_11__.DynamicDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_12__.SidebarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialogModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__.SelectButtonModule, primeng_chart__WEBPACK_IMPORTED_MODULE_15__.ChartModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_16__.VirtualScrollerModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_17__.ToggleButtonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__.SlideMenuModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_19__.PaginatorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule]
  });
})();

/***/ }),

/***/ 670:
/*!********************************************!*\
  !*** ./node_modules/chart.js/auto/auto.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Animation),
/* harmony export */   "Animations": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Animations),
/* harmony export */   "ArcElement": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement),
/* harmony export */   "BarController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BarController),
/* harmony export */   "BarElement": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement),
/* harmony export */   "BasePlatform": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BasePlatform),
/* harmony export */   "BasicPlatform": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BasicPlatform),
/* harmony export */   "BubbleController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BubbleController),
/* harmony export */   "CategoryScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale),
/* harmony export */   "Chart": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart),
/* harmony export */   "Colors": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Colors),
/* harmony export */   "DatasetController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DatasetController),
/* harmony export */   "Decimation": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Decimation),
/* harmony export */   "DomPlatform": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DomPlatform),
/* harmony export */   "DoughnutController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DoughnutController),
/* harmony export */   "Element": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   "Filler": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Filler),
/* harmony export */   "Interaction": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Interaction),
/* harmony export */   "Legend": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend),
/* harmony export */   "LineController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LineController),
/* harmony export */   "LineElement": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LineElement),
/* harmony export */   "LinearScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale),
/* harmony export */   "LogarithmicScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LogarithmicScale),
/* harmony export */   "PieController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PieController),
/* harmony export */   "PointElement": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PointElement),
/* harmony export */   "PolarAreaController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PolarAreaController),
/* harmony export */   "RadarController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.RadarController),
/* harmony export */   "RadialLinearScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.RadialLinearScale),
/* harmony export */   "Scale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Scale),
/* harmony export */   "ScatterController": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.ScatterController),
/* harmony export */   "SubTitle": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.SubTitle),
/* harmony export */   "Ticks": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Ticks),
/* harmony export */   "TimeScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.TimeScale),
/* harmony export */   "TimeSeriesScale": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesScale),
/* harmony export */   "Title": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Title),
/* harmony export */   "Tooltip": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip),
/* harmony export */   "_adapters": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__._adapters),
/* harmony export */   "_detectPlatform": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__._detectPlatform),
/* harmony export */   "animator": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.animator),
/* harmony export */   "controllers": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaults": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   "elements": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.elements),
/* harmony export */   "layouts": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.layouts),
/* harmony export */   "plugins": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.plugins),
/* harmony export */   "registerables": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables),
/* harmony export */   "registry": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registry),
/* harmony export */   "scales": () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.scales)
/* harmony export */ });
/* harmony import */ var _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/chart.js */ 3854);

_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(..._dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart);

/***/ }),

/***/ 2547:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-calendar.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALENDAR_VALUE_ACCESSOR": () => (/* binding */ CALENDAR_VALUE_ACCESSOR),
/* harmony export */   "Calendar": () => (/* binding */ Calendar),
/* harmony export */   "CalendarModule": () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 1420);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 8549);














const _c0 = ["container"];
const _c1 = ["inputfield"];
const _c2 = ["contentWrapper"];
function Calendar_ng_template_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_i_2_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Calendar_ng_template_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_ng_template_2_button_3_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onButtonClick($event, _r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.icon)("disabled", ctx_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.iconAriaLabel);
  }
}
function Calendar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Calendar_ng_template_2_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onInputFocus($event));
    })("keydown", function Calendar_ng_template_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onInputKeydown($event));
    })("click", function Calendar_ng_template_2_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onInputClick());
    })("blur", function Calendar_ng_template_2_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onInputBlur($event));
    })("input", function Calendar_ng_template_2_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onUserInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_ng_template_2_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_ng_template_2_button_3_Template, 1, 3, "button", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonlyInput)("ngStyle", ctx_r1.inputStyle)("placeholder", ctx_r1.placeholder || "")("disabled", ctx_r1.disabled)("ngClass", "p-inputtext p-component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.inputId)("name", ctx_r1.name)("required", ctx_r1.required)("aria-required", ctx_r1.required)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null)("aria-labelledby", ctx_r1.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showClear && !ctx_r1.disabled && ctx_r1.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showIcon);
  }
}
function Calendar_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Calendar_div_3_ng_container_4_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.onPrevButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function Calendar_div_3_ng_container_4_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.switchToMonthView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_4_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.onContainerButtonKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r28.switchViewButtonDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.getMonthName(month_r25.month), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.switchToYearView($event));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_button_5_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.onContainerButtonKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r29.switchViewButtonDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.getYear(month_r25), " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r43.yearPickerValues()[0], " - ", ctx_r43.yearPickerValues()[ctx_r43.yearPickerValues().length - 1], "");
  }
}
function Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};
function Calendar_div_3_ng_container_4_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_1_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_span_6_ng_container_2_Template, 1, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.decadeTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.decadeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r30.yearPickerValues));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.getTranslation("weekHeader"));
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const weekDay_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekDay_r48);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const j_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const month_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r25.weekNumbers[j_r52], " ");
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r57.day);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c4 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-disabled": a1
  };
};
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);
      const date_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r62.onDateSelect($event, date_r57));
    })("keydown", function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);
      const date_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r65.onDateCellKeydown($event, date_r57, i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c4, ctx_r58.isSelected(date_r57), !date_r57.selectable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r58.dateTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r58.dateTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, date_r57));
  }
}
const _c5 = function (a0, a1) {
  return {
    "p-datepicker-other-month": a0,
    "p-datepicker-today": a1
  };
};
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_ng_container_1_Template, 4, 9, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r57 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c5, date_r57.otherMonth, date_r57.today));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", date_r57.otherMonth ? ctx_r54.showOtherMonths : true);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_1_Template, 3, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_td_2_Template, 2, 5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const week_r51 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r51);
  }
}
function Calendar_div_3_ng_container_4_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_div_2_div_9_th_4_Template, 3, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_ng_container_4_div_2_div_9_th_5_Template, 3, 1, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Calendar_div_3_ng_container_4_div_2_div_9_tr_7_Template, 3, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const month_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.weekDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", month_r25.dates);
  }
}
function Calendar_div_3_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_button_2_Template, 2, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_div_2_button_4_Template, 2, 2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_ng_container_4_div_2_button_5_Template, 2, 2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Calendar_div_3_ng_container_4_div_2_span_6_Template, 3, 5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_ng_container_4_div_2_Template_button_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_ng_container_4_div_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r72.onNextButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Calendar_div_3_ng_container_4_div_2_div_9_Template, 8, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r26 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r26 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.currentView === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.currentView !== "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.currentView === "year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r22.numberOfMonths === 1 ? "inline-flex" : i_r26 === ctx_r22.numberOfMonths - 1 ? "inline-flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.currentView === "date");
  }
}
function Calendar_div_3_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);
      const i_r75 = restoredCtx.index;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r76.onMonthSelect($event, i_r75));
    })("keydown", function Calendar_div_3_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);
      const i_r75 = restoredCtx.index;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r78.onMonthCellKeydown($event, i_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx_r73.isMonthSelected(i_r75), ctx_r73.isMonthDisabled(i_r75)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r74, " ");
  }
}
function Calendar_div_3_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_3_span_1_Template, 2, 5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.monthPickerValues());
  }
}
const _c6 = function (a0) {
  return {
    "p-highlight": a0
  };
};
function Calendar_div_3_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);
      const y_r80 = restoredCtx.$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r81.onYearSelect($event, y_r80));
    })("keydown", function Calendar_div_3_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);
      const y_r80 = restoredCtx.$implicit;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r83.onYearCellKeydown($event, y_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r80 = ctx.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r79.isYearSelected(y_r80)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r80, " ");
  }
}
function Calendar_div_3_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Calendar_div_3_ng_container_4_div_4_span_1_Template, 2, 4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.yearPickerValues());
  }
}
function Calendar_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_div_3_ng_container_4_div_2_Template, 10, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_ng_container_4_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_div_4_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.currentView === "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.currentView === "year");
  }
}
function Calendar_div_3_div_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r86.timeSeparator);
  }
}
function Calendar_div_3_div_5_div_21_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Calendar_div_3_div_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_21_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r90.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_21_Template_button_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r92.incrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_21_Template_button_keydown_space_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r93.incrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_21_Template_button_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r94.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function Calendar_div_3_div_5_div_21_Template_button_mouseup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r95.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_21_Template_button_keyup_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r96.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_21_Template_button_keyup_space_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r97.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_21_Template_button_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r98.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_div_5_div_21_ng_container_4_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_21_Template_button_keydown_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r99.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_21_Template_button_keydown_enter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r100.decrementSecond($event));
    })("keydown.space", function Calendar_div_3_div_5_div_21_Template_button_keydown_space_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r101.decrementSecond($event));
    })("mousedown", function Calendar_div_3_div_5_div_21_Template_button_mousedown_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r102.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function Calendar_div_3_div_5_div_21_Template_button_mouseup_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r103.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_div_21_Template_button_keyup_enter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r104.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_div_21_Template_button_keyup_space_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r105.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_div_21_Template_button_mouseleave_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r106.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r87.currentSecond < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r87.currentSecond);
  }
}
function Calendar_div_3_div_5_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_22_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r107.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_22_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r109.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_22_Template_button_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r110.toggleAMPM($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_div_22_Template_button_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r111.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_5_div_22_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r112.toggleAMPM($event));
    })("keydown.enter", function Calendar_div_3_div_5_div_22_Template_button_keydown_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r113.toggleAMPM($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r88.pm ? "PM" : "AM");
  }
}
function Calendar_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r114.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r116.incrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r117.incrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r118.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r119.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r120.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r121.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r122.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_div_5_ng_container_5_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r123.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r124.decrementHour($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r125.decrementHour($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r126.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r127.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r128.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r129.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r130.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 60)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 61)(13, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r131.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r132.incrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r133.incrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r134.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r135.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r136.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r137.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r138.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Calendar_div_3_div_5_ng_container_16_Template, 2, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_5_Template_button_keydown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r139.onContainerButtonKeydown($event));
    })("keydown.enter", function Calendar_div_3_div_5_Template_button_keydown_enter_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r140.decrementMinute($event));
    })("keydown.space", function Calendar_div_3_div_5_Template_button_keydown_space_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r141.decrementMinute($event));
    })("mousedown", function Calendar_div_3_div_5_Template_button_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r142.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function Calendar_div_3_div_5_Template_button_mouseup_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r143.onTimePickerElementMouseUp($event));
    })("keyup.enter", function Calendar_div_3_div_5_Template_button_keyup_enter_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r144.onTimePickerElementMouseUp($event));
    })("keyup.space", function Calendar_div_3_div_5_Template_button_keyup_space_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r145.onTimePickerElementMouseUp($event));
    })("mouseleave", function Calendar_div_3_div_5_Template_button_mouseleave_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r146.onTimePickerElementMouseLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Calendar_div_3_div_5_div_20_Template, 3, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Calendar_div_3_div_5_div_21_Template, 8, 2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Calendar_div_3_div_5_div_22_Template, 7, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.currentHour < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.currentHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.timeSeparator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.currentMinute < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.currentMinute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.hourFormat == "12");
  }
}
const _c7 = function (a0) {
  return [a0];
};
function Calendar_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_6_Template_button_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r147.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r149.onTodayButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Calendar_div_3_div_6_Template_button_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r150.onContainerButtonKeydown($event));
    })("click", function Calendar_div_3_div_6_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);
      const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r151.onClearButtonClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r20.getTranslation("today"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r20.todayButtonStyleClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r20.getTranslation("clear"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c7, ctx_r20.clearButtonStyleClass));
  }
}
function Calendar_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c8 = function (a1, a2, a3, a4, a5, a6) {
  return {
    "p-datepicker p-component": true,
    "p-datepicker-inline": a1,
    "p-disabled": a2,
    "p-datepicker-timeonly": a3,
    "p-datepicker-multiple-month": a4,
    "p-datepicker-monthpicker": a5,
    "p-datepicker-touch-ui": a6
  };
};
const _c9 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c10 = function (a1) {
  return {
    value: "visibleTouchUI",
    params: a1
  };
};
const _c11 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
function Calendar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function Calendar_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r152.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Calendar_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r154.onOverlayAnimationDone($event));
    })("click", function Calendar_div_3_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r155.onOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_ng_container_3_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Calendar_div_3_ng_container_4_Template, 5, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Calendar_div_3_div_5_Template, 23, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Calendar_div_3_div_6_Template, 3, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Calendar_div_3_ng_container_8_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.panelStyle)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](11, _c8, ctx_r2.inline, ctx_r2.disabled, ctx_r2.timeOnly, ctx_r2.numberOfMonths > 1, ctx_r2.view === "month", ctx_r2.touchUI))("@overlayAnimation", ctx_r2.touchUI ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c9, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c9, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions)))("@.disabled", ctx_r2.inline === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.timeOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.showTime || ctx_r2.timeOnly) && ctx_r2.currentView === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showButtonBar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.footerTemplate);
  }
}
const _c12 = [[["p-header"]], [["p-footer"]]];
const _c13 = function (a1, a2, a3, a4) {
  return {
    "p-calendar": true,
    "p-calendar-w-btn": a1,
    "p-calendar-timeonly": a2,
    "p-calendar-disabled": a3,
    "p-focus": a4
  };
};
const _c14 = ["p-header", "p-footer"];
const CALENDAR_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Calendar),
  multi: true
};
class Calendar {
  constructor(el, renderer, cd, zone, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.config = config;
    this.overlayService = overlayService;
    this.multipleSeparator = ',';
    this.rangeSeparator = '-';
    this.inline = false;
    this.showOtherMonths = true;
    this.icon = 'pi pi-calendar';
    this.shortYearCutoff = '+10';
    this.hourFormat = '24';
    this.stepHour = 1;
    this.stepMinute = 1;
    this.stepSecond = 1;
    this.showSeconds = false;
    this.showOnFocus = true;
    this.showWeek = false;
    this.showClear = false;
    this.dataType = 'date';
    this.selectionMode = 'single';
    this.todayButtonStyleClass = 'p-button-text';
    this.clearButtonStyleClass = 'p-button-text';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.keepInvalid = false;
    this.hideOnDateTimeSelect = true;
    this.timeSeparator = ':';
    this.focusTrap = true;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onTodayClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClearClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
    this.inputFieldValue = null;
    this.navigationState = null;
    this._numberOfMonths = 1;
    this._view = 'date';
    this.convertTo24Hour = function (hours, pm) {
      if (this.hourFormat == '12') {
        if (hours === 12) {
          return pm ? 12 : 0;
        } else {
          return pm ? hours + 12 : hours;
        }
      }
      return hours;
    };
  }
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus) {
          this.initFocusableCell();
        }
      }
    }
  }
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != undefined && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  get yearRange() {
    return this._yearRange;
  }
  set yearRange(yearRange) {
    this._yearRange = yearRange;
    if (yearRange) {
      const years = yearRange.split(':');
      const yearStart = parseInt(years[0]);
      const yearEnd = parseInt(years[1]);
      this.populateYearOptions(yearStart, yearEnd);
    }
  }
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === undefined) {
      this.initTime(this.value || new Date());
    }
    this.updateInputfield();
  }
  get locale() {
    return this._locale;
  }
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  set locale(newLocale) {
    console.warn('Locale property has no effect, use new i18n API instead.');
  }
  ngOnInit() {
    this.attributeSelector = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    const date = this.defaultDate || new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.currentView = this.view;
    if (this.view === 'date') {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'date':
          this.dateTemplate = item.template;
          break;
        case 'decade':
          this.decadeTemplate = item.template;
          break;
        case 'disabledDate':
          this.disabledDateTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        default:
          this.dateTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, '');
      if (!this.disabled) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          this.contentViewChild.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.containerViewChild.nativeElement) + 'px';
        }
      }
    }
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation('monthNamesShort')[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 11 - 1;
        y = year + 1;
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month: month,
            year: year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month: month,
              year: year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month: month,
      year: year,
      dates: dates,
      weekNumbers: weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === 'month') {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === 'year') {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === 'month') {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === 'year') {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    if (this.yearNavigator && this.currentYear < this.yearOptions[0]) {
      let difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
      this.populateYearOptions(this.yearOptions[0] - difference, this.yearOptions[this.yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    if (this.yearNavigator && this.currentYear > this.yearOptions[this.yearOptions.length - 1]) {
      let difference = this.yearOptions[this.yearOptions.length - 1] - this.yearOptions[0];
      this.populateYearOptions(this.yearOptions[0] + difference, this.yearOptions[this.yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event) {
    this.setCurrentView('month');
    event.preventDefault();
  }
  switchToYearView(event) {
    this.setCurrentView('year');
    event.preventDefault();
  }
  onDateSelect(event, dateMeta) {
    if (this.disabled || !dateMeta.selectable) {
      event.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.isSingleSelection() && this.hideOnDateTimeSelect) {
      setTimeout(() => {
        event.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;else return true;
  }
  onMonthSelect(event, index) {
    if (this.view === 'month') {
      this.onDateSelect(event, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView('date');
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event, year) {
    if (this.view === 'year') {
      this.onDateSelect(event, {
        year: year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView('month');
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = '';
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + ' ';
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += ' ' + this.rangeSeparator + ' ' + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.inputFieldValue = formattedValue;
    this.updateFilledState();
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += ' ' + this.formatTime(date);
        }
      }
    }
    return formattedValue;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == '12') {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
    if (this.showTime) {
      if (this.hourFormat == '12') {
        if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == 'date') {
      this.onModelChange(this.value);
    } else if (this.dataType == 'string') {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (this.value) {
          stringArrValue = this.value.map(date => this.formatDateTime(date));
        }
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== 'string';
  }
  isMonthSelected(month) {
    if (this.isComparable() && !this.isMultipleSelection()) {
      const [start, end] = this.isRangeSelection() ? this.value : [this.value, this.value];
      const selected = new Date(this.currentYear, month, 1);
      return selected >= start && selected <= (end ?? start);
    }
    return false;
  }
  isMonthDisabled(month) {
    for (let day = 1; day < this.getDaysCountInMonth(month, this.currentYear) + 1; day++) {
      if (this.isSelectable(day, month, this.currentYear, false)) {
        return false;
      }
    }
    return true;
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (start && end) {
      let date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === 'single';
  }
  isRangeSelection() {
    return this.selectionMode === 'range';
  }
  isMultipleSelection() {
    return this.selectionMode === 'multiple';
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year) {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event) {
    this.focus = false;
    this.onBlur.emit(event);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event, inputfield) {
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.inputFieldValue = null;
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation('monthNames')[index];
  }
  getYear(month) {
    return this.currentView === 'month' ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.disabled;
  }
  onPrevButtonClick(event) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event);
  }
  onNextButtonClick(event) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event);
  }
  onContainerButtonKeydown(event) {
    switch (event.which) {
      //tab
      case 9:
        if (!this.inline) {
          this.trapFocus(event);
        }
        break;
      //escape
      case 27:
        this.overlayVisible = false;
        event.preventDefault();
        break;
      default:
        //Noop
        break;
    }
  }
  onInputKeydown(event) {
    this.isKeydown = true;
    if (event.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event);
    } else if (event.keyCode === 27) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event.preventDefault();
      }
    } else if (event.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event.preventDefault();
      }
    } else if (event.keyCode === 9 && this.contentViewChild) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.contentViewChild.nativeElement).forEach(el => el.tabIndex = '-1');
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event, date, groupIndex) {
    const cellContent = event.currentTarget;
    const cell = cellContent.parentElement;
    switch (event.which) {
      //down arrow
      case 40:
        {
          cellContent.tabIndex = '-1';
          let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
          let nextRow = cell.parentElement.nextElementSibling;
          if (nextRow) {
            let focusCell = nextRow.children[cellIndex].children[0];
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            } else {
              nextRow.children[cellIndex].children[0].tabIndex = '0';
              nextRow.children[cellIndex].children[0].focus();
            }
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
      //up arrow
      case 38:
        {
          cellContent.tabIndex = '-1';
          let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
          let prevRow = cell.parentElement.previousElementSibling;
          if (prevRow) {
            let focusCell = prevRow.children[cellIndex].children[0];
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            } else {
              focusCell.tabIndex = '0';
              focusCell.focus();
            }
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
      //left arrow
      case 37:
        {
          cellContent.tabIndex = '-1';
          let prevCell = cell.previousElementSibling;
          if (prevCell) {
            let focusCell = prevCell.children[0];
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell.parentElement, 'p-datepicker-weeknumber')) {
              this.navigateToMonth(true, groupIndex);
            } else {
              focusCell.tabIndex = '0';
              focusCell.focus();
            }
          } else {
            this.navigateToMonth(true, groupIndex);
          }
          event.preventDefault();
          break;
        }
      //right arrow
      case 39:
        {
          cellContent.tabIndex = '-1';
          let nextCell = cell.nextElementSibling;
          if (nextCell) {
            let focusCell = nextCell.children[0];
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(focusCell, 'p-disabled')) {
              this.navigateToMonth(false, groupIndex);
            } else {
              focusCell.tabIndex = '0';
              focusCell.focus();
            }
          } else {
            this.navigateToMonth(false, groupIndex);
          }
          event.preventDefault();
          break;
        }
      //enter
      //space
      case 13:
      case 32:
        {
          this.onDateSelect(event, date);
          event.preventDefault();
          break;
        }
      //escape
      case 27:
        {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
      //tab
      case 9:
        {
          if (!this.inline) {
            this.trapFocus(event);
          }
          break;
        }
      default:
        //no op
        break;
    }
  }
  onMonthCellKeydown(event, index) {
    const cell = event.currentTarget;
    switch (event.which) {
      //arrows
      case 38:
      case 40:
        {
          cell.tabIndex = '-1';
          var cells = cell.parentElement.children;
          var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
          let nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];
          if (nextCell) {
            nextCell.tabIndex = '0';
            nextCell.focus();
          }
          event.preventDefault();
          break;
        }
      //left arrow
      case 37:
        {
          cell.tabIndex = '-1';
          let prevCell = cell.previousElementSibling;
          if (prevCell) {
            prevCell.tabIndex = '0';
            prevCell.focus();
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
      //right arrow
      case 39:
        {
          cell.tabIndex = '-1';
          let nextCell = cell.nextElementSibling;
          if (nextCell) {
            nextCell.tabIndex = '0';
            nextCell.focus();
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
      //enter
      case 13:
        {
          this.onMonthSelect(event, index);
          event.preventDefault();
          break;
        }
      //enter
      //space
      case 13:
      case 32:
        {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
      //escape
      case 27:
        {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
      //tab
      case 9:
        {
          if (!this.inline) {
            this.trapFocus(event);
          }
          break;
        }
      default:
        //no op
        break;
    }
  }
  onYearCellKeydown(event, index) {
    const cell = event.currentTarget;
    switch (event.which) {
      //arrows
      case 38:
      case 40:
        {
          cell.tabIndex = '-1';
          var cells = cell.parentElement.children;
          var cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(cell);
          let nextCell = cells[event.which === 40 ? cellIndex + 2 : cellIndex - 2];
          if (nextCell) {
            nextCell.tabIndex = '0';
            nextCell.focus();
          }
          event.preventDefault();
          break;
        }
      //left arrow
      case 37:
        {
          cell.tabIndex = '-1';
          let prevCell = cell.previousElementSibling;
          if (prevCell) {
            prevCell.tabIndex = '0';
            prevCell.focus();
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
      //right arrow
      case 39:
        {
          cell.tabIndex = '-1';
          let nextCell = cell.nextElementSibling;
          if (nextCell) {
            nextCell.tabIndex = '0';
            nextCell.focus();
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
      //enter
      //space
      case 13:
      case 32:
        {
          this.onYearSelect(event, index);
          event.preventDefault();
          break;
        }
      //escape
      case 27:
        {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
      //tab
      case 9:
        {
          this.trapFocus(event);
          break;
        }
      default:
        //no op
        break;
    }
  }
  navigateToMonth(prev, groupIndex) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
        let focusCell = cells[cells.length - 1];
        focusCell.tabIndex = '0';
        focusCell.focus();
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        let focusCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
        focusCell.tabIndex = '0';
        focusCell.focus();
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-datepicker-prev').focus();else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-datepicker-next').focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === 'month') {
            cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
          } else if (this.currentView === 'year') {
            cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
          } else {
            cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.contentViewChild.nativeElement, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === 'month') {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
          } else if (this.currentView === 'year') {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
          } else {
            cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.contentViewChild.nativeElement, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
          }
        }
        if (cell) {
          cell.tabIndex = '0';
          cell.focus();
        }
      }
      this.navigationState = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === 'month') {
      let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-monthpicker .p-monthpicker-month:not(.p-disabled)');
      let selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-monthpicker .p-monthpicker-month.p-highlight');
      cells.forEach(cell => cell.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-monthpicker .p-monthpicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach(cell => cell.tabIndex = -1);
      }
    } else if (this.currentView === 'year') {
      let cells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-yearpicker .p-yearpicker-year:not(.p-disabled)');
      let selectedCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-yearpicker .p-yearpicker-year.p-highlight');
      cells.forEach(cell => cell.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(contentEl, '.p-yearpicker .p-yearpicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach(cell => cell.tabIndex = -1);
      }
    } else {
      cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, 'span.p-highlight');
      if (!cell) {
        let todayCell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, 'td.p-datepicker-today span:not(.p-disabled):not(.p-ink)');
        if (todayCell) cell = todayCell;else cell = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(contentEl, '.p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)');
      }
    }
    if (cell) {
      cell.tabIndex = '0';
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.disabled) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event) {
    let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1) return this.hideOverlay();else if (focusedIndex === 0) return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();else focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  validateTime(hour, minute, second, pm) {
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    const valueDateString = value ? value.toDateString() : null;
    if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
      if (this.minDate.getHours() > convertedHour) {
        return false;
      }
      if (this.minDate.getHours() === convertedHour) {
        if (this.minDate.getMinutes() > minute) {
          return false;
        }
        if (this.minDate.getMinutes() === minute) {
          if (this.minDate.getSeconds() > second) {
            return false;
          }
        }
      }
    }
    if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
      if (this.maxDate.getHours() < convertedHour) {
        return false;
      }
      if (this.maxDate.getHours() === convertedHour) {
        if (this.maxDate.getMinutes() < minute) {
          return false;
        }
        if (this.maxDate.getMinutes() === minute) {
          if (this.maxDate.getSeconds() < second) {
            return false;
          }
        }
      }
    }
    return true;
  }
  incrementHour(event) {
    const prevHour = this.currentHour;
    let newHour = this.currentHour + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == '24') newHour = newHour >= 24 ? newHour - 24 : newHour;else if (this.hourFormat == '12') {
      // Before the AM/PM break, now after
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
      this.currentHour = newHour;
      this.pm = newPM;
    }
    event.preventDefault();
  }
  onTimePickerElementMouseDown(event, type, direction) {
    if (!this.disabled) {
      this.repeat(event, null, type, direction);
      event.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event) {
    if (!this.disabled) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.disabled && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event) {
    let newHour = this.currentHour - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == '24') newHour = newHour < 0 ? 24 + newHour : newHour;else if (this.hourFormat == '12') {
      // If we were at noon/midnight, then switch
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
      this.currentHour = newHour;
      this.pm = newPM;
    }
    event.preventDefault();
  }
  incrementMinute(event) {
    let newMinute = this.currentMinute + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
      this.currentMinute = newMinute;
    }
    event.preventDefault();
  }
  decrementMinute(event) {
    let newMinute = this.currentMinute - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
      this.currentMinute = newMinute;
    }
    event.preventDefault();
  }
  incrementSecond(event) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
      this.currentSecond = newSecond;
    }
    event.preventDefault();
  }
  decrementSecond(event) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
      this.currentSecond = newSecond;
    }
    event.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : new Date();
    if (this.hourFormat == '12') {
      if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];else value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event) {
    const newPM = !this.pm;
    if (this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, newPM)) {
      this.pm = newPM;
      this.updateTime();
    }
    event.preventDefault();
  }
  onUserInput(event) {
    // IE 11 Workaround for input placeholder : https://github.com/primefaces/primeng/issues/2026
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      }
    } catch (err) {
      //invalid date
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.filled = val != null && val.length;
    this.onInput.emit(event);
  }
  isValidSelection(value) {
    let isValid = true;
    if (this.isSingleSelection()) {
      if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
        isValid = false;
      }
    } else if (value.every(v => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false))) {
      if (this.isRangeSelection()) {
        isValid = value.length > 1 && value[1] > value[0] ? true : false;
      }
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(' ' + this.rangeSeparator + ' ');
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(' ');
    if (this.timeOnly) {
      date = new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == '12' ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(' '), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == '12' && !ampm) {
      throw 'Invalid Time';
    }
    this.pm = ampm === 'PM' || ampm === 'pm';
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isDate(date) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = val.getSeconds();
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
      case 'visibleTouchUI':
        if (!this.inline) {
          this.overlay = event.element;
          this.overlay.setAttribute(this.attributeSelector, '');
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI) primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.overlay, this.baseZIndex || this.config.zIndex.modal);else primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event);
        }
        break;
      case 'void':
        this.onOverlayHide();
        this.onClose.emit(event);
        break;
    }
  }
  onOverlayAnimationDone(event) {
    switch (event.toState) {
      case 'visible':
      case 'visibleTouchUI':
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case 'void':
        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.overlay, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.appendTo) {
        if (this.view === 'date') {
          this.overlay.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.overlay) + 'px';
          this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.inputfieldViewChild.nativeElement) + 'px';
        } else {
          this.overlay.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.inputfieldViewChild.nativeElement) + 'px';
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.inputfieldViewChild.nativeElement);
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.relativePosition(this.overlay, this.inputfieldViewChild.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && !this.touchUI) {
      this.mask = document.createElement('div');
      this.mask.style.zIndex = String(parseInt(element.style.zIndex) - 1);
      let maskStyleClass = 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter';
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, 'click', event => {
        this.disableModality();
      });
      document.body.appendChild(this.mask);
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(document.body, 'p-overflow-hidden');
    }
  }
  disableModality() {
    if (this.mask) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
      this.animationEndListener = this.destroyMask.bind(this);
      this.mask.addEventListener('animationend', this.animationEndListener);
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    document.body.removeChild(this.mask);
    let bodyChildren = document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.mask.removeEventListener('animationend', this.animationEndListener);
      this.animationEndListener = null;
    }
  }
  writeValue(value) {
    this.value = value;
    if (this.value && typeof this.value === 'string') {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  getDateFormat() {
    return this.dateFormat || this.getTranslation('dateFormat');
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return '';
    }
    let iFormat;
    const lookAhead = match => {
        const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      },
      formatNumber = (match, value, len) => {
        let num = '' + value;
        if (lookAhead(match)) {
          while (num.length < len) {
            num = '0' + num;
          }
        }
        return num;
      },
      formatName = (match, value, shortNames, longNames) => {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      };
    let output = '';
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case 'd':
              output += formatNumber('d', date.getDate(), 2);
              break;
            case 'D':
              output += formatName('D', date.getDay(), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES));
              break;
            case 'o':
              output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
              break;
            case 'm':
              output += formatNumber('m', date.getMonth() + 1, 2);
              break;
            case 'M':
              output += formatName('M', date.getMonth(), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES));
              break;
            case 'y':
              output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
              break;
            case '@':
              output += date.getTime();
              break;
            case '!':
              output += date.getTime() * 10000 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return '';
    }
    let output = '';
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == '12' && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == '12') {
      output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
    } else {
      output += hours < 10 ? '0' + hours : hours;
    }
    output += ':';
    output += minutes < 10 ? '0' + minutes : minutes;
    if (this.showSeconds) {
      output += ':';
      output += seconds < 10 ? '0' + seconds : seconds;
    }
    if (this.hourFormat == '12') {
      output += date.getHours() > 11 ? ' PM' : ' AM';
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(':');
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw 'Invalid time';
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == '12' && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
      throw 'Invalid time';
    } else {
      if (this.hourFormat == '12') {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw 'Invalid arguments';
    }
    value = typeof value === 'object' ? value.toString() : value + '';
    if (value === '') {
      return null;
    }
    let iFormat,
      dim,
      extra,
      iValue = 0,
      shortYearCutoff = typeof this.shortYearCutoff !== 'string' ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10),
      year = -1,
      month = -1,
      day = -1,
      doy = -1,
      literal = false,
      date,
      lookAhead = match => {
        let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      },
      getNumber = match => {
        let isDoubled = lookAhead(match),
          size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2,
          minSize = match === 'y' ? size : 1,
          digits = new RegExp('^\\d{' + minSize + ',' + size + '}'),
          num = value.substring(iValue).match(digits);
        if (!num) {
          throw 'Missing number at position ' + iValue;
        }
        iValue += num[0].length;
        return parseInt(num[0], 10);
      },
      getName = (match, shortNames, longNames) => {
        let index = -1;
        let arr = lookAhead(match) ? longNames : shortNames;
        let names = [];
        for (let i = 0; i < arr.length; i++) {
          names.push([i, arr[i]]);
        }
        names.sort((a, b) => {
          return -(a[1].length - b[1].length);
        });
        for (let i = 0; i < names.length; i++) {
          let name = names[i][1];
          if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
            index = names[i][0];
            iValue += name.length;
            break;
          }
        }
        if (index !== -1) {
          return index + 1;
        } else {
          throw 'Unknown name at position ' + iValue;
        }
      },
      checkLiteral = () => {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw 'Unexpected literal at position ' + iValue;
        }
        iValue++;
      };
    if (this.view === 'month') {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case 'd':
            day = getNumber('d');
            break;
          case 'D':
            getName('D', this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.DAY_NAMES));
            break;
          case 'o':
            doy = getNumber('o');
            break;
          case 'm':
            month = getNumber('m');
            break;
          case 'M':
            month = getName('M', this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MONTH_NAMES));
            break;
          case 'y':
            year = getNumber('y');
            break;
          case '@':
            date = new Date(getNumber('@'));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case '!':
            date = new Date((getNumber('!') - this.ticksTo1970) / 10000);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw 'Extra/unparsed characters found in date: ' + extra;
      }
    }
    if (year === -1) {
      year = new Date().getFullYear();
    } else if (year < 100) {
      year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === 'year') {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw 'Invalid date'; // E.g. 31/02/00
    }

    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  updateFilledState() {
    this.filled = this.inputFieldValue && this.inputFieldValue != '';
  }
  onTodayButtonClick(event) {
    let date = new Date();
    let dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.onDateSelect(event, dateMeta);
    this.onTodayClick.emit(event);
  }
  onClearButtonClick(event) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = document.createElement('style');
        this.responsiveStyleElement.type = 'text/css';
        document.body.appendChild(this.responsiveStyleElement);
      }
      let innerHTML = '';
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter(o => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, undefined, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentClickListener = this.renderer.listen(documentTarget, 'mousedown', event => {
          if (this.isOutsideClicked(event) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event);
              this.cd.markForCheck();
            });
          }
        });
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.documentResizeListener);
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, () => {
        if (this.overlayVisible) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  isOutsideClicked(event) {
    return !(this.el.nativeElement.isSameNode(event.target) || this.isNavIconClicked(event) || this.el.nativeElement.contains(event.target) || this.overlay && this.overlay.contains(event.target));
  }
  isNavIconClicked(event) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-prev') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-prev-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-next') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datepicker-next-icon');
  }
  onWindowResize() {
    if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
}
Calendar.ɵfac = function Calendar_Factory(t) {
  return new (t || Calendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};
Calendar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Calendar,
  selectors: [["p-calendar"]],
  contentQueries: function Calendar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Calendar_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputfieldViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 6,
  hostBindings: function Calendar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus)("p-calendar-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    style: "style",
    styleClass: "styleClass",
    inputStyle: "inputStyle",
    inputId: "inputId",
    name: "name",
    inputStyleClass: "inputStyleClass",
    placeholder: "placeholder",
    ariaLabelledBy: "ariaLabelledBy",
    iconAriaLabel: "iconAriaLabel",
    disabled: "disabled",
    dateFormat: "dateFormat",
    multipleSeparator: "multipleSeparator",
    rangeSeparator: "rangeSeparator",
    inline: "inline",
    showOtherMonths: "showOtherMonths",
    selectOtherMonths: "selectOtherMonths",
    showIcon: "showIcon",
    icon: "icon",
    appendTo: "appendTo",
    readonlyInput: "readonlyInput",
    shortYearCutoff: "shortYearCutoff",
    monthNavigator: "monthNavigator",
    yearNavigator: "yearNavigator",
    hourFormat: "hourFormat",
    timeOnly: "timeOnly",
    stepHour: "stepHour",
    stepMinute: "stepMinute",
    stepSecond: "stepSecond",
    showSeconds: "showSeconds",
    required: "required",
    showOnFocus: "showOnFocus",
    showWeek: "showWeek",
    showClear: "showClear",
    dataType: "dataType",
    selectionMode: "selectionMode",
    maxDateCount: "maxDateCount",
    showButtonBar: "showButtonBar",
    todayButtonStyleClass: "todayButtonStyleClass",
    clearButtonStyleClass: "clearButtonStyleClass",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    panelStyleClass: "panelStyleClass",
    panelStyle: "panelStyle",
    keepInvalid: "keepInvalid",
    hideOnDateTimeSelect: "hideOnDateTimeSelect",
    touchUI: "touchUI",
    timeSeparator: "timeSeparator",
    focusTrap: "focusTrap",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    tabindex: "tabindex",
    view: "view",
    defaultDate: "defaultDate",
    minDate: "minDate",
    maxDate: "maxDate",
    disabledDates: "disabledDates",
    disabledDays: "disabledDays",
    yearRange: "yearRange",
    showTime: "showTime",
    responsiveOptions: "responsiveOptions",
    numberOfMonths: "numberOfMonths",
    firstDayOfWeek: "firstDayOfWeek",
    locale: "locale"
  },
  outputs: {
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClose: "onClose",
    onSelect: "onSelect",
    onClear: "onClear",
    onInput: "onInput",
    onTodayClick: "onTodayClick",
    onClearClick: "onClearClick",
    onMonthChange: "onMonthChange",
    onYearChange: "onYearChange",
    onClickOutside: "onClickOutside",
    onShow: "onShow"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CALENDAR_VALUE_ACCESSOR])],
  ngContentSelectors: _c14,
  decls: 4,
  vars: 11,
  consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "ngIf"], [3, "class", "ngStyle", "ngClass", "click", 4, "ngIf"], ["type", "text", "autocomplete", "off", 3, "value", "readonly", "ngStyle", "placeholder", "disabled", "ngClass", "focus", "keydown", "click", "blur", "input"], ["inputfield", ""], ["class", "p-calendar-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", "class", "p-datepicker-trigger", "tabindex", "0", 3, "icon", "disabled", "click", 4, "ngIf"], [1, "p-calendar-clear-icon", "pi", "pi-times", 3, "click"], ["type", "button", "pButton", "", "pRipple", "", "tabindex", "0", 1, "p-datepicker-trigger", 3, "icon", "disabled", "click"], [3, "ngStyle", "ngClass", "click"], ["contentWrapper", ""], [4, "ngTemplateOutlet"], [4, "ngIf"], ["class", "p-timepicker", 4, "ngIf"], ["class", "p-datepicker-buttonbar", 4, "ngIf"], [1, "p-datepicker-group-container"], ["class", "p-datepicker-group", 4, "ngFor", "ngForOf"], ["class", "p-monthpicker", 4, "ngIf"], ["class", "p-yearpicker", 4, "ngIf"], [1, "p-datepicker-group"], [1, "p-datepicker-header"], ["class", "p-datepicker-prev p-link", "type", "button", "pRipple", "", 3, "keydown", "click", 4, "ngIf"], [1, "p-datepicker-title"], ["type", "button", "class", "p-datepicker-month p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-datepicker-year p-link", 3, "disabled", "click", "keydown", 4, "ngIf"], ["class", "p-datepicker-decade", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-next", "p-link", 3, "keydown", "click"], [1, "p-datepicker-next-icon", "pi", "pi-chevron-right"], ["class", "p-datepicker-calendar-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-datepicker-prev", "p-link", 3, "keydown", "click"], [1, "p-datepicker-prev-icon", "pi", "pi-chevron-left"], ["type", "button", 1, "p-datepicker-month", "p-link", 3, "disabled", "click", "keydown"], ["type", "button", 1, "p-datepicker-year", "p-link", 3, "disabled", "click", "keydown"], [1, "p-datepicker-decade"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-datepicker-calendar-container"], [1, "p-datepicker-calendar"], ["class", "p-datepicker-weekheader p-disabled", 4, "ngIf"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "p-datepicker-weekheader", "p-disabled"], ["scope", "col"], ["class", "p-datepicker-weeknumber", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-datepicker-weeknumber"], [1, "p-disabled"], [3, "ngClass"], ["draggable", "false", "pRipple", "", 3, "ngClass", "click", "keydown"], [1, "p-monthpicker"], ["class", "p-monthpicker-month", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-monthpicker-month", 3, "ngClass", "click", "keydown"], [1, "p-yearpicker"], ["class", "p-yearpicker-year", "pRipple", "", 3, "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 1, "p-yearpicker-year", 3, "ngClass", "click", "keydown"], [1, "p-timepicker"], [1, "p-hour-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave"], [1, "pi", "pi-chevron-up"], [1, "pi", "pi-chevron-down"], [1, "p-separator"], [1, "p-minute-picker"], ["class", "p-separator", 4, "ngIf"], ["class", "p-second-picker", 4, "ngIf"], ["class", "p-ampm-picker", 4, "ngIf"], [1, "p-second-picker"], [1, "p-ampm-picker"], ["type", "button", "pRipple", "", 1, "p-link", 3, "keydown", "click", "keydown.enter"], [1, "p-datepicker-buttonbar"], ["type", "button", "pButton", "", "pRipple", "", 3, "label", "ngClass", "keydown", "click"]],
  template: function Calendar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Calendar_ng_template_2_Template, 4, 17, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Calendar_div_3_Template, 9, 28, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](6, _c13, ctx.showIcon, ctx.timeOnly, ctx.disabled, ctx.focus))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inline);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inline || ctx.overlayVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple],
  styles: [".p-calendar{position:relative;display:inline-flex;max-width:100%}.p-calendar .p-inputtext{flex:1 1 auto;width:1%}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute;top:0;left:0}.p-datepicker-inline{display:inline-block;position:static;overflow-x:auto}.p-datepicker-header{display:flex;align-items:center;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-prev,.p-datepicker-next{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group{flex:1 1 auto}.p-datepicker-multiple-month .p-datepicker-group-container{display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:flex;justify-content:space-between;align-items:center}.p-timepicker{display:flex;justify-content:center;align-items:center}.p-timepicker button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:flex;align-items:center;flex-direction:column}.p-datepicker-touch-ui,.p-calendar .p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;transform:translate(-50%,-50%)}.p-yearpicker-year{width:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-calendar-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-calendar-clearable{position:relative}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('visibleTouchUI', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      transform: 'translate(-50%,-50%)',
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{showTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 1,
      transform: '*'
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => visibleTouchUI', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0,
      transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('visibleTouchUI => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
      opacity: 0,
      transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
    }))])])]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Calendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-calendar',
      template: `
        <span #container [ngClass]="{ 'p-calendar': true, 'p-calendar-w-btn': showIcon, 'p-calendar-timeonly': timeOnly, 'p-calendar-disabled': disabled, 'p-focus': focus }" [ngStyle]="style" [class]="styleClass">
            <ng-template [ngIf]="!inline">
                <input
                    #inputfield
                    type="text"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    [attr.required]="required"
                    [attr.aria-required]="required"
                    [value]="inputFieldValue"
                    (focus)="onInputFocus($event)"
                    (keydown)="onInputKeydown($event)"
                    (click)="onInputClick()"
                    (blur)="onInputBlur($event)"
                    [readonly]="readonlyInput"
                    (input)="onUserInput($event)"
                    [ngStyle]="inputStyle"
                    [class]="inputStyleClass"
                    [placeholder]="placeholder || ''"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [attr.inputmode]="touchUI ? 'off' : null"
                    [ngClass]="'p-inputtext p-component'"
                    autocomplete="off"
                    [attr.aria-labelledby]="ariaLabelledBy"
                />
                <i *ngIf="showClear && !disabled && value != null" class="p-calendar-clear-icon pi pi-times" (click)="clear()"></i>
                <button type="button" [attr.aria-label]="iconAriaLabel" [icon]="icon" pButton pRipple *ngIf="showIcon" (click)="onButtonClick($event, inputfield)" class="p-datepicker-trigger" [disabled]="disabled" tabindex="0"></button>
            </ng-template>
            <div
                #contentWrapper
                [class]="panelStyleClass"
                [ngStyle]="panelStyle"
                [ngClass]="{
                    'p-datepicker p-component': true,
                    'p-datepicker-inline': inline,
                    'p-disabled': disabled,
                    'p-datepicker-timeonly': timeOnly,
                    'p-datepicker-multiple-month': this.numberOfMonths > 1,
                    'p-datepicker-monthpicker': view === 'month',
                    'p-datepicker-touch-ui': touchUI
                }"
                [@overlayAnimation]="
                    touchUI
                        ? { value: 'visibleTouchUI', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }
                        : { value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }
                "
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationDone($event)"
                (click)="onOverlayClick($event)"
                *ngIf="inline || overlayVisible"
            >
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="!timeOnly">
                    <div class="p-datepicker-group-container">
                        <div class="p-datepicker-group" *ngFor="let month of months; let i = index">
                            <div class="p-datepicker-header">
                                <button (keydown)="onContainerButtonKeydown($event)" class="p-datepicker-prev p-link" (click)="onPrevButtonClick($event)" *ngIf="i === 0" type="button" pRipple>
                                    <span class="p-datepicker-prev-icon pi pi-chevron-left"></span>
                                </button>
                                <div class="p-datepicker-title">
                                    <button type="button" (click)="switchToMonthView($event)" (keydown)="onContainerButtonKeydown($event)" *ngIf="currentView === 'date'" class="p-datepicker-month p-link" [disabled]="switchViewButtonDisabled()">
                                        {{ getMonthName(month.month) }}
                                    </button>
                                    <button type="button" (click)="switchToYearView($event)" (keydown)="onContainerButtonKeydown($event)" *ngIf="currentView !== 'year'" class="p-datepicker-year p-link" [disabled]="switchViewButtonDisabled()">
                                        {{ getYear(month) }}
                                    </button>
                                    <span class="p-datepicker-decade" *ngIf="currentView === 'year'">
                                        <ng-container *ngIf="!decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                        <ng-container *ngTemplateOutlet="decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                    </span>
                                </div>
                                <button
                                    (keydown)="onContainerButtonKeydown($event)"
                                    class="p-datepicker-next p-link"
                                    (click)="onNextButtonClick($event)"
                                    [style.display]="numberOfMonths === 1 ? 'inline-flex' : i === numberOfMonths - 1 ? 'inline-flex' : 'none'"
                                    type="button"
                                    pRipple
                                >
                                    <span class="p-datepicker-next-icon pi pi-chevron-right"></span>
                                </button>
                            </div>
                            <div class="p-datepicker-calendar-container" *ngIf="currentView === 'date'">
                                <table class="p-datepicker-calendar">
                                    <thead>
                                        <tr>
                                            <th *ngIf="showWeek" class="p-datepicker-weekheader p-disabled">
                                                <span>{{ getTranslation('weekHeader') }}</span>
                                            </th>
                                            <th scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                                <span>{{ weekDay }}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let week of month.dates; let j = index">
                                            <td *ngIf="showWeek" class="p-datepicker-weeknumber">
                                                <span class="p-disabled">
                                                    {{ month.weekNumbers[j] }}
                                                </span>
                                            </td>
                                            <td *ngFor="let date of week" [ngClass]="{ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }">
                                                <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                                    <span [ngClass]="{ 'p-highlight': isSelected(date), 'p-disabled': !date.selectable }" (click)="onDateSelect($event, date)" draggable="false" (keydown)="onDateCellKeydown($event, date, i)" pRipple>
                                                        <ng-container *ngIf="!dateTemplate">{{ date.day }}</ng-container>
                                                        <ng-container *ngTemplateOutlet="dateTemplate; context: { $implicit: date }"></ng-container>
                                                    </span>
                                                </ng-container>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="p-monthpicker" *ngIf="currentView === 'month'">
                        <span
                            *ngFor="let m of monthPickerValues(); let i = index"
                            (click)="onMonthSelect($event, i)"
                            (keydown)="onMonthCellKeydown($event, i)"
                            class="p-monthpicker-month"
                            [ngClass]="{ 'p-highlight': isMonthSelected(i), 'p-disabled': isMonthDisabled(i) }"
                            pRipple
                        >
                            {{ m }}
                        </span>
                    </div>
                    <div class="p-yearpicker" *ngIf="currentView === 'year'">
                        <span *ngFor="let y of yearPickerValues()" (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" class="p-yearpicker-year" [ngClass]="{ 'p-highlight': isYearSelected(y) }" pRipple>
                            {{ y }}
                        </span>
                    </div>
                </ng-container>
                <div class="p-timepicker" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                    <div class="p-hour-picker">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementHour($event)"
                            (keydown.space)="incrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementHour($event)"
                            (keydown.space)="decrementHour($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-separator">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-minute-picker">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementMinute($event)"
                            (keydown.space)="incrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementMinute($event)"
                            (keydown.space)="decrementMinute($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-separator" *ngIf="showSeconds">
                        <span>{{ timeSeparator }}</span>
                    </div>
                    <div class="p-second-picker" *ngIf="showSeconds">
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="incrementSecond($event)"
                            (keydown.space)="incrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                        <button
                            class="p-link"
                            type="button"
                            (keydown)="onContainerButtonKeydown($event)"
                            (keydown.enter)="decrementSecond($event)"
                            (keydown.space)="decrementSecond($event)"
                            (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                            (mouseup)="onTimePickerElementMouseUp($event)"
                            (keyup.enter)="onTimePickerElementMouseUp($event)"
                            (keyup.space)="onTimePickerElementMouseUp($event)"
                            (mouseleave)="onTimePickerElementMouseLeave()"
                            pRipple
                        >
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                    <div class="p-ampm-picker" *ngIf="hourFormat == '12'">
                        <button class="p-link" type="button" (keydown)="onContainerButtonKeydown($event)" (click)="toggleAMPM($event)" (keydown.enter)="toggleAMPM($event)" pRipple>
                            <span class="pi pi-chevron-up"></span>
                        </button>
                        <span>{{ pm ? 'PM' : 'AM' }}</span>
                        <button class="p-link" type="button" (keydown)="onContainerButtonKeydown($event)" (click)="toggleAMPM($event)" (keydown.enter)="toggleAMPM($event)" pRipple>
                            <span class="pi pi-chevron-down"></span>
                        </button>
                    </div>
                </div>
                <div class="p-datepicker-buttonbar" *ngIf="showButtonBar">
                    <button type="button" [label]="getTranslation('today')" (keydown)="onContainerButtonKeydown($event)" (click)="onTodayButtonClick($event)" pButton pRipple [ngClass]="[todayButtonStyleClass]"></button>
                    <button type="button" [label]="getTranslation('clear')" (keydown)="onContainerButtonKeydown($event)" (click)="onClearButtonClick($event)" pButton pRipple [ngClass]="[clearButtonStyleClass]"></button>
                </div>
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </span>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('visibleTouchUI', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translate(-50%,-50%)',
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{showTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1,
        transform: '*'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => visibleTouchUI', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('visibleTouchUI => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0,
        transform: 'translate3d(-50%, -40%, 0) scale(0.9)'
      }))])])],
      host: {
        class: 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': 'focus',
        '[class.p-calendar-clearable]': 'showClear && !disabled'
      },
      providers: [CALENDAR_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".p-calendar{position:relative;display:inline-flex;max-width:100%}.p-calendar .p-inputtext{flex:1 1 auto;width:1%}.p-calendar-w-btn .p-inputtext{border-top-right-radius:0;border-bottom-right-radius:0}.p-calendar-w-btn .p-datepicker-trigger{border-top-left-radius:0;border-bottom-left-radius:0}.p-fluid .p-calendar{display:flex}.p-fluid .p-calendar .p-inputtext{width:1%}.p-calendar .p-datepicker{min-width:100%}.p-datepicker{width:auto;position:absolute;top:0;left:0}.p-datepicker-inline{display:inline-block;position:static;overflow-x:auto}.p-datepicker-header{display:flex;align-items:center;justify-content:space-between}.p-datepicker-header .p-datepicker-title{margin:0 auto}.p-datepicker-prev,.p-datepicker-next{cursor:pointer;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group{flex:1 1 auto}.p-datepicker-multiple-month .p-datepicker-group-container{display:flex}.p-datepicker table{width:100%;border-collapse:collapse}.p-datepicker td>span{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;overflow:hidden;position:relative}.p-monthpicker-month{width:33.3%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-datepicker-buttonbar{display:flex;justify-content:space-between;align-items:center}.p-timepicker{display:flex;justify-content:center;align-items:center}.p-timepicker button{display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-timepicker>div{display:flex;align-items:center;flex-direction:column}.p-datepicker-touch-ui,.p-calendar .p-datepicker-touch-ui{position:fixed;top:50%;left:50%;min-width:80vw;transform:translate(-50%,-50%)}.p-yearpicker-year{width:50%;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;position:relative}.p-calendar-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-calendar-clearable{position:relative}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multipleSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rangeSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showOtherMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectOtherMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonlyInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shortYearCutoff: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    monthNavigator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yearNavigator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hourFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    timeOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepSecond: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDateCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showButtonBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    todayButtonStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearButtonStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keepInvalid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideOnDateTimeSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    touchUI: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    timeSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusTrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onTodayClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClearClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMonthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onYearChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClickOutside: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container', {
        static: false
      }]
    }],
    inputfieldViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inputfield', {
        static: false
      }]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentWrapper', {
        static: false
      }]
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabledDates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabledDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yearRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsiveOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numberOfMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstDayOfWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CalendarModule {}
CalendarModule.ɵfac = function CalendarModule_Factory(t) {
  return new (t || CalendarModule)();
};
CalendarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CalendarModule
});
CalendarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule],
      exports: [Calendar, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
      declarations: [Calendar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-calendar.mjs.map

/***/ }),

/***/ 2348:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-chart.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartModule": () => (/* binding */ ChartModule),
/* harmony export */   "UIChart": () => (/* binding */ UIChart)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 670);




class UIChart {
  constructor(el) {
    this.el = el;
    this.plugins = [];
    this.responsive = true;
    this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._options = {};
  }
  get data() {
    return this._data;
  }
  set data(val) {
    this._data = val;
    this.reinit();
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    this.reinit();
  }
  ngAfterViewInit() {
    this.initChart();
    this.initialized = true;
  }
  onCanvasClick(event) {
    if (this.chart) {
      const element = this.chart.getElementsAtEventForMode(event, 'nearest', {
        intersect: true
      }, false);
      const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', {
        intersect: true
      }, false);
      if (element && element[0] && dataset) {
        this.onDataSelect.emit({
          originalEvent: event,
          element: element[0],
          dataset: dataset
        });
      }
    }
  }
  initChart() {
    let opts = this.options || {};
    opts.responsive = this.responsive;
    // allows chart to resize in responsive mode
    if (opts.responsive && (this.height || this.width)) {
      opts.maintainAspectRatio = false;
    }
    this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](this.el.nativeElement.children[0].children[0], {
      type: this.type,
      data: this.data,
      options: this.options,
      plugins: this.plugins
    });
  }
  getCanvas() {
    return this.el.nativeElement.children[0].children[0];
  }
  getBase64Image() {
    return this.chart.toBase64Image();
  }
  generateLegend() {
    if (this.chart) {
      return this.chart.generateLegend();
    }
  }
  refresh() {
    if (this.chart) {
      this.chart.update();
    }
  }
  reinit() {
    if (this.chart) {
      this.chart.destroy();
      this.initChart();
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.initialized = false;
      this.chart = null;
    }
  }
}
UIChart.ɵfac = function UIChart_Factory(t) {
  return new (t || UIChart)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};
UIChart.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UIChart,
  selectors: [["p-chart"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    type: "type",
    plugins: "plugins",
    width: "width",
    height: "height",
    responsive: "responsive",
    data: "data",
    options: "options"
  },
  outputs: {
    onDataSelect: "onDataSelect"
  },
  decls: 2,
  vars: 6,
  consts: [[2, "position", "relative"], [3, "click"]],
  template: function UIChart_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "canvas", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UIChart_Template_canvas_click_1_listener($event) {
        return ctx.onCanvasClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.responsive && !ctx.width ? null : ctx.width)("height", ctx.responsive && !ctx.height ? null : ctx.height);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("width", ctx.responsive && !ctx.width ? null : ctx.width)("height", ctx.responsive && !ctx.height ? null : ctx.height);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UIChart, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'p-chart',
      template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onDataSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class ChartModule {}
ChartModule.ɵfac = function ChartModule_Factory(t) {
  return new (t || ChartModule)();
};
ChartModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChartModule
});
ChartModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [UIChart],
      declarations: [UIChart]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-chart.mjs.map

/***/ }),

/***/ 749:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-checkbox.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKBOX_VALUE_ACCESSOR": () => (/* binding */ CHECKBOX_VALUE_ACCESSOR),
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox),
/* harmony export */   "CheckboxModule": () => (/* binding */ CheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 8549);






const _c0 = ["cb"];
const _c1 = function (a1, a2, a3) {
  return {
    "p-checkbox-label": true,
    "p-checkbox-label-active": a1,
    "p-disabled": a2,
    "p-checkbox-label-focus": a3
  };
};
function Checkbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkbox_label_6_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onClick($event, _r0, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.labelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c1, ctx_r1.checked(), ctx_r1.disabled, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r1.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
  }
}
const _c2 = function (a1, a2, a3) {
  return {
    "p-checkbox p-component": true,
    "p-checkbox-checked": a1,
    "p-checkbox-disabled": a2,
    "p-checkbox-focused": a3
  };
};
const _c3 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-focus": a2
  };
};
const CHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Checkbox),
  multi: true
};
class Checkbox {
  constructor(cd) {
    this.cd = cd;
    this.checkboxIcon = 'pi pi-check';
    this.trueValue = true;
    this.falseValue = false;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
    this.focused = false;
  }
  onClick(event, checkbox, focus) {
    event.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.updateModel(event);
    if (focus) {
      checkbox.focus();
    }
  }
  updateModel(event) {
    let newModelValue;
    if (!this.binary) {
      if (this.checked()) newModelValue = this.model.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(val, this.value));else newModelValue = this.model ? [...this.model, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.model = newModelValue;
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this.checked() ? this.falseValue : this.trueValue;
      this.model = newModelValue;
      this.onModelChange(newModelValue);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  writeValue(model) {
    this.model = model;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  checked() {
    return this.binary ? this.model === this.trueValue : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.contains(this.value, this.model);
  }
}
Checkbox.ɵfac = function Checkbox_Factory(t) {
  return new (t || Checkbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
Checkbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Checkbox,
  selectors: [["p-checkbox"]],
  viewQuery: function Checkbox_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    value: "value",
    name: "name",
    disabled: "disabled",
    binary: "binary",
    label: "label",
    ariaLabelledBy: "ariaLabelledBy",
    ariaLabel: "ariaLabel",
    tabindex: "tabindex",
    inputId: "inputId",
    style: "style",
    styleClass: "styleClass",
    labelStyleClass: "labelStyleClass",
    formControl: "formControl",
    checkboxIcon: "checkboxIcon",
    readonly: "readonly",
    required: "required",
    trueValue: "trueValue",
    falseValue: "falseValue"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])],
  decls: 7,
  vars: 26,
  consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "readonly", "value", "checked", "disabled", "focus", "blur", "change"], ["cb", ""], [1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]],
  template: function Checkbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Checkbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function Checkbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      })("change", function Checkbox_Template_input_change_2_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkbox_Template_div_click_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event, _r0, true));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Checkbox_label_6_Template, 2, 9, "label", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c2, ctx.checked(), ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.readonly)("value", ctx.value)("checked", ctx.checked())("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked())("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c3, ctx.checked(), ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.checked() ? ctx.checkboxIcon : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: [".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Checkbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-checkbox',
      template: `
        <div [ngStyle]="style" [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-checked': checked(), 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused }" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input
                    #cb
                    type="checkbox"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    [readonly]="readonly"
                    [value]="value"
                    [checked]="checked()"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    (change)="handleChange($event)"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-checked]="checked()"
                    [attr.required]="required"
                />
            </div>
            <div class="p-checkbox-box" (click)="onClick($event, cb, true)" [ngClass]="{ 'p-highlight': checked(), 'p-disabled': disabled, 'p-focus': focused }">
                <span class="p-checkbox-icon" [ngClass]="checked() ? checkboxIcon : null"></span>
            </div>
        </div>
        <label
            (click)="onClick($event, cb, true)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-checkbox-label': true, 'p-checkbox-label-active': checked(), 'p-disabled': disabled, 'p-checkbox-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            >{{ label }}</label
        >
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    binary: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trueValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    falseValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['cb']
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class CheckboxModule {}
CheckboxModule.ɵfac = function CheckboxModule_Factory(t) {
  return new (t || CheckboxModule)();
};
CheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CheckboxModule
});
CheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [Checkbox],
      declarations: [Checkbox]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-checkbox.mjs.map

/***/ }),

/***/ 850:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-multiselect.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MULTISELECT_VALUE_ACCESSOR": () => (/* binding */ MULTISELECT_VALUE_ACCESSOR),
/* harmony export */   "MultiSelect": () => (/* binding */ MultiSelect),
/* harmony export */   "MultiSelectItem": () => (/* binding */ MultiSelectItem),
/* harmony export */   "MultiSelectModule": () => (/* binding */ MultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ 1420);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/overlay */ 9053);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 4538);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/scroller */ 3705);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ 8549);

















function MultiSelectItem_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function MultiSelectItem_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    height: a0
  };
};
const _c1 = function (a0, a1) {
  return {
    "p-highlight": a0,
    "p-disabled": a1
  };
};
const _c2 = function (a0) {
  return {
    "p-highlight": a0
  };
};
const _c3 = function (a0) {
  return {
    "pi pi-check": a0
  };
};
const _c4 = function (a0) {
  return {
    $implicit: a0
  };
};
const _c5 = ["container"];
const _c6 = ["overlay"];
const _c7 = ["filterInput"];
const _c8 = ["in"];
const _c9 = ["items"];
const _c10 = ["scroller"];
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.valuesAsString || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.removeChip(item_r11, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16, 17)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_container_7_ng_container_2_div_1_span_4_Template, 1, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.findLabelByValue(item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.disabled);
  }
}
function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.placeholder || ctx_r10.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.value || ctx_r8.value.length === 0);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "chip");
  }
}
function MultiSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_i_9_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MultiSelect_ng_template_14_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_div_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c11 = function (a0) {
  return {
    options: a0
  };
};
function MultiSelect_ng_template_14_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_div_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, ctx_r27.filterOptions));
  }
}
const _c12 = function (a0) {
  return {
    "p-checkbox-disabled": a0
  };
};
const _c13 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-focus": a1,
    "p-disabled": a2
  };
};
function MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "div", 2)(2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.onHeaderCheckboxFocus());
    })("blur", function MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.onHeaderCheckboxBlur());
    })("keydown.space", function MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template_input_keydown_space_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.toggleAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.toggleAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c12, ctx_r31.disabled || ctx_r31.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r31.allChecked)("disabled", ctx_r31.disabled || ctx_r31.toggleAllDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c13, ctx_r31.allChecked, ctx_r31.headerCheckboxFocus, ctx_r31.disabled || ctx_r31.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx_r31.allChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx_r31.allChecked));
  }
}
function MultiSelect_ng_template_14_div_1_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MultiSelect_ng_template_14_div_1_ng_template_4_div_1_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.onFilterInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r32.filterValue || "")("disabled", ctx_r32.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx_r32.autocomplete)("placeholder", ctx_r32.filterPlaceHolder)("aria-label", ctx_r32.ariaFilterLabel);
  }
}
function MultiSelect_ng_template_14_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_14_div_1_ng_template_4_div_0_Template, 5, 14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_div_1_ng_template_4_div_1_Template, 4, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_14_div_1_ng_template_4_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.showToggleAll && !ctx_r29.selectionLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.filter);
  }
}
function MultiSelect_ng_template_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_div_1_ng_container_2_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_14_div_1_ng_container_3_Template, 2, 4, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_template_14_div_1_ng_template_4_Template, 4, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.filterTemplate)("ngIfElse", _r28);
  }
}
function MultiSelect_ng_template_14_p_scroller_3_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c14 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function MultiSelect_ng_template_14_p_scroller_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_14_p_scroller_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const items_r46 = ctx.$implicit;
    const scrollerOptions_r47 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c14, items_r46, scrollerOptions_r47));
  }
}
function MultiSelect_ng_template_14_p_scroller_3_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_p_scroller_3_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_14_p_scroller_3_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const scrollerOptions_r50 = ctx.options;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r49.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, scrollerOptions_r50));
  }
}
function MultiSelect_ng_template_14_p_scroller_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_p_scroller_3_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function MultiSelect_ng_template_14_p_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function MultiSelect_ng_template_14_p_scroller_3_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r52.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_p_scroller_3_ng_template_2_Template, 1, 5, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_14_p_scroller_3_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r21.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r21.optionsToRender)("itemSize", ctx_r21.virtualScrollItemSize || ctx_r21._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r21.lazy)("options", ctx_r21.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.loaderTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c15 = function () {
  return {};
};
function MultiSelect_ng_template_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c14, ctx_r22.optionsToRender, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c15)));
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optgroup_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.getOptionGroupLabel(optgroup_r65) || "empty");
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_span_1_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const optgroup_r65 = ctx.$implicit;
    const scrollerOptions_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).options;
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, scrollerOptions_r56.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r64.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r64.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c4, optgroup_r65));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r60)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r64.getOptionGroupChildren(optgroup_r65)));
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_template_5_ng_container_2_ng_template_1_Template, 4, 12, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const items_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r55);
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_template_5_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const items_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r60)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, items_r55));
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_template_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-multiSelectItem", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MultiSelect_ng_template_14_ng_template_5_ng_template_4_ng_template_0_Template_p_multiSelectItem_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r79.onOptionClick($event));
    })("onKeydown", function MultiSelect_ng_template_14_ng_template_5_ng_template_4_ng_template_0_Template_p_multiSelectItem_onKeydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r81.onOptionKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r77 = ctx.$implicit;
    const scrollerOptions_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).options;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("option", option_r77)("selected", ctx_r76.isSelected(option_r77))("label", ctx_r76.getOptionLabel(option_r77))("disabled", ctx_r76.isOptionDisabled(option_r77))("template", ctx_r76.itemTemplate)("itemSize", scrollerOptions_r56.itemSize);
  }
}
function MultiSelect_ng_template_14_ng_template_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_14_ng_template_5_ng_template_4_ng_template_0_Template, 1, 6, "ng-template", 51);
  }
  if (rf & 2) {
    const optionsToDisplay_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", optionsToDisplay_r74);
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r83.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 55);
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_template_5_li_6_ng_container_1_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_ng_template_5_li_6_ng_container_2_Template, 2, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r56.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r62.emptyFilterTemplate && !ctx_r62.emptyTemplate)("ngIfElse", ctx_r62.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r62.emptyFilterTemplate || ctx_r62.emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r87.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 56);
  }
}
function MultiSelect_ng_template_14_ng_template_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_ng_template_5_li_7_ng_container_1_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_ng_template_5_li_7_ng_container_2_Template, 2, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r56.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r63.emptyTemplate)("ngIfElse", ctx_r63.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r63.emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_ng_template_5_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_14_ng_template_5_ng_container_3_Template, 2, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_template_14_ng_template_5_ng_template_4_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelect_ng_template_14_ng_template_5_li_6_Template, 3, 6, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_template_14_ng_template_5_li_7_Template, 3, 6, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r56 = ctx.options;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r56.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r56.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r24.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.hasFilter() && ctx_r24.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r24.hasFilter() && ctx_r24.isEmpty());
  }
}
function MultiSelect_ng_template_14_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_14_div_7_ng_container_2_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r25.footerTemplate);
  }
}
const _c16 = function () {
  return ["p-multiselect-panel p-component"];
};
function MultiSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MultiSelect_ng_template_14_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r92.onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_14_div_1_Template, 6, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_14_p_scroller_3_Template, 4, 11, "p-scroller", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_template_14_ng_container_4_Template, 2, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_ng_template_14_ng_template_5_Template, 8, 7, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_template_14_div_7_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c16))("ngStyle", ctx_r6.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.footerFacet || ctx_r6.footerTemplate);
  }
}
const _c17 = [[["p-header"]], [["p-footer"]]];
const _c18 = function (a1, a2, a3, a4) {
  return {
    "p-multiselect p-component": true,
    "p-multiselect-open": a1,
    "p-multiselect-chip": a2,
    "p-focus": a3,
    "p-disabled": a4
  };
};
const _c19 = function (a0, a1) {
  return {
    "p-placeholder": a0,
    "p-multiselect-label-empty": a1
  };
};
const _c20 = function () {
  return {
    "p-multiselect-trigger": true
  };
};
const _c21 = ["p-header", "p-footer"];
const MULTISELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MultiSelect),
  multi: true
};
class MultiSelectItem {
  constructor() {
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  onOptionKeydown(event) {
    this.onKeydown.emit({
      originalEvent: event,
      option: this.option
    });
  }
}
MultiSelectItem.ɵfac = function MultiSelectItem_Factory(t) {
  return new (t || MultiSelectItem)();
};
MultiSelectItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MultiSelectItem,
  selectors: [["p-multiSelectItem"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    option: "option",
    selected: "selected",
    label: "label",
    disabled: "disabled",
    itemSize: "itemSize",
    template: "template"
  },
  outputs: {
    onClick: "onClick",
    onKeydown: "onKeydown"
  },
  decls: 6,
  vars: 20,
  consts: [["pRipple", "", 1, "p-multiselect-item", 3, "ngStyle", "ngClass", "click", "keydown"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function MultiSelectItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectItem_Template_li_click_0_listener($event) {
        return ctx.onOptionClick($event);
      })("keydown", function MultiSelectItem_Template_li_keydown_0_listener($event) {
        return ctx.onOptionKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectItem_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.selected, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("tabindex", ctx.disabled ? null : "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.selected));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.selected));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx.option));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelectItem',
      template: `
        <li
            class="p-multiselect-item"
            (click)="onOptionClick($event)"
            (keydown)="onOptionKeydown($event)"
            [attr.aria-label]="label"
            [attr.tabindex]="disabled ? null : '0'"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-highlight': selected, 'p-disabled': disabled }"
            pRipple
        >
            <div class="p-checkbox p-component">
                <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': selected }">
                    <span class="p-checkbox-icon" [ngClass]="{ 'pi pi-check': selected }"></span>
                </div>
            </div>
            <span *ngIf="!template">{{ label }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], null, {
    option: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class MultiSelect {
  constructor(el, renderer, cd, zone, filterService, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.overlayService = overlayService;
    this.filter = true;
    this.displaySelectedLabel = true;
    this.maxSelectedLabels = 3;
    this.selectedItemsLabel = 'ellipsis';
    this.showToggleAll = true;
    this.emptyFilterMessage = '';
    this.emptyMessage = '';
    this.resetFilterOnHide = false;
    this.dropdownIcon = 'pi pi-chevron-down';
    this.optionGroupChildren = 'items';
    this.showHeader = true;
    this.scrollHeight = '200px';
    this.lazy = false;
    this.filterMatchMode = 'contains';
    this.tooltip = '';
    this.tooltipPosition = 'right';
    this.tooltipPositionStyle = 'absolute';
    this.autofocusFilter = true;
    this.display = 'comma';
    this.autocomplete = 'on';
    this.showClear = false;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
  }
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
  }
  set defaultLabel(val) {
    this._defaultLabel = val;
    this.updateLabel();
  }
  get defaultLabel() {
    return this._defaultLabel;
  }
  set placeholder(val) {
    this._placeholder = val;
    this.updateLabel();
  }
  get placeholder() {
    return this._placeholder;
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    this.updateLabel();
  }
  get filterValue() {
    return this._filterValue;
  }
  set filterValue(val) {
    this._filterValue = val;
    this.activateFilter();
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
  }
  ngOnInit() {
    this.updateLabel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: value => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'selectedItems':
          this.selectedItemsTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'loader':
          this.loaderTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.overlayVisible) {
      this.show();
    }
  }
  ngAfterViewChecked() {
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  getOptionLabel(option) {
    return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label != undefined ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  isOptionDisabled(option) {
    let disabled = this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
    return disabled || this.maxSelectionLimitReached && !this.isSelected(option);
  }
  writeValue(value) {
    this.value = value;
    this.updateLabel();
    this.updateFilledState();
    this.checkSelectionLimit();
    this.cd.markForCheck();
  }
  checkSelectionLimit() {
    if (this.selectionLimit && this.value && this.value.length === this.selectionLimit) {
      this.maxSelectionLimitReached = true;
    } else {
      this.maxSelectionLimitReached = false;
    }
  }
  updateFilledState() {
    this.filled = this.value && this.value.length > 0;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onOptionClick(event) {
    let option = event.option;
    if (this.isOptionDisabled(option)) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let selectionIndex = this.findSelectionIndex(optionValue);
    if (selectionIndex != -1) {
      this.value = this.value.filter((val, i) => i != selectionIndex);
      this.onRemove.emit({
        newValue: this.value,
        removed: optionValue
      });
      if (this.selectionLimit) {
        this.maxSelectionLimitReached = false;
      }
    } else {
      if (!this.selectionLimit || !this.value || this.value.length < this.selectionLimit) {
        this.value = [...(this.value || []), optionValue];
      }
      this.checkSelectionLimit();
    }
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event.originalEvent,
      value: this.value,
      itemValue: optionValue
    });
    this.updateLabel();
    this.updateFilledState();
  }
  isSelected(option) {
    return this.findSelectionIndex(this.getOptionValue(option)) != -1;
  }
  findSelectionIndex(val) {
    let index = -1;
    if (this.value) {
      for (let i = 0; i < this.value.length; i++) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  get toggleAllDisabled() {
    let optionsToRender = this.optionsToRender;
    if (!optionsToRender || optionsToRender.length === 0) {
      return true;
    } else {
      for (let option of optionsToRender) {
        if (!this.isOptionDisabled(option)) return false;
      }
      return true;
    }
  }
  toggleAll(event) {
    if (this.disabled || this.toggleAllDisabled || this.readonly) {
      return;
    }
    let allChecked = this.allChecked;
    if (allChecked) this.uncheckAll();else this.checkAll();
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.updateFilledState();
    this.updateLabel();
    event.preventDefault();
  }
  checkAll() {
    let optionsToRender = this.optionsToRender;
    let val = [];
    optionsToRender.forEach(opt => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);
        if (!optionDisabled || optionDisabled && this.isSelected(opt)) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        let subOptions = this.getOptionGroupChildren(opt);
        if (subOptions) {
          subOptions.forEach(option => {
            let optionDisabled = this.isOptionDisabled(option);
            if (!optionDisabled || optionDisabled && this.isSelected(option)) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });
    this.value = val;
  }
  uncheckAll() {
    let optionsToRender = this.optionsToRender;
    let val = [];
    optionsToRender.forEach(opt => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);
        if (optionDisabled && this.isSelected(opt)) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        if (opt.items) {
          opt.items.forEach(option => {
            let optionDisabled = this.isOptionDisabled(option);
            if (optionDisabled && this.isSelected(option)) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });
    this.value = val;
  }
  show() {
    if (!this.overlayVisible) {
      this.overlayVisible = true;
      this.preventDocumentDefault = true;
      this.cd.markForCheck();
    }
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild.nativeElement);
        if (this.filterInputChild && this.filterInputChild.nativeElement) {
          this.preventModelTouched = true;
          if (this.autofocusFilter) {
            this.filterInputChild.nativeElement.focus();
          }
        }
        this.onPanelShow.emit();
        break;
      case 'void':
        this.onModelTouched();
        break;
    }
  }
  hide() {
    this.overlayVisible = false;
    if (this.resetFilterOnHide) {
      this.resetFilter();
    }
    this.onPanelHide.emit();
    this.cd.markForCheck();
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = '';
    }
    this._filterValue = null;
    this._filteredOptions = null;
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = null;
    this.updateLabel();
    this.updateFilledState();
    this.onClear.emit();
    this.onModelChange(this.value);
    event.stopPropagation();
  }
  onMouseclick(event, input) {
    if (this.disabled || this.readonly || event.target.isSameNode(this.accessibleViewChild.nativeElement)) {
      return;
    }
    this.onClick.emit(event);
    if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target) && !primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(event.target, 'p-multiselect-token-icon')) {
      if (this.overlayVisible) {
        this.hide();
      } else {
        this.show();
      }
      input.focus();
    }
  }
  removeChip(chip, event) {
    this.value = this.value.filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(val, chip, this.dataKey));
    this.onModelChange(this.value);
    this.checkSelectionLimit();
    this.onChange.emit({
      originalEvent: event,
      value: this.value,
      itemValue: chip
    });
    this.updateLabel();
    this.updateFilledState();
  }
  onInputFocus(event) {
    this.focus = true;
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focus = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onOptionKeydown(event) {
    if (this.readonly) {
      return;
    }
    switch (event.originalEvent.which) {
      //down
      case 40:
        var nextItem = this.findNextItem(event.originalEvent.target.parentElement);
        if (nextItem) {
          nextItem.focus();
        }
        event.originalEvent.preventDefault();
        break;
      //up
      case 38:
        var prevItem = this.findPrevItem(event.originalEvent.target.parentElement);
        if (prevItem) {
          prevItem.focus();
        }
        event.originalEvent.preventDefault();
        break;
      //enter
      case 13:
        this.onOptionClick(event);
        event.originalEvent.preventDefault();
        break;
      case 27:
      case 9:
        this.hide();
        break;
    }
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isHidden(nextItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.isHidden(prevItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_5__.DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];else return null;
  }
  onKeydown(event) {
    switch (event.which) {
      //down
      case 40:
        if (!this.overlayVisible && event.altKey) {
          this.show();
          event.preventDefault();
        }
        break;
      //space
      case 32:
        if (!this.overlayVisible) {
          this.show();
          event.preventDefault();
        }
        break;
      //escape
      case 27:
        this.hide();
        break;
    }
  }
  updateLabel() {
    if (this.value && this.options && this.value.length && this.displaySelectedLabel) {
      let label = '';
      for (let i = 0; i < this.value.length; i++) {
        let itemLabel = this.findLabelByValue(this.value[i]);
        if (itemLabel) {
          if (label.length > 0) {
            label = label + ', ';
          }
          label = label + itemLabel;
        }
      }
      if (this.value.length <= this.maxSelectedLabels || this.selectedItemsLabel === 'ellipsis') {
        this.valuesAsString = label;
      } else {
        let pattern = /{(.*?)}/;
        if (pattern.test(this.selectedItemsLabel)) {
          this.valuesAsString = this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.value.length + '');
        } else {
          this.valuesAsString = this.selectedItemsLabel;
        }
      }
    } else {
      this.valuesAsString = this.placeholder || this.defaultLabel;
    }
  }
  findLabelByValue(val) {
    if (this.group) {
      let label = null;
      for (let i = 0; i < this.options.length; i++) {
        let subOptions = this.getOptionGroupChildren(this.options[i]);
        if (subOptions) {
          label = this.searchLabelByValue(val, subOptions);
          if (label) {
            break;
          }
        }
      }
      return label;
    } else {
      return this.searchLabelByValue(val, this.options);
    }
  }
  searchLabelByValue(val, options) {
    let label = null;
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionValue = this.getOptionValue(option);
      if (val == null && optionValue == null || primeng_utils__WEBPACK_IMPORTED_MODULE_4__.ObjectUtils.equals(val, optionValue, this.dataKey)) {
        label = this.getOptionLabel(option);
        break;
      }
    }
    return label;
  }
  get allChecked() {
    let optionsToRender = this.optionsToRender;
    if (!optionsToRender || optionsToRender.length === 0) {
      return false;
    } else {
      let selectedDisabledItemsLength = 0;
      let unselectedDisabledItemsLength = 0;
      let selectedEnabledItemsLength = 0;
      let visibleOptionsLength = this.group ? 0 : this.optionsToRender.length;
      for (let option of optionsToRender) {
        if (!this.group) {
          let disabled = this.isOptionDisabled(option);
          let selected = this.isSelected(option);
          if (disabled) {
            if (selected) selectedDisabledItemsLength++;else unselectedDisabledItemsLength++;
          } else {
            if (selected) selectedEnabledItemsLength++;else return false;
          }
        } else {
          for (let opt of this.getOptionGroupChildren(option)) {
            let disabled = this.isOptionDisabled(opt);
            let selected = this.isSelected(opt);
            if (disabled) {
              if (selected) selectedDisabledItemsLength++;else unselectedDisabledItemsLength++;
            } else {
              if (selected) selectedEnabledItemsLength++;else {
                return false;
              }
            }
            visibleOptionsLength++;
          }
        }
      }
      return visibleOptionsLength === selectedDisabledItemsLength || visibleOptionsLength === selectedEnabledItemsLength || selectedEnabledItemsLength && visibleOptionsLength === selectedEnabledItemsLength + unselectedDisabledItemsLength + selectedDisabledItemsLength;
    }
  }
  get optionsToRender() {
    return this._filteredOptions || this.options;
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_6__.TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_6__.TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  hasFilter() {
    return this._filterValue && this._filterValue.trim().length > 0;
  }
  isEmpty() {
    return !this.optionsToRender || this.optionsToRender && this.optionsToRender.length === 0;
  }
  onFilterInputChange(event) {
    this._filterValue = event.target.value;
    this.activateFilter();
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue
    });
    this.cd.detectChanges();
  }
  activateFilter() {
    if (this.hasFilter() && this._options) {
      let searchFields = (this.filterBy || this.optionLabel || 'label').split(',');
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push({
              ...optgroup,
              ...{
                [this.optionGroupChildren]: filteredSubOptions
              }
            });
          }
        }
        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, searchFields, this._filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }
  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
}
MultiSelect.ɵfac = function MultiSelect_Factory(t) {
  return new (t || MultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService));
};
MultiSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MultiSelect,
  selectors: [["p-multiSelect"]],
  contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function MultiSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInputChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accessibleViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 6,
  hostBindings: function MultiSelect_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus || ctx.overlayVisible)("p-multiselect-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    style: "style",
    styleClass: "styleClass",
    panelStyle: "panelStyle",
    panelStyleClass: "panelStyleClass",
    inputId: "inputId",
    disabled: "disabled",
    readonly: "readonly",
    group: "group",
    filter: "filter",
    filterPlaceHolder: "filterPlaceHolder",
    filterLocale: "filterLocale",
    overlayVisible: "overlayVisible",
    tabindex: "tabindex",
    appendTo: "appendTo",
    dataKey: "dataKey",
    name: "name",
    label: "label",
    ariaLabelledBy: "ariaLabelledBy",
    displaySelectedLabel: "displaySelectedLabel",
    maxSelectedLabels: "maxSelectedLabels",
    selectionLimit: "selectionLimit",
    selectedItemsLabel: "selectedItemsLabel",
    showToggleAll: "showToggleAll",
    emptyFilterMessage: "emptyFilterMessage",
    emptyMessage: "emptyMessage",
    resetFilterOnHide: "resetFilterOnHide",
    dropdownIcon: "dropdownIcon",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    optionGroupLabel: "optionGroupLabel",
    optionGroupChildren: "optionGroupChildren",
    showHeader: "showHeader",
    filterBy: "filterBy",
    scrollHeight: "scrollHeight",
    lazy: "lazy",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    overlayOptions: "overlayOptions",
    ariaFilterLabel: "ariaFilterLabel",
    filterMatchMode: "filterMatchMode",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    tooltipPositionStyle: "tooltipPositionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    autofocusFilter: "autofocusFilter",
    display: "display",
    autocomplete: "autocomplete",
    showClear: "showClear",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    defaultLabel: "defaultLabel",
    placeholder: "placeholder",
    options: "options",
    filterValue: "filterValue",
    itemSize: "itemSize"
  },
  outputs: {
    onChange: "onChange",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClick: "onClick",
    onClear: "onClear",
    onPanelShow: "onPanelShow",
    onPanelHide: "onPanelHide",
    onLazyLoad: "onLazyLoad",
    onRemove: "onRemove"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MULTISELECT_VALUE_ACCESSOR])],
  ngContentSelectors: _c21,
  decls: 15,
  vars: 41,
  consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "readonly", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [1, "p-multiselect-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [1, "p-multiselect-label", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-multiselect-clear-icon pi pi-times", 3, "click", 4, "ngIf"], [3, "ngClass"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], ["pTemplate", "content"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], ["token", ""], [1, "p-multiselect-token-label"], ["class", "p-multiselect-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-multiselect-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-multiselect-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle", "keydown"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], ["class", "p-multiselect-footer", 4, "ngIf"], [1, "p-multiselect-header"], [4, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", 3, "click"], [1, "p-multiselect-close-icon", "pi", "pi-times"], [1, "p-checkbox", "p-component", 3, "ngClass"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "disabled", "focus", "blur", "keydown.space"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "textbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], ["filterInput", ""], [1, "p-multiselect-filter-icon", "pi", "pi-search"], [3, "items", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "loader"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass"], ["items", ""], ["itemslist", ""], ["class", "p-multiselect-empty-message", 3, "ngStyle", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "p-multiselect-item-group", 3, "ngStyle"], [3, "option", "selected", "label", "disabled", "template", "itemSize", "onClick", "onKeydown"], [1, "p-multiselect-empty-message", 3, "ngStyle"], ["emptyFilter", ""], ["empty", ""], [1, "p-multiselect-footer"]],
  template: function MultiSelect_Template(rf, ctx) {
    if (rf & 1) {
      const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_Template_div_click_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMouseclick($event, _r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_Template_input_focus_3_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function MultiSelect_Template_input_blur_3_listener($event) {
        return ctx.onInputBlur($event);
      })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) {
        return ctx.onKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiSelect_i_9_Template, 1, 0, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-overlay", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_12_listener($event) {
        return ctx.overlayVisible = $event;
      })("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
        return ctx.onOverlayAnimationStart($event);
      })("onHide", function MultiSelect_Template_p_overlay_onHide_12_listener() {
        return ctx.hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MultiSelect_ng_template_14_Template, 8, 11, "ng-template", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](30, _c18, ctx.overlayVisible, ctx.display === "chip", ctx.focus, ctx.disabled))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("label", ctx.label)("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c19, ctx.valuesAsString === (ctx.defaultLabel || ctx.placeholder), (ctx.valuesAsString == null || ctx.valuesAsString.length === 0) && (ctx.placeholder == null || ctx.placeholder.length === 0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedItemsTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c4, ctx.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.filled && !ctx.disabled && ctx.showClear);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c20));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dropdownIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.Scroller, MultiSelectItem],
  styles: [".p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-chip .p-multiselect-label{display:flex}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-multiSelect',
      template: `
        <div
            #container
            [ngClass]="{ 'p-multiselect p-component': true, 'p-multiselect-open': overlayVisible, 'p-multiselect-chip': display === 'chip', 'p-focus': focus, 'p-disabled': disabled }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onMouseclick($event, in)"
        >
            <div class="p-hidden-accessible">
                <input
                    #in
                    type="text"
                    [attr.label]="label"
                    readonly="readonly"
                    [attr.id]="inputId"
                    [attr.name]="name"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    (keydown)="onKeydown($event)"
                    aria-haspopup="listbox"
                    [attr.aria-expanded]="overlayVisible"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    role="listbox"
                />
            </div>
            <div class="p-multiselect-label-container" [pTooltip]="tooltip" [tooltipPosition]="tooltipPosition" [positionStyle]="tooltipPositionStyle" [tooltipStyleClass]="tooltipStyleClass">
                <div
                    class="p-multiselect-label"
                    [ngClass]="{ 'p-placeholder': valuesAsString === (defaultLabel || placeholder), 'p-multiselect-label-empty': (valuesAsString == null || valuesAsString.length === 0) && (placeholder == null || placeholder.length === 0) }"
                >
                    <ng-container *ngIf="!selectedItemsTemplate">
                        <ng-container *ngIf="display === 'comma'">{{ valuesAsString || 'empty' }}</ng-container>
                        <ng-container *ngIf="display === 'chip'">
                            <div #token *ngFor="let item of value; let i = index" class="p-multiselect-token">
                                <span class="p-multiselect-token-label">{{ findLabelByValue(item) }}</span>
                                <span *ngIf="!disabled" class="p-multiselect-token-icon pi pi-times-circle" (click)="removeChip(item, $event)"></span>
                            </div>
                            <ng-container *ngIf="!value || value.length === 0">{{ placeholder || defaultLabel || 'empty' }}</ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate; context: { $implicit: value }"></ng-container>
                </div>
                <i *ngIf="value != null && filled && !disabled && showClear" class="p-multiselect-clear-icon pi pi-times" (click)="clear($event)"></i>
            </div>
            <div [ngClass]="{ 'p-multiselect-trigger': true }">
                <span class="p-multiselect-trigger-icon" [ngClass]="dropdownIcon"></span>
            </div>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="['p-multiselect-panel p-component']" [ngStyle]="panelStyle" [class]="panelStyleClass" (keydown)="onKeydown($event)">
                        <div class="p-multiselect-header" *ngIf="showHeader">
                            <ng-content select="p-header"></ng-content>
                            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-checkbox p-component" *ngIf="showToggleAll && !selectionLimit" [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }">
                                    <div class="p-hidden-accessible">
                                        <input
                                            type="checkbox"
                                            readonly="readonly"
                                            [checked]="allChecked"
                                            (focus)="onHeaderCheckboxFocus()"
                                            (blur)="onHeaderCheckboxBlur()"
                                            (keydown.space)="toggleAll($event)"
                                            [disabled]="disabled || toggleAllDisabled"
                                        />
                                    </div>
                                    <div
                                        class="p-checkbox-box"
                                        role="checkbox"
                                        [attr.aria-checked]="allChecked"
                                        [ngClass]="{ 'p-highlight': allChecked, 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }"
                                        (click)="toggleAll($event)"
                                    >
                                        <span class="p-checkbox-icon" [ngClass]="{ 'pi pi-check': allChecked }"></span>
                                    </div>
                                </div>
                                <div class="p-multiselect-filter-container" *ngIf="filter">
                                    <input
                                        #filterInput
                                        type="text"
                                        [attr.autocomplete]="autocomplete"
                                        role="textbox"
                                        [value]="filterValue || ''"
                                        (input)="onFilterInputChange($event)"
                                        class="p-multiselect-filter p-inputtext p-component"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <span class="p-multiselect-filter-icon pi pi-search"></span>
                                </div>
                                <button class="p-multiselect-close p-link" type="button" (click)="close($event)" pRipple>
                                    <span class="p-multiselect-close-icon pi pi-times"></span>
                                </button>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="optionsToRender"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [tabindex]="-1"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: optionsToRender, options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items class="p-multiselect-items p-component" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true">
                                    <ng-container *ngIf="group">
                                        <ng-template ngFor let-optgroup [ngForOf]="items">
                                            <li class="p-multiselect-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(optgroup) || 'empty' }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: optgroup }"></ng-container>
                                            </li>
                                            <ng-container *ngTemplateOutlet="itemslist; context: { $implicit: getOptionGroupChildren(optgroup) }"></ng-container>
                                        </ng-template>
                                    </ng-container>
                                    <ng-container *ngIf="!group">
                                        <ng-container *ngTemplateOutlet="itemslist; context: { $implicit: items }"></ng-container>
                                    </ng-container>
                                    <ng-template #itemslist let-optionsToDisplay let-selectedOption="selectedOption">
                                        <ng-template ngFor let-option let-i="index" [ngForOf]="optionsToDisplay">
                                            <p-multiSelectItem
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                (onClick)="onOptionClick($event)"
                                                (onKeydown)="onOptionKeydown($event)"
                                                [template]="itemTemplate"
                                                [itemSize]="scrollerOptions.itemSize"
                                            ></p-multiSelectItem>
                                        </ng-template>
                                    </ng-template>
                                    <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <div class="p-multiselect-footer" *ngIf="footerFacet || footerTemplate">
                            <ng-content select="p-footer"></ng-content>
                            <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        </div>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': 'focus || overlayVisible',
        '[class.p-multiselect-clearable]': 'showClear && !disabled'
      },
      providers: [MULTISELECT_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-chip .p-multiselect-label{display:flex}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.FilterService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService
    }];
  }, {
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displaySelectedLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelectedLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedItemsLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showToggleAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyFilterMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetFilterOnHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlayOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaFilterLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterMatchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPositionStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocusFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    overlayViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['overlay']
    }],
    filterInputChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filterInput']
    }],
    accessibleViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['in']
    }],
    itemsViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['items']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    footerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.Footer]
    }],
    headerFacet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.Header]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPanelHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MultiSelectModule {}
MultiSelectModule.ɵfac = function MultiSelectModule_Factory(t) {
  return new (t || MultiSelectModule)();
};
MultiSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MultiSelectModule
});
MultiSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule],
      exports: [MultiSelect, primeng_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule],
      declarations: [MultiSelect, MultiSelectItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-multiselect.mjs.map

/***/ }),

/***/ 691:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-slidemenu.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideMenu": () => (/* binding */ SlideMenu),
/* harmony export */   "SlideMenuModule": () => (/* binding */ SlideMenuModule),
/* harmony export */   "SlideMenuSub": () => (/* binding */ SlideMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 1420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ 8549);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);












const _c0 = ["sublist"];
const _c1 = function (a0) {
  return {
    "p-hidden": a0
  };
};
function SlideMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 5);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, child_r2.visible === false));
  }
}
function SlideMenuSub_ng_template_2_li_1_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r2.icon)("ngStyle", child_r2.iconStyle);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.label);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", child_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.badge);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
}
const _c2 = function (a0) {
  return {
    "p-disabled": a0
  };
};
function SlideMenuSub_ng_template_2_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SlideMenuSub_ng_template_2_li_1_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onItemKeyDown($event));
    })("click", function SlideMenuSub_ng_template_2_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.itemClick($event, child_r2, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideMenuSub_ng_template_2_li_1_a_2_span_1_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideMenuSub_ng_template_2_li_1_a_2_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlideMenuSub_ng_template_2_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SlideMenuSub_ng_template_2_li_1_a_2_span_5_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SlideMenuSub_ng_template_2_li_1_a_2_span_6_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", child_r2.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, child_r2.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", child_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled || !ctx_r7.isActive ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.escape !== false)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r2.icon)("ngStyle", child_r2.iconStyle);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.label);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", child_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", child_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.badge);
  }
}
function SlideMenuSub_ng_template_2_li_1_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
  }
}
const _c3 = function () {
  return {
    exact: false
  };
};
function SlideMenuSub_ng_template_2_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function SlideMenuSub_ng_template_2_li_1_a_3_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.onItemKeyDown($event));
    })("click", function SlideMenuSub_ng_template_2_li_1_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.itemClick($event, child_r2, _r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideMenuSub_ng_template_2_li_1_a_3_span_1_Template, 1, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideMenuSub_ng_template_2_li_1_a_3_span_2_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlideMenuSub_ng_template_2_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SlideMenuSub_ng_template_2_li_1_a_3_span_5_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SlideMenuSub_ng_template_2_li_1_a_3_span_6_Template, 1, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r2.routerLink)("queryParams", child_r2.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r2.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3))("href", child_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", child_r2.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, child_r2.disabled))("fragment", child_r2.fragment)("queryParamsHandling", child_r2.queryParamsHandling)("preserveFragment", child_r2.preserveFragment)("skipLocationChange", child_r2.skipLocationChange)("replaceUrl", child_r2.replaceUrl)("state", child_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", child_r2.title)("id", child_r2.id)("tabindex", child_r2.disabled || !ctx_r8.isActive ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.escape !== false)("ngIfElse", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-slideMenuSub", 25);
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", child_r2)("index", ctx_r9.index + 1)("menuWidth", ctx_r9.menuWidth);
  }
}
const _c4 = function (a1, a2) {
  return {
    "p-menuitem": true,
    "p-menuitem-active": a1,
    "p-hidden": a2
  };
};
function SlideMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideMenuSub_ng_template_2_li_1_a_2_Template, 7, 13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SlideMenuSub_ng_template_2_li_1_a_3_Template, 7, 24, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SlideMenuSub_ng_template_2_li_1_p_slideMenuSub_4_Template, 1, 3, "p-slideMenuSub", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](child_r2.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c4, _r6 == ctx_r4.activeItem, child_r2.visible === false))("tooltipOptions", child_r2.tooltipOptions)("ngStyle", child_r2.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.items);
  }
}
function SlideMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlideMenuSub_ng_template_2_li_0_Template, 1, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideMenuSub_ng_template_2_li_1_Template, 5, 11, "li", 4);
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r2.separator);
  }
}
const _c5 = function (a0, a1, a2) {
  return {
    "p-slidemenu-rootlist": a0,
    "p-submenu-list": a1,
    "p-active-submenu": a2
  };
};
const _c6 = ["container"];
const _c7 = ["backward"];
const _c8 = ["slideMenuContent"];
const _c9 = function (a1) {
  return {
    "p-slidemenu p-component": true,
    "p-slidemenu-overlay": a1
  };
};
const _c10 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c11 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};
function SlideMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenu_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onOverlayClick($event));
    })("@overlayAnimation.start", function SlideMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function SlideMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-slideMenuSub", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function SlideMenu_div_0_Template_a_keydown_enter_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onBackwardKeydown($event));
    })("keydown.space", function SlideMenu_div_0_Template_a_keydown_space_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onBackwardKeydown($event));
    })("click", function SlideMenu_div_0_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c9, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c10, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r0.left ? ctx_r0.viewportHeight + "px" : "auto")("width", ctx_r0.menuWidth + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r0.model)("index", 0)("menuWidth", ctx_r0.menuWidth)("effectDuration", ctx_r0.effectDuration)("easing", ctx_r0.easing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.left ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.backLabel);
  }
}
class SlideMenuSub {
  constructor(slideMenu) {
    this.backLabel = 'Back';
    this.easing = 'ease-out';
    this.slideMenu = slideMenu;
  }
  itemClick(event, item, listitem) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }
    if (item.items && !this.slideMenu.animating) {
      this.slideMenu.left -= this.slideMenu.menuWidth;
      this.activeItem = listitem;
      this.slideMenu.animating = true;
      setTimeout(() => this.slideMenu.animating = false, this.effectDuration);
    }
    if (!item.items && this.slideMenu.popup) {
      this.slideMenu.hide();
    }
  }
  focusNextList(listitem) {
    if (!this.slideMenu.animating) {
      let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getFocusableElements(listitem);
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
      this.unbindTransitionEndListener();
    }
  }
  onItemKeyDown(event) {
    let listItem = event.currentTarget.parentElement;
    switch (event.code) {
      case 'Space':
      case 'Enter':
        if (listItem && !primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(listItem, 'p-disabled')) {
          listItem.children[0].click();
          this.transitionEndListener = this.focusNextList.bind(this, listItem);
          this.sublistViewChild.nativeElement.addEventListener('transitionend', this.transitionEndListener);
        }
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  unbindTransitionEndListener() {
    if (this.transitionEndListener && this.sublistViewChild) {
      this.sublistViewChild.nativeElement.removeEventListener('transitionend', this.transitionEndListener);
      this.transitionEndListener = null;
    }
  }
  ngOnDestroy() {
    this.activeItem = null;
    this.unbindTransitionEndListener();
  }
  get isActive() {
    return -this.slideMenu.left == this.index * this.menuWidth;
  }
}
SlideMenuSub.ɵfac = function SlideMenuSub_Factory(t) {
  return new (t || SlideMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SlideMenu)));
};
SlideMenuSub.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SlideMenuSub,
  selectors: [["p-slideMenuSub"]],
  viewQuery: function SlideMenuSub_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sublistViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    item: "item",
    root: "root",
    backLabel: "backLabel",
    menuWidth: "menuWidth",
    effectDuration: "effectDuration",
    easing: "easing",
    index: "index"
  },
  decls: 3,
  vars: 16,
  consts: [[3, "ngClass"], ["sublist", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], ["pTooltip", "", 3, "ngClass", "tooltipOptions", "class", "ngStyle", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], ["pTooltip", "", 3, "ngClass", "tooltipOptions", "ngStyle"], ["listitem", ""], ["class", "p-menuitem-link", 3, "target", "ngClass", "keydown", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "href", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "keydown", "click", 4, "ngIf"], ["class", "p-submenu", 3, "item", "index", "menuWidth", 4, "ngIf"], [1, "p-menuitem-link", 3, "target", "ngClass", "keydown", "click"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlRouteLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], ["class", "p-submenu-icon pi pi-fw pi-angle-right", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-submenu-icon", "pi", "pi-fw", "pi-angle-right"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "href", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "keydown", "click"], ["class", "p-submenu-icon pi pi-fw pi-caret-right", 4, "ngIf"], [1, "p-submenu-icon", "pi", "pi-fw", "pi-caret-right"], [1, "p-submenu", 3, "item", "index", "menuWidth"]],
  template: function SlideMenuSub_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideMenuSub_ng_template_2_Template, 2, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.menuWidth, "px")("left", ctx.root ? ctx.slideMenu.left : ctx.slideMenu.menuWidth, "px")("transition-property", ctx.root ? "left" : "none")("transition-duration", ctx.effectDuration + "ms")("transition-timing-function", ctx.easing);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c5, ctx.root, !ctx.root, ctx.isActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, SlideMenuSub],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideMenuSub, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-slideMenuSub',
      template: `
        <ul
            #sublist
            [ngClass]="{ 'p-slidemenu-rootlist': root, 'p-submenu-list': !root, 'p-active-submenu': isActive }"
            [style.width.px]="menuWidth"
            [style.left.px]="root ? slideMenu.left : slideMenu.menuWidth"
            [style.transitionProperty]="root ? 'left' : 'none'"
            [style.transitionDuration]="effectDuration + 'ms'"
            [style.transitionTimingFunction]="easing"
        >
            <ng-template ngFor let-child [ngForOf]="root ? item : item.items">
                <li *ngIf="child.separator" class="p-menu-separator" [ngClass]="{ 'p-hidden': child.visible === false }"></li>
                <li
                    *ngIf="!child.separator"
                    #listitem
                    [ngClass]="{ 'p-menuitem': true, 'p-menuitem-active': listitem == activeItem, 'p-hidden': child.visible === false }"
                    pTooltip
                    [tooltipOptions]="child.tooltipOptions"
                    [class]="child.styleClass"
                    [ngStyle]="child.style"
                >
                    <a
                        *ngIf="!child.routerLink"
                        (keydown)="onItemKeyDown($event)"
                        [attr.href]="child.url"
                        class="p-menuitem-link"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        [attr.tabindex]="child.disabled || !isActive ? null : '0'"
                        (click)="itemClick($event, child, listitem)"
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{ child.label }}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <span class="p-submenu-icon pi pi-fw pi-angle-right" *ngIf="child.items"></span>
                    </a>
                    <a
                        *ngIf="child.routerLink"
                        (keydown)="onItemKeyDown($event)"
                        [routerLink]="child.routerLink"
                        [queryParams]="child.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions || { exact: false }"
                        [href]="child.url"
                        class="p-menuitem-link"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [attr.id]="child.id"
                        [attr.tabindex]="child.disabled || !isActive ? null : '0'"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        (click)="itemClick($event, child, listitem)"
                        [fragment]="child.fragment"
                        [queryParamsHandling]="child.queryParamsHandling"
                        [preserveFragment]="child.preserveFragment"
                        [skipLocationChange]="child.skipLocationChange"
                        [replaceUrl]="child.replaceUrl"
                        [state]="child.state"
                    >
                        <span class="p-menuitem-icon" *ngIf="child.icon" [ngClass]="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{ child.label }}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                        <span class="p-submenu-icon pi pi-fw pi-caret-right" *ngIf="child.items"></span>
                    </a>
                    <p-slideMenuSub class="p-submenu" [item]="child" [index]="index + 1" [menuWidth]="menuWidth" *ngIf="child.items"></p-slideMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SlideMenu)]
      }]
    }];
  }, {
    item: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    root: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    menuWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    effectDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    easing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sublistViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['sublist']
    }]
  });
})();
class SlideMenu {
  constructor(el, renderer, cd, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.menuWidth = 190;
    this.viewportHeight = 180;
    this.effectDuration = 250;
    this.easing = 'ease-out';
    this.backLabel = 'Back';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.left = 0;
    this.animating = false;
  }
  ngAfterViewChecked() {
    if (!this.viewportUpdated && !this.popup && this.containerViewChild) {
      this.updateViewPort();
      this.viewportUpdated = true;
    }
  }
  set container(element) {
    this.containerViewChild = element;
  }
  set backward(element) {
    this.backwardViewChild = element;
  }
  set slideMenuContent(element) {
    this.slideMenuContentViewChild = element;
  }
  updateViewPort() {
    this.slideMenuContentViewChild.nativeElement.style.height = this.viewportHeight - primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHiddenElementOuterHeight(this.backwardViewChild.nativeElement) + 'px';
  }
  toggle(event) {
    if (this.visible) this.hide();else this.show(event);
    this.preventDocumentDefault = true;
  }
  show(event) {
    this.target = event.currentTarget;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        if (this.popup) {
          this.updateViewPort();
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.absolutePosition(this.containerViewChild.nativeElement, this.target);
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case 'void':
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(event.element);
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('menu', this.containerViewChild.nativeElement, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  hide() {
    this.visible = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  goBack() {
    this.left += this.menuWidth;
  }
  onBackwardKeydown(event) {
    this.goBack();
    if (!this.left) {
      setTimeout(() => {
        let focusableElements = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getFocusableElements(this.el.nativeElement);
        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }, 1);
    }
    event.preventDefault();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', () => {
        if (!this.preventDocumentDefault) {
          this.hide();
          this.cd.detectChanges();
        }
        this.preventDocumentDefault = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_1__.ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    this.left = 0;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
  }
}
SlideMenu.ɵfac = function SlideMenu_Factory(t) {
  return new (t || SlideMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService));
};
SlideMenu.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SlideMenu,
  selectors: [["p-slideMenu"]],
  viewQuery: function SlideMenu_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backward = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slideMenuContent = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    model: "model",
    popup: "popup",
    style: "style",
    styleClass: "styleClass",
    menuWidth: "menuWidth",
    viewportHeight: "viewportHeight",
    effectDuration: "effectDuration",
    easing: "easing",
    backLabel: "backLabel",
    appendTo: "appendTo",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-slidemenu-wrapper"], [1, "p-slidemenu-content"], ["slideMenuContent", ""], ["root", "root", 3, "item", "index", "menuWidth", "effectDuration", "easing"], ["tabindex", "0", 1, "p-slidemenu-backward", "p-menuitem-link", 3, "keydown.enter", "keydown.space", "click"], ["backward", ""], [1, "p-slidemenu-backward-icon", "pi", "pi-fw", "pi-caret-left"]],
  template: function SlideMenu_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlideMenu_div_0_Template, 11, 25, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.popup || ctx.visible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, SlideMenuSub],
  styles: [".p-slidemenu{width:12.5rem}.p-slidemenu.p-slidemenu-overlay{position:absolute;top:0;left:0}.p-slidemenu ul{list-style:none;margin:0;padding:0}.p-slidemenu .p-slidemenu-rootlist{position:absolute;top:0}.p-slidemenu .p-submenu-list{display:none;position:absolute;top:0;width:12.5rem}.p-slidemenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden}.p-slidemenu .p-menuitem-icon,.p-slidemenu .p-menuitem-text{vertical-align:middle}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative}.p-slidemenu-backward{position:absolute;bottom:0;width:100%;cursor:pointer;display:none}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-menuitem-active>.p-submenu>.p-submenu-list{display:block}.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active),.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-submenu>.p-submenu-list{display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-slideMenu',
      template: `
        <div
            #container
            [ngClass]="{ 'p-slidemenu p-component': true, 'p-slidemenu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            *ngIf="!popup || visible"
        >
            <div class="p-slidemenu-wrapper" [style.height]="left ? viewportHeight + 'px' : 'auto'" [style.width]="menuWidth + 'px'">
                <div #slideMenuContent class="p-slidemenu-content">
                    <p-slideMenuSub [item]="model" root="root" [index]="0" [menuWidth]="menuWidth" [effectDuration]="effectDuration" [easing]="easing"></p-slideMenuSub>
                </div>
                <a #backward (keydown.enter)="onBackwardKeydown($event)" (keydown.space)="onBackwardKeydown($event)" class="p-slidemenu-backward p-menuitem-link" tabindex="0" [style.display]="left ? 'block' : 'none'" (click)="goBack()">
                    <span class="p-slidemenu-backward-icon pi pi-fw pi-caret-left"></span><span>{{ backLabel }}</span>
                </a>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }))])])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-slidemenu{width:12.5rem}.p-slidemenu.p-slidemenu-overlay{position:absolute;top:0;left:0}.p-slidemenu ul{list-style:none;margin:0;padding:0}.p-slidemenu .p-slidemenu-rootlist{position:absolute;top:0}.p-slidemenu .p-submenu-list{display:none;position:absolute;top:0;width:12.5rem}.p-slidemenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden}.p-slidemenu .p-menuitem-icon,.p-slidemenu .p-menuitem-text{vertical-align:middle}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative}.p-slidemenu-backward{position:absolute;bottom:0;width:100%;cursor:pointer;display:none}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-menuitem-active>.p-submenu>.p-submenu-list{display:block}.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active),.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-submenu>.p-submenu-list{display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_6__.OverlayService
    }];
  }, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    menuWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    viewportHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    effectDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    easing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    backward: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['backward']
    }],
    slideMenuContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['slideMenuContent']
    }]
  });
})();
class SlideMenuModule {}
SlideMenuModule.ɵfac = function SlideMenuModule_Factory(t) {
  return new (t || SlideMenuModule)();
};
SlideMenuModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SlideMenuModule
});
SlideMenuModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule],
      exports: [SlideMenu, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule],
      declarations: [SlideMenu, SlideMenuSub]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-slidemenu.mjs.map

/***/ }),

/***/ 7485:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-table.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelEditableRow": () => (/* binding */ CancelEditableRow),
/* harmony export */   "CellEditor": () => (/* binding */ CellEditor),
/* harmony export */   "ColumnFilter": () => (/* binding */ ColumnFilter),
/* harmony export */   "ColumnFilterFormElement": () => (/* binding */ ColumnFilterFormElement),
/* harmony export */   "ContextMenuRow": () => (/* binding */ ContextMenuRow),
/* harmony export */   "EditableColumn": () => (/* binding */ EditableColumn),
/* harmony export */   "EditableRow": () => (/* binding */ EditableRow),
/* harmony export */   "FrozenColumn": () => (/* binding */ FrozenColumn),
/* harmony export */   "InitEditableRow": () => (/* binding */ InitEditableRow),
/* harmony export */   "ReorderableColumn": () => (/* binding */ ReorderableColumn),
/* harmony export */   "ReorderableRow": () => (/* binding */ ReorderableRow),
/* harmony export */   "ReorderableRowHandle": () => (/* binding */ ReorderableRowHandle),
/* harmony export */   "ResizableColumn": () => (/* binding */ ResizableColumn),
/* harmony export */   "RowGroupHeader": () => (/* binding */ RowGroupHeader),
/* harmony export */   "RowToggler": () => (/* binding */ RowToggler),
/* harmony export */   "SaveEditableRow": () => (/* binding */ SaveEditableRow),
/* harmony export */   "SelectableRow": () => (/* binding */ SelectableRow),
/* harmony export */   "SelectableRowDblClick": () => (/* binding */ SelectableRowDblClick),
/* harmony export */   "SortIcon": () => (/* binding */ SortIcon),
/* harmony export */   "SortableColumn": () => (/* binding */ SortableColumn),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableBody": () => (/* binding */ TableBody),
/* harmony export */   "TableCheckbox": () => (/* binding */ TableCheckbox),
/* harmony export */   "TableHeaderCheckbox": () => (/* binding */ TableHeaderCheckbox),
/* harmony export */   "TableModule": () => (/* binding */ TableModule),
/* harmony export */   "TableRadioButton": () => (/* binding */ TableRadioButton),
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 1420);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ 2722);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scroller */ 3705);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tristatecheckbox */ 1604);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 8549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);





























const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["wrapper"];
const _c5 = ["table"];
const _c6 = ["thead"];
const _c7 = ["tfoot"];
const _c8 = ["scroller"];
function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-datatable-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.captionTemplate);
  }
}
function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r3.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showJumpToPageInput", ctx_r3.showJumpToPageInput)("showPageLinks", ctx_r3.showPageLinks);
  }
}
function Table_p_scroller_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c9 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Table_p_scroller_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Table_p_scroller_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const items_r19 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c9, items_r19, scrollerOptions_r20));
  }
}
const _c10 = function (a0) {
  return {
    height: a0
  };
};
function Table_p_scroller_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function Table_p_scroller_7_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onLazyItemLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_p_scroller_7_ng_template_2_Template, 1, 5, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c10, ctx_r5.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.processedData)("columns", ctx_r5.columns)("scrollHeight", ctx_r5.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r5.virtualScrollItemSize || ctx_r5._virtualRowHeight)("step", ctx_r5.rows)("delay", ctx_r5.lazy ? ctx_r5.virtualScrollDelay : 0)("inline", true)("lazy", ctx_r5.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r5.loadingBodyTemplate)("options", ctx_r5.virtualScrollOptions)("autoSize", true);
  }
}
function Table_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c11 = function (a0) {
  return {
    columns: a0
  };
};
function Table_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c9, ctx_r6.processedData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, ctx_r6.columns)));
  }
}
function Table_ng_template_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_template_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_ng_template_9_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 31);
  }
  if (rf & 2) {
    const scrollerOptions_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r31.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r26.columns)("pTableBodyTemplate", ctx_r31.frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_9_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 32);
  }
  if (rf & 2) {
    const scrollerOptions_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("height: calc(" + scrollerOptions_r26.spacerStyle.height + " - " + scrollerOptions_r26.rows.length * scrollerOptions_r26.itemSize + "px);");
  }
}
function Table_ng_template_9_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c12 = function (a0) {
  return {
    $implicit: a0
  };
};
function Table_ng_template_9_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tfoot", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_ng_template_9_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r33.footerGroupedTemplate || ctx_r33.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c12, scrollerOptions_r26.columns));
  }
}
const _c13 = function (a1, a2, a3) {
  return {
    "p-datatable-table": true,
    "p-datatable-scrollable-table": a1,
    "p-datatable-resizable-table": a2,
    "p-datatable-resizable-table-fit": a3
  };
};
function Table_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_ng_template_9_ng_container_2_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Table_ng_template_9_ng_container_5_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Table_ng_template_9_tbody_6_Template, 1, 5, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Table_ng_template_9_tbody_8_Template, 1, 2, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Table_ng_template_9_tfoot_9_Template, 3, 4, "tfoot", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r26 = ctx.options;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r8.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.tableStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c13, ctx_r8.scrollable, ctx_r8.resizableColumns, ctx_r8.resizableColumns && ctx_r8.columnResizeMode === "fit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r8.id + "-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c12, scrollerOptions_r26.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.headerGroupedTemplate || ctx_r8.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c12, scrollerOptions_r26.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.frozenValue || ctx_r8.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r26.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r26.contentStyleClass)("value", ctx_r8.dataToRender(scrollerOptions_r26.rows))("pTableBody", scrollerOptions_r26.columns)("pTableBodyTemplate", ctx_r8.bodyTemplate)("scrollerOptions", scrollerOptions_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", scrollerOptions_r26.spacerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.footerGroupedTemplate || ctx_r8.footerTemplate);
  }
}
function Table_p_paginator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function Table_p_paginator_11_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r9.rows)("first", ctx_r9.first)("totalRecords", ctx_r9.totalRecords)("pageLinkSize", ctx_r9.pageLinks)("alwaysShow", ctx_r9.alwaysShowPaginator)("rowsPerPageOptions", ctx_r9.rowsPerPageOptions)("templateLeft", ctx_r9.paginatorLeftTemplate)("templateRight", ctx_r9.paginatorRightTemplate)("dropdownAppendTo", ctx_r9.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r9.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r9.currentPageReportTemplate)("showFirstLastIcon", ctx_r9.showFirstLastIcon)("dropdownItemTemplate", ctx_r9.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r9.showCurrentPageReport)("showJumpToPageDropdown", ctx_r9.showJumpToPageDropdown)("showJumpToPageInput", ctx_r9.showJumpToPageInput)("showPageLinks", ctx_r9.showPageLinks);
  }
}
function Table_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Table_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Table_div_12_ng_container_1_Template, 1, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.summaryTemplate);
  }
}
function Table_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37, 38);
  }
}
function Table_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 39, 40);
  }
}
function Table_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 41, 42);
  }
}
const _c14 = function (a1, a2, a3) {
  return {
    "p-datatable p-component": true,
    "p-datatable-hoverable-rows": a1,
    "p-datatable-scrollable": a2,
    "p-datatable-flex-scrollable": a3
  };
};
const _c15 = function (a0) {
  return {
    maxHeight: a0
  };
};
const _c16 = ["pTableBody", ""];
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c17 = function (a0, a1, a2, a3, a4) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4
  };
};
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r13.$implicit;
    const rowIndex_r7 = ctx_r13.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r6, ctx_r8.getRowIndex(rowIndex_r7), ctx_r8.columns, ctx_r8.dt.editMode === "row" && ctx_r8.dt.isRowEditing(rowData_r6), ctx_r8.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r15.$implicit;
    const rowIndex_r7 = ctx_r15.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r6 ? ctx_r9.template : ctx_r9.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r6, ctx_r9.getRowIndex(rowIndex_r7), ctx_r9.columns, ctx_r9.dt.editMode === "row" && ctx_r9.dt.isRowEditing(rowData_r6), ctx_r9.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c18 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4,
    rowgroup: a5,
    rowspan: a6
  };
};
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r17.$implicit;
    const rowIndex_r7 = ctx_r17.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", rowData_r6 ? ctx_r10.template : ctx_r10.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](2, _c18, rowData_r6, ctx_r10.getRowIndex(rowIndex_r7), ctx_r10.columns, ctx_r10.dt.editMode === "row" && ctx_r10.dt.isRowEditing(rowData_r6), ctx_r10.frozen, ctx_r10.shouldRenderRowspan(ctx_r10.value, rowData_r6, rowIndex_r7), ctx_r10.calculateRowGroupSize(ctx_r10.value, rowData_r6, rowIndex_r7)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r6 = ctx_r19.$implicit;
    const rowIndex_r7 = ctx_r19.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c17, rowData_r6, ctx_r11.getRowIndex(rowIndex_r7), ctx_r11.columns, ctx_r11.dt.editMode === "row" && ctx_r11.dt.isRowEditing(rowData_r6), ctx_r11.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dt.groupHeaderTemplate && !ctx_r5.dt.virtualScroll && ctx_r5.dt.rowGroupMode === "subheader" && ctx_r5.shouldRenderRowGroupHeader(ctx_r5.value, rowData_r6, rowIndex_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dt.rowGroupMode !== "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dt.rowGroupMode === "rowspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dt.groupFooterTemplate && !ctx_r5.dt.virtualScroll && ctx_r5.dt.rowGroupMode === "subheader" && ctx_r5.shouldRenderRowGroupFooter(ctx_r5.value, rowData_r6, rowIndex_r7));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c19 = function (a0, a1, a2, a3, a4, a5) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    expanded: a3,
    editing: a4,
    frozen: a5
  };
};
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r21 = ctx_r27.$implicit;
    const rowIndex_r22 = ctx_r27.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r21, ctx_r23.getRowIndex(rowIndex_r22), ctx_r23.columns, ctx_r23.dt.isRowExpanded(rowData_r21), ctx_r23.dt.editMode === "row" && ctx_r23.dt.isRowEditing(rowData_r21), ctx_r23.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r21 = ctx_r29.$implicit;
    const rowIndex_r22 = ctx_r29.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.dt.groupHeaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r21, ctx_r24.getRowIndex(rowIndex_r22), ctx_r24.columns, ctx_r24.dt.isRowExpanded(rowData_r21), ctx_r24.dt.editMode === "row" && ctx_r24.dt.isRowEditing(rowData_r21), ctx_r24.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const rowData_r21 = ctx_r33.$implicit;
    const rowIndex_r22 = ctx_r33.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.dt.groupFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c19, rowData_r21, ctx_r31.getRowIndex(rowIndex_r22), ctx_r31.columns, ctx_r31.dt.isRowExpanded(rowData_r21), ctx_r31.dt.editMode === "row" && ctx_r31.dt.isRowEditing(rowData_r21), ctx_r31.frozen));
  }
}
const _c20 = function (a0, a1, a2, a3) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    frozen: a3
  };
};
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r21 = ctx_r34.$implicit;
    const rowIndex_r22 = ctx_r34.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r25.dt.expandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c20, rowData_r21, ctx_r25.getRowIndex(rowIndex_r22), ctx_r25.columns, ctx_r25.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.dt.groupFooterTemplate && ctx_r25.dt.rowGroupMode === "subheader" && ctx_r25.shouldRenderRowGroupFooter(ctx_r25.value, rowData_r21, ctx_r25.getRowIndex(rowIndex_r22)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r21 = ctx.$implicit;
    const rowIndex_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.dt.groupHeaderTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.dt.groupHeaderTemplate && ctx_r20.dt.rowGroupMode === "subheader" && ctx_r20.shouldRenderRowGroupHeader(ctx_r20.value, rowData_r21, ctx_r20.getRowIndex(rowIndex_r22)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.dt.isRowExpanded(rowData_r21));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.value)("ngForTrackBy", ctx_r1.dt.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const rowData_r36 = ctx_r41.$implicit;
    const rowIndex_r37 = ctx_r41.index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r39.dt.frozenExpandedRowTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c20, rowData_r36, ctx_r39.getRowIndex(rowIndex_r37), ctx_r39.columns, ctx_r39.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r36 = ctx.$implicit;
    const rowIndex_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r35.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](3, _c19, rowData_r36, ctx_r35.getRowIndex(rowIndex_r37), ctx_r35.columns, ctx_r35.dt.isRowExpanded(rowData_r36), ctx_r35.dt.editMode === "row" && ctx_r35.dt.isRowEditing(rowData_r36), ctx_r35.frozen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.dt.isRowExpanded(rowData_r36));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c21 = function (a0, a1) {
  return {
    $implicit: a0,
    frozen: a1
  };
};
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c21, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.dt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c21, ctx_r4.columns, ctx_r4.frozen));
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getBadgeValue());
  }
}
const _c22 = function (a0, a1, a2) {
  return {
    "pi-sort-amount-up-alt": a0,
    "pi-sort-amount-down": a1,
    "pi-sort-alt": a2
  };
};
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.outputTemplate);
  }
}
const _c23 = ["rb"];
const _c24 = function (a0, a1, a2) {
  return {
    "p-radiobutton-focused": a0,
    "p-radiobutton-checked": a1,
    "p-radiobutton-disabled": a2
  };
};
const _c25 = function (a1, a2, a3) {
  return {
    "p-radiobutton-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
const _c26 = function (a0, a1) {
  return {
    "p-checkbox-focused": a0,
    "p-checkbox-disabled": a1
  };
};
const _c27 = function (a1, a2, a3) {
  return {
    "p-checkbox-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
const _c28 = function (a0) {
  return {
    "pi pi-check": a0
  };
};
const _c29 = function (a1, a2, a3) {
  return {
    "p-checkbox-box": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
const _c30 = ["icon"];
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-columnFilterFormElement", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons);
  }
}
const _c31 = function (a0, a1) {
  return {
    "p-column-filter-menu-button-open": a0,
    "p-column-filter-menu-button-active": a1
  };
};
function ColumnFilter_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.toggleMenu());
    })("keydown", function ColumnFilter_button_2_Template_button_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onToggleButtonKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c31, ctx_r1.overlayVisible, ctx_r1.hasFilter()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx_r1.overlayVisible);
  }
}
const _c32 = function (a0) {
  return {
    "p-hidden-space": a0
  };
};
function ColumnFilter_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c32, !ctx_r2.hasRowFilter()));
  }
}
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c33 = function (a0) {
  return {
    "p-highlight": a0
  };
};
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const matchMode_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onRowMatchModeChange(matchMode_r17.value));
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const matchMode_r17 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onRowMatchModeChange(matchMode_r17.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const matchMode_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c33, ctx_r16.isRowMatchModeSelected(matchMode_r17.value)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", i_r18 === 0 ? "0" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", matchMode_r17.label, " ");
  }
}
function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.onRowClearItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.noFilterLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onOperatorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r27.operatorOptions)("ngModel", ctx_r27.operator);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.onMenuMatchModeChange($event, fieldConstraint_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r36.matchModes)("ngModel", fieldConstraint_r34.matchMode);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const fieldConstraint_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.removeConstraint(fieldConstraint_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r37.removeRuleButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template, 1, 2, "p-dropdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-columnFilterFormElement", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilter_div_4_ng_template_3_div_2_button_4_Template, 1, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fieldConstraint_r34 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.showMatchModes && ctx_r28.matchModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r28.type)("field", ctx_r28.field)("filterConstraint", fieldConstraint_r34)("filterTemplate", ctx_r28.filterTemplate)("placeholder", ctx_r28.placeholder)("minFractionDigits", ctx_r28.minFractionDigits)("maxFractionDigits", ctx_r28.maxFractionDigits)("prefix", ctx_r28.prefix)("suffix", ctx_r28.suffix)("locale", ctx_r28.locale)("localeMatcher", ctx_r28.localeMatcher)("currency", ctx_r28.currency)("currencyDisplay", ctx_r28.currencyDisplay)("useGrouping", ctx_r28.useGrouping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.showRemoveIcon);
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r45.addConstraint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r29.addRuleButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.clearFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r30.clearButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_ng_template_3_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.applyFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r31.applyButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_div_4_ng_template_3_div_3_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnFilter_div_4_ng_template_3_button_5_Template, 1, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColumnFilter_div_4_ng_template_3_button_6_Template, 1, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isShowOperator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.fieldConstraints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isShowAddConstraint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showClearButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showApplyButton);
  }
}
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c34 = function (a1) {
  return {
    "p-column-filter-overlay p-component p-fluid": true,
    "p-column-filter-overlay-menu": a1
  };
};
function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.onEscape());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_div_4_ul_2_Template, 5, 2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_div_4_ng_template_3_Template, 7, 5, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c34, ctx_r3.display === "menu"))("@overlayAnimation", "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c12, ctx_r3.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.display === "row")("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c12, ctx_r3.field));
  }
}
const _c35 = function (a0, a1) {
  return {
    "p-column-filter-row": a0,
    "p-column-filter-menu": a1
  };
};
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c36 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
  return {
    $implicit: a0,
    filterCallback: a1,
    type: a2,
    field: a3,
    filterConstraint: a4,
    placeholder: a5,
    minFractionDigits: a6,
    maxFractionDigits: a7,
    prefix: a8,
    suffix: a9,
    locale: a10,
    localeMatcher: a11,
    currency: a12,
    currencyDisplay: a13,
    useGrouping: a14,
    showButtons: a15
  };
};
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c36, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onTextInputEnterKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.filterConstraint == null ? null : ctx_r4.filterConstraint.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r4.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-inputNumber", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onNumericInputKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.filterConstraint == null ? null : ctx_r5.filterConstraint.value)("showButtons", ctx_r5.showButtons)("minFractionDigits", ctx_r5.minFractionDigits)("maxFractionDigits", ctx_r5.maxFractionDigits)("prefix", ctx_r5.prefix)("suffix", ctx_r5.suffix)("placeholder", ctx_r5.placeholder)("mode", ctx_r5.currency ? "currency" : "decimal")("locale", ctx_r5.locale)("localeMatcher", ctx_r5.localeMatcher)("currency", ctx_r5.currency)("currencyDisplay", ctx_r5.currencyDisplay)("useGrouping", ctx_r5.useGrouping);
  }
}
function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-triStateCheckbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template_p_triStateCheckbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.filterConstraint == null ? null : ctx_r6.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-calendar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template_p_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onModelChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r7.placeholder)("ngModel", ctx_r7.filterConstraint == null ? null : ctx_r7.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 13, "p-inputNumber", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template, 1, 1, "p-triStateCheckbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilterFormElement_ng_template_1_p_calendar_4_Template, 1, 2, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}
class TableService {
  constructor() {
    this.sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.valueSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.columnsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.sortSource$ = this.sortSource.asObservable();
    this.selectionSource$ = this.selectionSource.asObservable();
    this.contextMenuSource$ = this.contextMenuSource.asObservable();
    this.valueSource$ = this.valueSource.asObservable();
    this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    this.columnsSource$ = this.columnsSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onResetChange() {
    this.resetSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
}
TableService.ɵfac = function TableService_Factory(t) {
  return new (t || TableService)();
};
TableService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TableService,
  factory: TableService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
class Table {
  constructor(el, zone, tableService, cd, filterService, overlayService) {
    this.el = el;
    this.zone = zone;
    this.tableService = tableService;
    this.cd = cd;
    this.filterService = filterService;
    this.overlayService = overlayService;
    this.pageLinks = 5;
    this.alwaysShowPaginator = true;
    this.paginatorPosition = 'bottom';
    this.paginatorDropdownScrollHeight = '200px';
    this.currentPageReportTemplate = '{currentPage} of {totalPages}';
    this.showFirstLastIcon = true;
    this.showPageLinks = true;
    this.defaultSortOrder = 1;
    this.sortMode = 'single';
    this.resetPageOnSort = true;
    this.selectAllChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contextMenuSelectionMode = 'separate';
    this.rowTrackBy = (index, item) => item;
    this.lazy = false;
    this.lazyLoadOnInit = true;
    this.compareSelectionBy = 'deepEquals';
    this.csvSeparator = ',';
    this.exportFilename = 'download';
    this.filters = {};
    this.filterDelay = 300;
    this.expandedRowKeys = {};
    this.editingRowKeys = {};
    this.rowExpandMode = 'multiple';
    this.scrollDirection = 'vertical';
    this.virtualScrollDelay = 250;
    this.columnResizeMode = 'fit';
    this.loadingIcon = 'pi pi-spinner';
    this.showLoader = true;
    this.showInitialSortBadge = true;
    this.stateStorage = 'session';
    this.editMode = 'cell';
    this.groupRowsByOrder = 1;
    this.responsiveLayout = 'scroll';
    this.breakpoint = '960px';
    this.onRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onRowReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.firstChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onStateSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onStateRestore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /* @deprecated */
    this._virtualRowHeight = 28;
    this._value = [];
    this._totalRecords = 0;
    this._first = 0;
    this.selectionKeys = {};
    this._sortOrder = 1;
    this._selectAll = null;
    this.columnResizing = false;
    this.rowGroupHeaderStyleObject = {};
    this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(val) {
    this._responsive = val;
    console.warn('responsive propery is deprecated as table is always responsive with scrollable behavior.');
  }
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.warn('The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.');
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }
    if (this.responsiveLayout === 'stack' && !this.scrollable) {
      this.createResponsiveStyle();
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'headergrouped':
          this.headerGroupedTemplate = item.template;
          break;
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'loadingbody':
          this.loadingBodyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'footergrouped':
          this.footerGroupedTemplate = item.template;
          break;
        case 'summary':
          this.summaryTemplate = item.template;
          break;
        case 'colgroup':
          this.colGroupTemplate = item.template;
          break;
        case 'rowexpansion':
          this.expandedRowTemplate = item.template;
          break;
        case 'groupheader':
          this.groupHeaderTemplate = item.template;
          break;
        case 'rowspan':
          this.rowspanTemplate = item.template;
          break;
        case 'groupfooter':
          this.groupFooterTemplate = item.template;
          break;
        case 'frozenrows':
          this.frozenRowsTemplate = item.template;
          break;
        case 'frozenheader':
          this.frozenHeaderTemplate = item.template;
          break;
        case 'frozenbody':
          this.frozenBodyTemplate = item.template;
          break;
        case 'frozenfooter':
          this.frozenFooterTemplate = item.template;
          break;
        case 'frozencolgroup':
          this.frozenColGroupTemplate = item.template;
          break;
        case 'frozenrowexpansion':
          this.frozenExpandedRowTemplate = item.template;
          break;
        case 'emptymessage':
          this.emptyMessageTemplate = item.template;
          break;
        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;
        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;
        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.isStateful() && this.resizableColumns) {
      this.restoreColumnWidths();
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored) {
        this.restoreState();
      }
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == 'single' && (this.sortField || this.groupRowsBy)) this.sortSingle();else if (this.sortMode == 'multiple' && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();else if (this.hasFilter())
          //sort already filters
          this._filter();
      }
      this.tableService.onValueChange(simpleChange.value.currentValue);
    }
    if (simpleChange.columns) {
      this._columns = simpleChange.columns.currentValue;
      this.tableService.onColumnsChange(simpleChange.columns.currentValue);
      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
      }
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsBy) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsByOrder) {
      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === 'multiple' && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  get columns() {
    return this._columns;
  }
  set columns(cols) {
    this._columns = cols;
  }
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  get rows() {
    return this._rows;
  }
  set rows(val) {
    this._rows = val;
  }
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  get selectAll() {
    return this._selection;
  }
  set selectAll(val) {
    this._selection = val;
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator) {
      const first = this.lazy ? 0 : this.first;
      return _data.slice(first, first + this.rows);
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === 'single') {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);
        if (this.scrollable) {
          this.resetScrollTop();
        }
      }
      this.sortSingle();
    }
    if (this.sortMode === 'multiple') {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }
        this._multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field: field,
            order: order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, field);
            let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field: field,
        order: order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === 'single') {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === 'multiple') {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  handleRowClick(event) {
    let target = event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || parentNode == 'INPUT' || parentNode == 'BUTTON' || parentNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
      return;
    }
    if (this.selectionMode) {
      let rowData = event.rowData;
      let rowIndex = event.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event.originalEvent);
        }
        this.rangeRowIndex = rowIndex;
        this.selectRange(event.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row'
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row',
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === 'single') {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === 'multiple') {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const rowData = event.rowData;
      const rowIndex = event.rowIndex;
      if (this.contextMenuSelectionMode === 'separate') {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.rowIndex
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === 'joint') {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
        this.tableService.onSelectionChange();
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event,
          data: rowData,
          index: event.rowIndex
        });
      }
    }
  }
  selectRange(event, rowIndex) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData)) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }
        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }
    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event,
      data: rangeRowsData,
      type: 'row'
    });
  }
  clearSelectionRange(event) {
    let rangeStart, rangeEnd;
    if (this.rangeRowIndex > this.anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (this.rangeRowIndex < this.anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: 'row'
      });
    }
  }
  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(rowData) > -1;else return this.equals(rowData, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }
    return true;
  }
  toggleRowWithRadio(event, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'radiobutton'
      });
      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'radiobutton'
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowWithCheckbox(event, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowsWithCheckbox(event, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent: event,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter(s => !data.some(d => this.equals(s, d))) : [];
      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data, index) => this.rowSelectable({
          data,
          index
        })) : selection;
      }
      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event,
        checked: check
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy === 'equals' ? data1 === data2 : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value: value,
        matchMode: matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, 'global', matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== undefined) {
      if (typeof filter === 'string' && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;else return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters['global']) {
          if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];
              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                  if (meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.OR && localMatch || meta.operator === primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters['global'].matchMode](primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value, this.filterLocale);
              if (globalMatch) {
                break;
              }
            }
          }
          let matches;
          if (this.filters['global']) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }
          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }
        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }
    if (this.restoringFilter) {
      this.restoringFilter = false;
    }
    this.cd.markForCheck();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.STARTS_WITH;
    let dataFieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    if (this.filters['global']) {
      this.filters['global'].value = null;
    }
    this.filteredValue = null;
    this.tableService.onResetChange();
    this.first = 0;
    this.firstChange.emit(this.first);
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }
  exportCSV(options) {
    let data;
    let csv = '';
    let columns = this.columns;
    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else if (options && options.allValues) {
      data = this.value || [];
    } else {
      data = this.filteredValue || this.value;
      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    }
    //headers
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      if (column.exportable !== false && column.field) {
        csv += '"' + this.getExportHeader(column) + '"';
        if (i < columns.length - 1) {
          csv += this.csvSeparator;
        }
      }
    }
    //body
    data.forEach((record, i) => {
      csv += '\n';
      for (let i = 0; i < columns.length; i++) {
        let column = columns[i];
        if (column.exportable !== false && column.field) {
          let cellData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(record, column.field);
          if (cellData != null) {
            if (this.exportFunction) {
              cellData = this.exportFunction({
                data: cellData,
                field: column.field
              });
            } else cellData = String(cellData).replace(/"/g, '""');
          } else cellData = '';
          csv += '"' + cellData + '"';
          if (i < columns.length - 1) {
            csv += this.csvSeparator;
          }
        }
      }
    });
    let blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    let link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);
    if (link.download !== undefined) {
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', this.exportFilename + '.csv');
      link.click();
    } else {
      csv = 'data:text/csv;charset=utf-8,' + csv;
      window.open(encodeURI(csv));
    }
    document.body.removeChild(link);
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit({
      ...this.createLazyLoadMetadata(),
      ...event,
      rows: event.last - event.first
    });
  }
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
      top: 0
    });
  }
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller.scrollToIndex(index);
  }
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = event => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.editingCell, 'p-cell-editing');
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }
        this.selfClick = false;
      };
      document.addEventListener('click', this.documentEditListener);
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      document.removeEventListener('click', this.documentEditListener);
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }
  saveRowEdit(rowData, rowElement) {
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(rowElement, '.ng-invalid.ng-dirty').length === 0) {
      let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }
  toggleRow(rowData, event) {
    if (!this.dataKey) {
      throw new Error('dataKey must be defined to use row expansion');
    }
    let dataKeyValue = String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === 'single') {
        this.expandedRowKeys = {};
      }
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event,
        data: rowData
      });
    }
    if (event) {
      event.preventDefault();
    }
    if (this.isStateful()) {
      this.saveState();
    }
  }
  isRowExpanded(rowData) {
    return this.expandedRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode === 'single';
  }
  isMultipleSelectionMode() {
    return this.selectionMode === 'multiple';
  }
  onColumnResizeBegin(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    this.resizeColumnElement = event.target.parentElement;
    this.columnResizing = true;
    this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
    this.onColumnResize(event);
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
    this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + 'px';
    this.resizeHelperViewChild.nativeElement.style.display = 'block';
  }
  onColumnResizeEnd() {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = this.resizeColumnElement.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, '') || 15;
    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === 'fit') {
        let nextColumn = this.resizeColumnElement.nextElementSibling;
        let nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === 'expand') {
        let tableWidth = this.tableViewChild.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + 'px');
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta: delta
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.resizeHelperViewChild.nativeElement.style.display = 'none';
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(this.resizeColumnElement);
    let widths = [];
    const tableHead = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.containerViewChild.nativeElement, '.p-datatable-thead');
    let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(tableHead, 'tr > th');
    headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(header)));
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = '';
    widths.forEach((width, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
      let style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style}
                }
            `;
    });
    this.styleElement.innerHTML = innerHTML;
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
    this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData('text', 'b'); // For firefox
  }

  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild.nativeElement);
      let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
        let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(dropHeader, 'preorderablecolumn');
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
      } else {
        event.dataTransfer.dropEffect = 'none';
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
      let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex: dragIndex,
          dropIndex: dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
      this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  onRowDragStart(event, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event.dataTransfer.setData('text', 'b'); // For firefox
  }

  onRowDragOver(event, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(rowElement).top + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWindowScrollTop();
      let pageY = event.pageY;
      let rowMidY = rowY + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        this.droppedRowIndex = index;
        if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
      } else {
        if (prevRowElement) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        this.droppedRowIndex = index + 1;
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
      }
    }
  }
  onRowDragLeave(event, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
  }
  onRowDragEnd(event) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll) {
        // TODO: Check
        this._value = [...this._value];
      }
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex: dropIndex
      });
    }
    //cleanup
    this.onRowDragLeave(event, rowElement);
    this.onRowDragEnd(event);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    switch (this.stateStorage) {
      case 'local':
        return window.localStorage;
      case 'session':
        return window.sessionStorage;
      default:
        throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
    }
  }
  isStateful() {
    return this.stateKey != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state = {};
    if (this.paginator) {
      state.first = this.first;
      state.rows = this.rows;
    }
    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) {
      state.multiSortMeta = this.multiSortMeta;
    }
    if (this.hasFilter()) {
      state.filters = this.filters;
    }
    if (this.resizableColumns) {
      this.saveColumnWidths(state);
    }
    if (this.reorderableColumns) {
      this.saveColumnOrder(state);
    }
    if (this.selection) {
      state.selection = this.selection;
    }
    if (Object.keys(this.expandedRowKeys).length) {
      state.expandedRowKeys = this.expandedRowKeys;
    }
    storage.setItem(this.stateKey, JSON.stringify(state));
    this.onStateSave.emit(state);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function (key, value) {
      if (typeof value === 'string' && dateFormat.test(value)) {
        return new Date(value);
      }
      return value;
    };
    if (stateString) {
      let state = JSON.parse(stateString, reviver);
      if (this.paginator) {
        if (this.first !== undefined) {
          this.first = state.first;
          this.firstChange.emit(this.first);
        }
        if (this.rows !== undefined) {
          this.rows = state.rows;
          this.rowsChange.emit(this.rows);
        }
      }
      if (state.sortField) {
        this.restoringSort = true;
        this._sortField = state.sortField;
        this._sortOrder = state.sortOrder;
      }
      if (state.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state.multiSortMeta;
      }
      if (state.filters) {
        this.restoringFilter = true;
        this.filters = state.filters;
      }
      if (this.resizableColumns) {
        this.columnWidthsState = state.columnWidths;
        this.tableWidthState = state.tableWidth;
      }
      if (state.expandedRowKeys) {
        this.expandedRowKeys = state.expandedRowKeys;
      }
      if (state.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
      }
      this.stateRestored = true;
      this.onStateRestore.emit(state);
    }
  }
  saveColumnWidths(state) {
    let widths = [];
    let headers = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.containerViewChild.nativeElement, '.p-datatable-thead > tr > th');
    headers.forEach(header => widths.push(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(',');
    if (this.columnResizeMode === 'expand') {
      state.tableWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(this.tableViewChild.nativeElement);
    }
  }
  setResizeTableWidth(width) {
    this.tableViewChild.nativeElement.style.width = width;
    this.tableViewChild.nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(',');
      if (this.columnResizeMode === 'expand' && this.tableWidthState) {
        this.setResizeTableWidth(this.tableWidthState + 'px');
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = '';
        widths.forEach((width, index) => {
          let style = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map(column => {
        columnOrder.push(column.field || column.key);
      });
      state.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    if (stateString) {
      let state = JSON.parse(stateString);
      let columnOrder = state.columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map(key => {
          let col = this.findColumnByKey(key);
          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;else continue;
      }
    } else {
      return null;
    }
  }
  createStyleElement() {
    this.styleElement = document.createElement('style');
    this.styleElement.type = 'text/css';
    document.head.appendChild(this.styleElement);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }
  createResponsiveStyle() {
    if (!this.responsiveStyleElement) {
      this.responsiveStyleElement = document.createElement('style');
      this.responsiveStyleElement.type = 'text/css';
      document.head.appendChild(this.responsiveStyleElement);
      let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    #${this.id}-table > .p-datatable-thead > tr > th,
    #${this.id}-table > .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    #${this.id}-table > .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    #${this.id}.p-datatable-gridlines > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    #${this.id}-table > .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;
      this.responsiveStyleElement.innerHTML = innerHTML;
    }
  }
  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      document.head.removeChild(this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }
  destroyStyleElement() {
    if (this.styleElement) {
      document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  }
}
Table.ɵfac = function Table_Factory(t) {
  return new (t || Table)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};
Table.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Table,
  selectors: [["p-table"]],
  contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Table_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableHeaderViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableFooterViewChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    frozenColumns: "frozenColumns",
    frozenValue: "frozenValue",
    style: "style",
    styleClass: "styleClass",
    tableStyle: "tableStyle",
    tableStyleClass: "tableStyleClass",
    paginator: "paginator",
    pageLinks: "pageLinks",
    rowsPerPageOptions: "rowsPerPageOptions",
    alwaysShowPaginator: "alwaysShowPaginator",
    paginatorPosition: "paginatorPosition",
    paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
    paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
    currentPageReportTemplate: "currentPageReportTemplate",
    showCurrentPageReport: "showCurrentPageReport",
    showJumpToPageDropdown: "showJumpToPageDropdown",
    showJumpToPageInput: "showJumpToPageInput",
    showFirstLastIcon: "showFirstLastIcon",
    showPageLinks: "showPageLinks",
    defaultSortOrder: "defaultSortOrder",
    sortMode: "sortMode",
    resetPageOnSort: "resetPageOnSort",
    selectionMode: "selectionMode",
    selectionPageOnly: "selectionPageOnly",
    contextMenuSelection: "contextMenuSelection",
    contextMenuSelectionMode: "contextMenuSelectionMode",
    dataKey: "dataKey",
    metaKeySelection: "metaKeySelection",
    rowSelectable: "rowSelectable",
    rowTrackBy: "rowTrackBy",
    lazy: "lazy",
    lazyLoadOnInit: "lazyLoadOnInit",
    compareSelectionBy: "compareSelectionBy",
    csvSeparator: "csvSeparator",
    exportFilename: "exportFilename",
    filters: "filters",
    globalFilterFields: "globalFilterFields",
    filterDelay: "filterDelay",
    filterLocale: "filterLocale",
    expandedRowKeys: "expandedRowKeys",
    editingRowKeys: "editingRowKeys",
    rowExpandMode: "rowExpandMode",
    scrollable: "scrollable",
    scrollDirection: "scrollDirection",
    rowGroupMode: "rowGroupMode",
    scrollHeight: "scrollHeight",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    virtualScrollDelay: "virtualScrollDelay",
    frozenWidth: "frozenWidth",
    responsive: "responsive",
    contextMenu: "contextMenu",
    resizableColumns: "resizableColumns",
    columnResizeMode: "columnResizeMode",
    reorderableColumns: "reorderableColumns",
    loading: "loading",
    loadingIcon: "loadingIcon",
    showLoader: "showLoader",
    rowHover: "rowHover",
    customSort: "customSort",
    showInitialSortBadge: "showInitialSortBadge",
    autoLayout: "autoLayout",
    exportFunction: "exportFunction",
    exportHeader: "exportHeader",
    stateKey: "stateKey",
    stateStorage: "stateStorage",
    editMode: "editMode",
    groupRowsBy: "groupRowsBy",
    groupRowsByOrder: "groupRowsByOrder",
    responsiveLayout: "responsiveLayout",
    breakpoint: "breakpoint",
    virtualRowHeight: "virtualRowHeight",
    value: "value",
    columns: "columns",
    first: "first",
    rows: "rows",
    totalRecords: "totalRecords",
    sortField: "sortField",
    sortOrder: "sortOrder",
    multiSortMeta: "multiSortMeta",
    selection: "selection",
    selectAll: "selectAll"
  },
  outputs: {
    selectAllChange: "selectAllChange",
    selectionChange: "selectionChange",
    contextMenuSelectionChange: "contextMenuSelectionChange",
    onRowSelect: "onRowSelect",
    onRowUnselect: "onRowUnselect",
    onPage: "onPage",
    onSort: "onSort",
    onFilter: "onFilter",
    onLazyLoad: "onLazyLoad",
    onRowExpand: "onRowExpand",
    onRowCollapse: "onRowCollapse",
    onContextMenuSelect: "onContextMenuSelect",
    onColResize: "onColResize",
    onColReorder: "onColReorder",
    onRowReorder: "onRowReorder",
    onEditInit: "onEditInit",
    onEditComplete: "onEditComplete",
    onEditCancel: "onEditCancel",
    onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
    sortFunction: "sortFunction",
    firstChange: "firstChange",
    rowsChange: "rowsChange",
    onStateSave: "onStateSave",
    onStateRestore: "onStateRestore"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TableService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 16,
  vars: 22,
  consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], [1, "p-datatable-wrapper", 3, "ngStyle"], ["wrapper", ""], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["buildInTable", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-datatable-reorder-indicator-up", "style", "display: none;", 4, "ngIf"], ["class", "pi pi-arrow-up p-datatable-reorder-indicator-down", "style", "display: none;", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [1, "p-datatable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], [3, "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "ngClass"], ["table", ""], [1, "p-datatable-thead"], ["thead", ""], ["class", "p-datatable-tbody p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], [1, "p-datatable-tbody", 3, "ngClass", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["class", "p-datatable-scroller-spacer", 3, "style", 4, "ngIf"], ["class", "p-datatable-tfoot", 4, "ngIf"], [1, "p-datatable-tbody", "p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], [1, "p-datatable-scroller-spacer"], [1, "p-datatable-tfoot"], ["tfoot", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-datatable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-datatable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
  template: function Table_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Table_div_2_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Table_div_3_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Table_p_paginator_4_Template, 1, 17, "p-paginator", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Table_p_scroller_7_Template, 3, 17, "p-scroller", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Table_ng_container_8_Template, 2, 7, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Table_ng_template_9_Template, 10, 28, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Table_p_paginator_11_Template, 1, 17, "p-paginator", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Table_div_12_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Table_div_13_Template, 2, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Table_span_14_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, Table_span_15_Template, 2, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c14, ctx.rowHover || ctx.selectionMode, ctx.scrollable, ctx.scrollable && ctx.scrollHeight === "flex"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c15, ctx.virtualScroll ? "" : ctx.scrollHeight));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.Paginator, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.Scroller, TableBody];
  },
  styles: [".p-datatable{position:relative}.p-datatable>.p-datatable-wrapper{overflow:auto}.p-datatable-table{border-spacing:0px;width:100%}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable>.p-datatable-wrapper{position:relative}.p-datatable-scrollable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable>.p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header{position:sticky;z-index:1}.p-datatable-resizable-table>.p-datatable-thead>tr>th,.p-datatable-resizable-table>.p-datatable-tfoot>tr>td,.p-datatable-resizable-table>.p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable-table>.p-datatable-thead>tr>th.p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-table-fit>.p-datatable-thead>tr>th.p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable-tbody>tr>td>.p-column-title{display:none}.p-datatable-scroller-spacer{display:flex}.p-datatable .p-scroller .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Table, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-table',
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-datatable p-component': true, 'p-datatable-hoverable-rows': rowHover || selectionMode, 'p-datatable-scrollable': scrollable, 'p-datatable-flex-scrollable': scrollable && scrollHeight === 'flex' }"
            [attr.id]="id"
        >
            <div class="p-datatable-loading-overlay p-component-overlay" *ngIf="loading && showLoader">
                <i [class]="'p-datatable-loading-icon pi-spin ' + loadingIcon"></i>
            </div>
            <div *ngIf="captionTemplate" class="p-datatable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
            ></p-paginator>

            <div #wrapper class="p-datatable-wrapper" [ngStyle]="{ maxHeight: virtualScroll ? '' : scrollHeight }">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="processedData"
                    [columns]="columns"
                    [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                    [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                    [itemSize]="virtualScrollItemSize || _virtualRowHeight"
                    [step]="rows"
                    [delay]="lazy ? virtualScrollDelay : 0"
                    [inline]="true"
                    [lazy]="lazy"
                    (onLazyLoad)="onLazyItemLoad($event)"
                    [loaderDisabled]="true"
                    [showSpacer]="false"
                    [showLoader]="loadingBodyTemplate"
                    [options]="virtualScrollOptions"
                    [autoSize]="true"
                >
                    <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="buildInTable; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                    </ng-template>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container *ngTemplateOutlet="buildInTable; context: { $implicit: processedData, options: { columns } }"></ng-container>
                </ng-container>

                <ng-template #buildInTable let-items let-scrollerOptions="options">
                    <table
                        #table
                        role="table"
                        [ngClass]="{ 'p-datatable-table': true, 'p-datatable-scrollable-table': scrollable, 'p-datatable-resizable-table': resizableColumns, 'p-datatable-resizable-table-fit': resizableColumns && columnResizeMode === 'fit' }"
                        [class]="tableStyleClass"
                        [style]="tableStyle"
                        [attr.id]="id + '-table'"
                    >
                        <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        <thead #thead class="p-datatable-thead">
                            <ng-container *ngTemplateOutlet="headerGroupedTemplate || headerTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        </thead>
                        <tbody
                            class="p-datatable-tbody p-datatable-frozen-tbody"
                            *ngIf="frozenValue || frozenBodyTemplate"
                            [value]="frozenValue"
                            [frozenRows]="true"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="frozenBodyTemplate"
                            [frozen]="true"
                        ></tbody>
                        <tbody
                            class="p-datatable-tbody"
                            [ngClass]="scrollerOptions.contentStyleClass"
                            [style]="scrollerOptions.contentStyle"
                            [value]="dataToRender(scrollerOptions.rows)"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="bodyTemplate"
                            [scrollerOptions]="scrollerOptions"
                        ></tbody>
                        <tbody *ngIf="scrollerOptions.spacerStyle" [style]="'height: calc(' + scrollerOptions.spacerStyle.height + ' - ' + scrollerOptions.rows.length * scrollerOptions.itemSize + 'px);'" class="p-datatable-scroller-spacer"></tbody>
                        <tfoot *ngIf="footerGroupedTemplate || footerTemplate" #tfoot class="p-datatable-tfoot">
                            <ng-container *ngTemplateOutlet="footerGroupedTemplate || footerTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        </tfoot>
                    </table>
                </ng-template>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
            ></p-paginator>

            <div *ngIf="summaryTemplate" class="p-datatable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="pi pi-arrow-down p-datatable-reorder-indicator-up" style="display: none;" *ngIf="reorderableColumns"></span>
            <span #reorderIndicatorDown class="pi pi-arrow-up p-datatable-reorder-indicator-down" style="display: none;" *ngIf="reorderableColumns"></span>
        </div>
    `,
      providers: [TableService],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-datatable{position:relative}.p-datatable>.p-datatable-wrapper{overflow:auto}.p-datatable-table{border-spacing:0px;width:100%}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable>.p-datatable-wrapper{position:relative}.p-datatable-scrollable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable>.p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header{position:sticky;z-index:1}.p-datatable-resizable-table>.p-datatable-thead>tr>th,.p-datatable-resizable-table>.p-datatable-tfoot>tr>td,.p-datatable-resizable-table>.p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable-table>.p-datatable-thead>tr>th.p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-table-fit>.p-datatable-thead>tr>th.p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable-tbody>tr>td>.p-column-title{display:none}.p-datatable-scroller-spacer{display:flex}.p-datatable .p-scroller .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterService
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    frozenColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tableStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowsPerPageOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alwaysShowPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    paginatorDropdownScrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currentPageReportTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCurrentPageReport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showJumpToPageDropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showJumpToPageInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showFirstLastIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showPageLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultSortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resetPageOnSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionPageOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAllChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contextMenuSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contextMenuSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contextMenuSelectionMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    metaKeySelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazyLoadOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareSelectionBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    csvSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportFilename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    globalFilterFields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterLocale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expandedRowKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editingRowKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowExpandMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollDirection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowGroupMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScrollDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnResizeMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderableColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showLoader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showInitialSortBadge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    exportHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stateStorage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsByOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsiveLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onRowSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onContextMenuSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onColResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onColReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onRowReorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onEditCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHeaderCheckboxToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sortFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    firstChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onStateSave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onStateRestore: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    containerViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    resizeHelperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['resizeHelper']
    }],
    reorderIndicatorUpViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['reorderIndicatorUp']
    }],
    reorderIndicatorDownViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['reorderIndicatorDown']
    }],
    wrapperViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['wrapper']
    }],
    tableViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['table']
    }],
    tableHeaderViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['thead']
    }],
    tableFooterViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tfoot']
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    virtualRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    first: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalRecords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiSortMeta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class TableBody {
  constructor(dt, tableService, cd, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.el = el;
    this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
      if (this.dt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  ngAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === 'subheader') {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowData = value[i + 1];
    if (nextRowData) {
      let nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) {
        nextRowFieldData = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      } else {
        break;
      }
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + 'px';
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
    }
  }
  getScrollerOption(option, options) {
    if (this.dt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dt.paginator ? this.dt.first + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption('getItemOptions');
    return getItemOptions ? getItemOptions(index).index : index;
  }
}
TableBody.ɵfac = function TableBody_Factory(t) {
  return new (t || TableBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
TableBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableBody,
  selectors: [["", "pTableBody", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: ["pTableBody", "columns"],
    template: ["pTableBodyTemplate", "template"],
    value: "value",
    frozen: "frozen",
    frozenRows: "frozenRows",
    scrollerOptions: "scrollerOptions"
  },
  attrs: _c16,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dt.expandedRowTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.expandedRowTemplate && !(ctx.frozen && ctx.dt.frozenExpandedRowTemplate));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.frozenExpandedRowTemplate && ctx.frozen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[pTableBody]',
      template: `
        <ng-container *ngIf="!dt.expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="dt.groupHeaderTemplate && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="dt.groupHeaderTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode !== 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="rowData ? template : dt.loadingBodyTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode === 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen,
                                rowgroup: shouldRenderRowspan(value, rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value, rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupFooterTemplate && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="dt.groupFooterTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.expandedRowTemplate && !(frozen && dt.frozenExpandedRowTemplate)">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="!dt.groupHeaderTemplate">
                    <ng-container
                        *ngTemplateOutlet="template; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupHeaderTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate;
                            context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.expandedRowTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, frozen: frozen }"></ng-container>
                    <ng-container *ngIf="dt.groupFooterTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))" role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dt.groupFooterTemplate;
                                context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }
                            "
                        ></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.frozenExpandedRowTemplate && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container
                    *ngTemplateOutlet="template; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                ></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.frozenExpandedRowTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, frozen: frozen }"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pTableBody']
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pTableBodyTemplate']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollerOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class RowGroupHeader {
  constructor(dt) {
    this.dt = dt;
  }
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : '';
  }
}
RowGroupHeader.ɵfac = function RowGroupHeader_Factory(t) {
  return new (t || RowGroupHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};
RowGroupHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RowGroupHeader,
  selectors: [["", "pRowGroupHeader", ""]],
  hostAttrs: [1, "p-rowgroup-header", "p-element"],
  hostVars: 2,
  hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.getFrozenRowGroupHeaderStickyPosition);
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowGroupHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pRowGroupHeader]',
      host: {
        class: 'p-rowgroup-header p-element',
        '[style.top]': 'getFrozenRowGroupHeaderStickyPosition'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, null);
})();
class FrozenColumn {
  constructor(el) {
    this.el = el;
    this.alignFrozen = 'left';
    this._frozen = true;
  }
  get frozen() {
    return this._frozen;
  }
  set frozen(val) {
    this._frozen = val;
    this.updateStickyPosition();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateStickyPosition();
    }, 1000);
  }
  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === 'right') {
        let right = 0;
        let next = this.el.nativeElement.nextElementSibling;
        if (next) {
          right = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
        }
        this.el.nativeElement.style.right = right + 'px';
      } else {
        let left = 0;
        let prev = this.el.nativeElement.previousElementSibling;
        if (prev) {
          left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
        }
        this.el.nativeElement.style.left = left + 'px';
      }
      let filterRow = this.el.nativeElement.parentElement.nextElementSibling;
      if (filterRow) {
        let index = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(this.el.nativeElement);
        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }
}
FrozenColumn.ɵfac = function FrozenColumn_Factory(t) {
  return new (t || FrozenColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
FrozenColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FrozenColumn,
  selectors: [["", "pFrozenColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-frozen-column", ctx.frozen);
    }
  },
  inputs: {
    frozen: "frozen",
    alignFrozen: "alignFrozen"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrozenColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pFrozenColumn]',
      host: {
        class: 'p-element',
        '[class.p-frozen-column]': 'frozen'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    frozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    alignFrozen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class SortableColumn {
  constructor(dt) {
    this.dt = dt;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    this.sorted = this.dt.isSorted(this.field);
    this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? 'ascending' : 'descending' : 'none';
  }
  onClick(event) {
    if (this.isEnabled() && !this.isFilterElement(event.target)) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event,
        field: this.field
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
  }
  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }
  isFilterElement(element) {
    return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(element, 'pi-filter-icon') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(element, 'p-column-filter-menu-button');
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
SortableColumn.ɵfac = function SortableColumn_Factory(t) {
  return new (t || SortableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};
SortableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SortableColumn,
  selectors: [["", "pSortableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 7,
  hostBindings: function SortableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKey($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    }
  },
  inputs: {
    field: ["pSortableColumn", "field"],
    pSortableColumnDisabled: "pSortableColumnDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSortableColumn]',
      host: {
        class: 'p-element',
        '[class.p-sortable-column]': 'isEnabled()',
        '[class.p-highlight]': 'sorted',
        '[attr.tabindex]': 'isEnabled() ? "0" : null',
        '[attr.role]': '"columnheader"',
        '[attr.aria-sort]': 'sortOrder'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pSortableColumn']
    }],
    pSortableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }]
  });
})();
class SortIcon {
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
      this.updateSortState();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.dt.sortMode === 'single') {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === 'multiple') {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.cd.markForCheck();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dt.sortMode === 'multiple' && (this.dt.showInitialSortBadge || multiSortMeta.length > 1)) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return this.dt.groupRowsBy && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dt.sortMode === 'multiple' && this.getMultiSortMetaIndex() > -1;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
SortIcon.ɵfac = function SortIcon_Factory(t) {
  return new (t || SortIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
SortIcon.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SortIcon,
  selectors: [["p-sortIcon"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field"
  },
  decls: 2,
  vars: 6,
  consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"], ["class", "p-sortable-column-badge", 4, "ngIf"], [1, "p-sortable-column-badge"]],
  template: function SortIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIcon_span_1_Template, 2, 1, "span", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c22, ctx.sortOrder === 1, ctx.sortOrder === -1, ctx.sortOrder === 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiSorted());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-sortIcon',
      template: `
        <i class="p-sortable-column-icon pi pi-fw" [ngClass]="{ 'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0 }"></i>
        <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{ getBadgeValue() }}</span>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class SelectableRow {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event);
    }
  }
  onArrowDownKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) {
      nextRow.focus();
    }
    event.preventDefault();
  }
  onArrowUpKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) {
      prevRow.focus();
    }
    event.preventDefault();
  }
  onEnterKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    this.dt.handleRowClick({
      originalEvent: event,
      rowData: this.data,
      rowIndex: this.index
    });
  }
  onPageDownKeyDown() {
    if (this.dt.virtualScroll) {
      this.dt.scroller.elementViewChild.nativeElement.focus();
    }
  }
  onSpaceKeydown() {
    if (this.dt.virtualScroll && !this.dt.editingCell) {
      this.dt.scroller.elementViewChild.nativeElement.focus();
    }
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextRow, 'p-selectable-row')) return nextRow;else return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevRow, 'p-selectable-row')) return prevRow;else return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
SelectableRow.ɵfac = function SelectableRow_Factory(t) {
  return new (t || SelectableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
};
SelectableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SelectableRow,
  selectors: [["", "pSelectableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 5,
  hostBindings: function SelectableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDownKeyDown($event);
      })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUpKeyDown($event);
      })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.shift.enter", function SelectableRow_keydown_shift_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.meta.enter", function SelectableRow_keydown_meta_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.pagedown", function SelectableRow_keydown_pagedown_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.pageup", function SelectableRow_keydown_pageup_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.home", function SelectableRow_keydown_home_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.end", function SelectableRow_keydown_end_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.space", function SelectableRow_keydown_space_HostBindingHandler() {
        return ctx.onSpaceKeydown();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRow", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSelectableRow]',
      host: {
        class: 'p-element',
        '[class.p-selectable-row]': 'isEnabled()',
        '[class.p-highlight]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pSelectableRow']
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pSelectableRowIndex']
    }],
    pSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onTouchEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['touchend', ['$event']]
    }],
    onArrowDownKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowdown', ['$event']]
    }],
    onArrowUpKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowup', ['$event']]
    }],
    onEnterKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.shift.enter', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.meta.enter', ['$event']]
    }],
    onPageDownKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.pagedown']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.pageup']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.home']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.end']
    }],
    onSpaceKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.space']
    }]
  });
})();
class SelectableRowDblClick {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) {
  return new (t || SelectableRowDblClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService));
};
SelectableRowDblClick.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SelectableRowDblClick,
  selectors: [["", "pSelectableRowDblClick", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 4,
  hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRowDblClick", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectableRowDblClick, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSelectableRowDblClick]',
      host: {
        class: 'p-element',
        '[class.p-selectable-row]': 'isEnabled()',
        '[class.p-highlight]': 'selected'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pSelectableRowDblClick']
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pSelectableRowIndex']
    }],
    pSelectableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dblclick', ['$event']]
    }]
  });
})();
class ContextMenuRow {
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.contextMenuSource$.subscribe(data => {
        this.selected = this.dt.equals(this.data, data);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.dt.handleRowRightClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) {
  return new (t || ContextMenuRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ContextMenuRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ContextMenuRow,
  selectors: [["", "pContextMenuRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 3,
  hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
        return ctx.onContextMenu($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight-contextmenu", ctx.selected);
    }
  },
  inputs: {
    data: ["pContextMenuRow", "data"],
    index: ["pContextMenuRowIndex", "index"],
    pContextMenuRowDisabled: "pContextMenuRowDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pContextMenuRow]',
      host: {
        class: 'p-element',
        '[class.p-highlight-contextmenu]': 'selected',
        '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pContextMenuRow']
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pContextMenuRowIndex']
    }],
    pContextMenuRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class RowToggler {
  constructor(dt) {
    this.dt = dt;
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.toggleRow(this.data, event);
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }
}
RowToggler.ɵfac = function RowToggler_Factory(t) {
  return new (t || RowToggler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table));
};
RowToggler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RowToggler,
  selectors: [["", "pRowToggler", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function RowToggler_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RowToggler_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    data: ["pRowToggler", "data"],
    pRowTogglerDisabled: "pRowTogglerDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowToggler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pRowToggler]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pRowToggler']
    }],
    pRowTogglerDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();
class ResizableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
      this.resizer = document.createElement('span');
      this.resizer.className = 'p-column-resizer';
      this.el.nativeElement.appendChild(this.resizer);
      this.zone.runOutsideAngular(() => {
        this.resizerMouseDownListener = this.onMouseDown.bind(this);
        this.resizer.addEventListener('mousedown', this.resizerMouseDownListener);
      });
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.onDocumentMouseMove.bind(this);
      document.addEventListener('mousemove', this.documentMouseMoveListener);
      this.documentMouseUpListener = this.onDocumentMouseUp.bind(this);
      document.addEventListener('mouseup', this.documentMouseUpListener);
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      document.removeEventListener('mousemove', this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener('mouseup', this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onMouseDown(event) {
    if (event.which === 1) {
      this.dt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
  }
  onDocumentMouseMove(event) {
    this.dt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
    }
    this.unbindDocumentEvents();
  }
}
ResizableColumn.ɵfac = function ResizableColumn_Factory(t) {
  return new (t || ResizableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ResizableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizableColumn,
  selectors: [["", "pResizableColumn", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    pResizableColumnDisabled: "pResizableColumnDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pResizableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    pResizableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ReorderableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.onMouseDown.bind(this);
      this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
      this.dragStartListener = this.onDragStart.bind(this);
      this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
      this.dragOverListener = this.onDragOver.bind(this);
      this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
      this.dragEnterListener = this.onDragEnter.bind(this);
      this.el.nativeElement.addEventListener('dragenter', this.dragEnterListener);
      this.dragLeaveListener = this.onDragLeave.bind(this);
      this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
      this.mouseDownListener = null;
    }
    if (this.dragOverListener) {
      this.el.nativeElement.removeEventListener('dragover', this.dragOverListener);
      this.dragOverListener = null;
    }
    if (this.dragStartListener) {
      this.el.nativeElement.removeEventListener('dragstart', this.dragStartListener);
      this.dragStartListener = null;
    }
    if (this.dragEnterListener) {
      this.el.nativeElement.removeEventListener('dragenter', this.dragEnterListener);
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.el.nativeElement.removeEventListener('dragleave', this.dragLeaveListener);
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.dt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.dt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.dt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.dt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
}
ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) {
  return new (t || ReorderableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ReorderableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableColumn,
  selectors: [["", "pReorderableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    pReorderableColumnDisabled: "pReorderableColumnDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    pReorderableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();
class EditableColumn {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.selfClick = true;
      if (this.dt.editingCell) {
        if (this.dt.editingCell !== this.el.nativeElement) {
          if (!this.dt.isEditingCellValid()) {
            return;
          }
          this.closeEditingCell(true, event);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
    this.dt.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || 'input, textarea, select';
        let focusableElement = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });
    this.overlayEventListener = e => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dt.selfClick = true;
      }
    };
    this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event) {
    if (completed) {
      this.dt.onEditComplete.emit({
        field: this.dt.editingCellField,
        data: this.data,
        originalEvent: event,
        index: this.dt.editingCellRowIndex
      });
    } else {
      this.dt.onEditCancel.emit({
        field: this.dt.editingCellField,
        data: this.dt.editingCellData,
        originalEvent: event,
        index: this.dt.editingCellRowIndex
      });
      this.dt.value.forEach(element => {
        if (element[this.dt.editingCellField] === this.data) {
          element[this.dt.editingCellField] = this.dt.editingCellData;
        }
      });
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.dt.editingCell, 'p-cell-editing');
    this.dt.editingCell = null;
    this.dt.editingCellData = null;
    this.dt.editingCellField = null;
    this.dt.unbindDocumentEditListener();
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  onEnterKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onTabKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onEscapeKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(false, event);
      }
      event.preventDefault();
    }
  }
  onShiftKeyDown(event) {
    if (this.isEnabled()) {
      if (event.shiftKey) this.moveToPreviousCell(event);else {
        this.moveToNextCell(event);
      }
    }
  }
  onArrowDown(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        }
        event.preventDefault();
      }
    }
  }
  onArrowUp(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        }
        event.preventDefault();
      }
    }
  }
  onArrowLeft(event) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event);
    }
  }
  onArrowRight(event) {
    if (this.isEnabled()) {
      this.moveToNextCell(event);
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(cell, 'p-cell-editing')) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(event.target, 'blur');
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement.previousElementSibling;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement.nextElementSibling;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextCell, 'p-editable-column')) {
        return nextCell;
      }
      return null;
    } else {
      return null;
    }
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevCell, 'p-editable-column')) {
        return prevCell;
      }
      return null;
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
}
EditableColumn.ɵfac = function EditableColumn_Factory(t) {
  return new (t || EditableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
EditableColumn.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EditableColumn,
  selectors: [["", "pEditableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function EditableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKeyDown($event);
      })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDown($event);
      })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUp($event);
      })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
        return ctx.onArrowLeft($event);
      })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
        return ctx.onArrowRight($event);
      });
    }
  },
  inputs: {
    data: ["pEditableColumn", "data"],
    field: ["pEditableColumnField", "field"],
    rowIndex: ["pEditableColumnRowIndex", "rowIndex"],
    pEditableColumnDisabled: "pEditableColumnDisabled",
    pFocusCellSelector: "pFocusCellSelector"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pEditableColumn]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pEditableColumn']
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pEditableColumnField']
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pEditableColumnRowIndex']
    }],
    pEditableColumnDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pFocusCellSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onEnterKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.enter', ['$event']]
    }],
    onTabKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.tab', ['$event']]
    }],
    onEscapeKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.escape', ['$event']]
    }],
    onShiftKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.shift.tab', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.meta.tab', ['$event']]
    }],
    onArrowDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowdown', ['$event']]
    }],
    onArrowUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowup', ['$event']]
    }],
    onArrowLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowleft', ['$event']]
    }],
    onArrowRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown.arrowright', ['$event']]
    }]
  });
})();
class EditableRow {
  constructor(el) {
    this.el = el;
  }
  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }
}
EditableRow.ɵfac = function EditableRow_Factory(t) {
  return new (t || EditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
EditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: EditableRow,
  selectors: [["", "pEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    data: ["pEditableRow", "data"],
    pEditableRowDisabled: "pEditableRowDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pEditableRow]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pEditableRow']
    }],
    pEditableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InitEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.initRowEdit(this.editableRow.data);
    event.preventDefault();
  }
}
InitEditableRow.ɵfac = function InitEditableRow_Factory(t) {
  return new (t || InitEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};
InitEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: InitEditableRow,
  selectors: [["", "pInitEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InitEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pInitEditableRow]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();
class SaveEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event.preventDefault();
  }
}
SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) {
  return new (t || SaveEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};
SaveEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: SaveEditableRow,
  selectors: [["", "pSaveEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pSaveEditableRow]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();
class CancelEditableRow {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.cancelRowEdit(this.editableRow.data);
    event.preventDefault();
  }
}
CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) {
  return new (t || CancelEditableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow));
};
CancelEditableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CancelEditableRow,
  selectors: [["", "pCancelEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancelEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelEditableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pCancelEditableRow]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();
class CellEditor {
  constructor(dt, editableColumn, editableRow) {
    this.dt = dt;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;
        case 'output':
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  get editing() {
    return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === 'row' && this.dt.isRowEditing(this.editableRow.data);
  }
}
CellEditor.ɵfac = function CellEditor_Factory(t) {
  return new (t || CellEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableColumn, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EditableRow, 8));
};
CellEditor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CellEditor,
  selectors: [["p-cellEditor"]],
  contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
  template: function CellEditor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellEditor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-cellEditor',
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: EditableColumn,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: EditableRow,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();
class TableRadioButton {
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithRadio({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
      this.inputViewChild.nativeElement?.focus();
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
TableRadioButton.ɵfac = function TableRadioButton_Factory(t) {
  return new (t || TableRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
TableRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableRadioButton,
  selectors: [["p-tableRadioButton"]],
  viewQuery: function TableRadioButton_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c23, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 7,
  vars: 16,
  consts: [[1, "p-radiobutton", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["rb", ""], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "p-radiobutton-icon"]],
  template: function TableRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableRadioButton_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableRadioButton_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableRadioButton_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c24, ctx.focused, ctx.checked, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c25, ctx.checked, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableRadioButton',
      template: `
        <div class="p-radiobutton p-component" [ngClass]="{ 'p-radiobutton-focused': focused, 'p-radiobutton-checked': checked, 'p-radiobutton-disabled': disabled }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-radiobutton-box p-component': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': disabled }" role="radio" [attr.aria-checked]="checked">
                <div class="p-radiobutton-icon"></div>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputViewChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['rb']
    }]
  });
})();
class TableCheckbox {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
TableCheckbox.ɵfac = function TableCheckbox_Factory(t) {
  return new (t || TableCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
TableCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableCheckbox,
  selectors: [["p-tableCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    required: "required",
    ariaLabel: "ariaLabel"
  },
  decls: 6,
  vars: 19,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]],
  template: function TableCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c26, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c27, ctx.checked, ctx.focused, ctx.disabled));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c28, ctx.checked));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused, 'p-checkbox-disabled': disabled }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled" [attr.required]="required" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box p-component': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{ 'pi pi-check': checked }"></span>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class TableHeaderCheckbox {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event, !this.checked);
      }
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dt._selectAll !== null) {
      return this.dt._selectAll;
    } else {
      const data = this.dt.selectionPageOnly ? this.dt.dataToRender(this.dt.processedData) : this.dt.processedData;
      const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
      const selectableVal = this.dt.rowSelectable ? val.filter((data, index) => this.dt.rowSelectable({
        data,
        index
      })) : val;
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(selectableVal) && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every(v => this.dt.selection.some(s => this.dt.equals(v, s)));
    }
  }
}
TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) {
  return new (t || TableHeaderCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
TableHeaderCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TableHeaderCheckbox,
  selectors: [["p-tableHeaderCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 7,
  vars: 18,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]],
  template: function TableHeaderCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c26, ctx.focused, ctx.isDisabled()));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c29, ctx.checked, ctx.focused, ctx.isDisabled()));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c28, ctx.checked));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableHeaderCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-tableHeaderCheckbox',
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused, 'p-checkbox-disabled': isDisabled() }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="isDisabled()" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': isDisabled() }" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="{ 'pi pi-check': checked }"></span>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ReorderableRowHandle {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-datatable-reorderablerow-handle');
  }
}
ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) {
  return new (t || ReorderableRowHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ReorderableRowHandle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableRowHandle,
  selectors: [["", "pReorderableRowHandle", ""]],
  hostAttrs: [1, "p-element"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRowHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableRowHandle]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
class ReorderableRow {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.onMouseDown.bind(this);
      this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
      this.dragStartListener = this.onDragStart.bind(this);
      this.el.nativeElement.addEventListener('dragstart', this.dragStartListener);
      this.dragEndListener = this.onDragEnd.bind(this);
      this.el.nativeElement.addEventListener('dragend', this.dragEndListener);
      this.dragOverListener = this.onDragOver.bind(this);
      this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
      this.dragLeaveListener = this.onDragLeave.bind(this);
      this.el.nativeElement.addEventListener('dragleave', this.dragLeaveListener);
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.el.nativeElement.removeEventListener('dragstart', this.dragStartListener);
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.el.nativeElement.removeEventListener('dragend', this.dragEndListener);
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.el.nativeElement.removeEventListener('dragover', this.dragOverListener);
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.el.nativeElement.removeEventListener('dragleave', this.dragLeaveListener);
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) this.el.nativeElement.draggable = true;else this.el.nativeElement.draggable = false;
  }
  onDragStart(event) {
    this.dt.onRowDragStart(event, this.index);
  }
  onDragEnd(event) {
    this.dt.onRowDragEnd(event);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event) {
    this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
    event.preventDefault();
  }
  onDragLeave(event) {
    this.dt.onRowDragLeave(event, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }
  onDrop(event) {
    if (this.isEnabled() && this.dt.rowDragging) {
      this.dt.onRowDrop(event, this.el.nativeElement);
    }
    event.preventDefault();
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
}
ReorderableRow.ɵfac = function ReorderableRow_Factory(t) {
  return new (t || ReorderableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ReorderableRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ReorderableRow,
  selectors: [["", "pReorderableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function ReorderableRow_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    index: ["pReorderableRow", "index"],
    pReorderableRowDisabled: "pReorderableRowDisabled"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReorderableRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[pReorderableRow]',
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['pReorderableRow']
    }],
    pReorderableRowDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();
class ColumnFilter {
  constructor(el, dt, renderer, config, overlayService) {
    this.el = el;
    this.dt = dt;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.type = 'text';
    this.display = 'row';
    this.showMenu = true;
    this.operator = primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND;
    this.showOperator = true;
    this.showClearButton = true;
    this.showApplyButton = true;
    this.showMatchModes = true;
    this.showAddButton = true;
    this.hideOnClear = false;
    this.maxConstraints = 2;
    this.useGrouping = true;
    this.showButtons = true;
  }
  ngOnInit() {
    if (!this.dt.filters[this.field]) {
      this.initFieldFilterConstraint();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.resetSubscription = this.dt.tableService.resetSource$.subscribe(() => {
      this.initFieldFilterConstraint();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map(key => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    });
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MATCH_ALL),
      value: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND
    }, {
      label: this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.MATCH_ANY),
      value: primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.OR
    }];
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        default:
          this.filterTemplate = item.template;
          break;
      }
    });
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dt.filters[this.field] = this.display == 'row' ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  onRowMatchModeChange(matchMode) {
    this.dt.filters[this.field].matchMode = matchMode;
    this.dt._filter();
    this.hide();
  }
  onRowMatchModeKeyDown(event) {
    let item = event.target;
    switch (event.key) {
      case 'ArrowDown':
        var nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute('tabindex');
          nextItem.tabIndex = '0';
          nextItem.focus();
        }
        event.preventDefault();
        break;
      case 'ArrowUp':
        var prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute('tabindex');
          prevItem.tabIndex = '0';
          prevItem.focus();
        }
        event.preventDefault();
        break;
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dt.filters[this.field].matchMode === matchMode;
  }
  addConstraint() {
    this.dt.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
  }
  removeConstraint(filterMeta) {
    this.dt.filters[this.field] = this.dt.filters[this.field].filter(meta => meta !== filterMeta);
    this.dt._filter();
  }
  onOperatorChange(value) {
    this.dt.filters[this.field].forEach(filterMeta => {
      filterMeta.operator = value;
      this.operator = value;
    });
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  toggleMenu() {
    this.overlayVisible = !this.overlayVisible;
  }
  onToggleButtonKeyDown(event) {
    switch (event.key) {
      case 'Escape':
      case 'Tab':
        this.overlayVisible = false;
        break;
      case 'ArrowDown':
        if (this.overlayVisible) {
          let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getFocusableElements(this.overlay);
          if (focusable) {
            focusable[0].focus();
          }
          event.preventDefault();
        } else if (event.altKey) {
          this.overlayVisible = true;
          event.preventDefault();
        }
        break;
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        document.body.appendChild(this.overlay);
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.config.zIndex.overlay);
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.icon.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.overlayEventListener = e => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };
        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        break;
      case 'void':
        this.onOverlayHide();
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
        break;
    }
  }
  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === 'text') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.STARTS_WITH;else if (this.type === 'numeric') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.EQUALS;else if (this.type === 'date') return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.DATE_IS;else return primeng_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS;
    }
  }
  getDefaultOperator() {
    return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
  }
  hasRowFilter() {
    return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
  }
  get fieldConstraints() {
    return this.dt.filters ? this.dt.filters[this.field] : null;
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu && (this.display === 'row' ? this.type !== 'boolean' : true);
  }
  get isShowOperator() {
    return this.showOperator && this.type !== 'boolean';
  }
  get isShowAddConstraint() {
    return this.showAddButton && this.type !== 'boolean' && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }
  get applyButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.NO_FILTER);
  }
  hasFilter() {
    let fieldFilter = this.dt.filters[this.field];
    if (fieldFilter) {
      if (Array.isArray(fieldFilter)) return !this.dt.isFilterBlank(fieldFilter[0].value);else return !this.dt.isFilterBlank(fieldFilter.value);
    }
    return false;
  }
  isOutsideClicked(event) {
    return !(this.overlay.isSameNode(event.target) || this.overlay.contains(event.target) || this.icon.nativeElement.isSameNode(event.target) || this.icon.nativeElement.contains(event.target) || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-add-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-filter-remove-button') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target.parentElement, 'p-column-filter-remove-button'));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
        if (this.overlayVisible && !this.selfClick && this.isOutsideClicked(event)) {
          this.hide();
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    this.documentResizeListener = () => {
      if (this.overlayVisible && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isTouchDevice()) {
        this.hide();
      }
    };
    window.addEventListener('resize', this.documentResizeListener);
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.icon.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  hide() {
    this.overlayVisible = false;
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.dt._filter();
    if (this.hideOnClear) this.hide();
  }
  applyFilter() {
    this.dt._filter();
    this.hide();
  }
  ngOnDestroy() {
    if (this.overlay) {
      this.el.nativeElement.appendChild(this.overlay);
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
}
ColumnFilter.ɵfac = function ColumnFilter_Factory(t) {
  return new (t || ColumnFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};
ColumnFilter.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ColumnFilter,
  selectors: [["p-columnFilter"]],
  contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function ColumnFilter_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c30, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    display: "display",
    showMenu: "showMenu",
    matchMode: "matchMode",
    operator: "operator",
    showOperator: "showOperator",
    showClearButton: "showClearButton",
    showApplyButton: "showApplyButton",
    showMatchModes: "showMatchModes",
    showAddButton: "showAddButton",
    hideOnClear: "hideOnClear",
    placeholder: "placeholder",
    matchModeOptions: "matchModeOptions",
    maxConstraints: "maxConstraints",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping",
    showButtons: "showButtons"
  },
  decls: 5,
  vars: 8,
  consts: [[1, "p-column-filter", 3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", 4, "ngIf"], ["type", "button", "class", "p-column-filter-menu-button p-link", "aria-haspopup", "true", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-column-filter-clear-button p-link", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons"], ["type", "button", "aria-haspopup", "true", 1, "p-column-filter-menu-button", "p-link", 3, "ngClass", "click", "keydown"], ["icon", ""], [1, "pi", "pi-filter-icon", "pi-filter"], ["type", "button", 1, "p-column-filter-clear-button", "p-link", 3, "ngClass", "click"], [1, "pi", "pi-filter-slash"], [3, "ngClass", "click", "keydown.escape"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-column-filter-row-items", 4, "ngIf", "ngIfElse"], ["menu", ""], [1, "p-column-filter-row-items"], ["class", "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-column-filter-separator"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter"], [1, "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter"], ["class", "p-column-filter-operator", 4, "ngIf"], [1, "p-column-filter-constraints"], ["class", "p-column-filter-constraint", 4, "ngFor", "ngForOf"], ["class", "p-column-filter-add-rule", 4, "ngIf"], [1, "p-column-filter-buttonbar"], ["type", "button", "pButton", "", "class", "p-button-outlined p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], [1, "p-column-filter-operator"], ["styleClass", "p-column-filter-operator-dropdown", 3, "options", "ngModel", "ngModelChange"], [1, "p-column-filter-constraint"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "class", "p-column-filter-remove-button p-button-text p-button-danger p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "pRipple", "", 1, "p-column-filter-remove-button", "p-button-text", "p-button-danger", "p-button-sm", 3, "label", "click"], [1, "p-column-filter-add-rule"], ["type", "button", "pButton", "", "icon", "pi pi-plus", "pRipple", "", 1, "p-column-filter-add-button", "p-button-text", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-sm", 3, "label", "click"]],
  template: function ColumnFilter_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 15, "p-columnFilterFormElement", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnFilter_button_2_Template, 3, 5, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColumnFilter_button_3_Template, 3, 3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnFilter_div_4_Template, 6, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c35, ctx.display === "row", ctx.display === "menu"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display === "row");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenuButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClearButton && ctx.display === "row");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMenu && ctx.overlayVisible);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, ColumnFilterFormElement];
  },
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('.12s cubic-bezier(0, 0, 0.2, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: 0
    }))])])]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnFilter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-columnFilter',
      template: `
        <div class="p-column-filter" [ngClass]="{ 'p-column-filter-row': display === 'row', 'p-column-filter-menu': display === 'menu' }">
            <p-columnFilterFormElement
                *ngIf="display === 'row'"
                class="p-fluid"
                [type]="type"
                [field]="field"
                [filterConstraint]="dt.filters[field]"
                [filterTemplate]="filterTemplate"
                [placeholder]="placeholder"
                [minFractionDigits]="minFractionDigits"
                [maxFractionDigits]="maxFractionDigits"
                [prefix]="prefix"
                [suffix]="suffix"
                [locale]="locale"
                [localeMatcher]="localeMatcher"
                [currency]="currency"
                [currencyDisplay]="currencyDisplay"
                [useGrouping]="useGrouping"
                [showButtons]="showButtons"
            ></p-columnFilterFormElement>
            <button
                #icon
                *ngIf="showMenuButton"
                type="button"
                class="p-column-filter-menu-button p-link"
                aria-haspopup="true"
                [attr.aria-expanded]="overlayVisible"
                [ngClass]="{ 'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter() }"
                (click)="toggleMenu()"
                (keydown)="onToggleButtonKeyDown($event)"
            >
                <span class="pi pi-filter-icon pi-filter"></span>
            </button>
            <button #icon *ngIf="showClearButton && display === 'row'" [ngClass]="{ 'p-hidden-space': !hasRowFilter() }" type="button" class="p-column-filter-clear-button p-link" (click)="clearFilter()">
                <span class="pi pi-filter-slash"></span>
            </button>
            <div
                *ngIf="showMenu && overlayVisible"
                [ngClass]="{ 'p-column-filter-overlay p-component p-fluid': true, 'p-column-filter-overlay-menu': display === 'menu' }"
                (click)="onContentClick()"
                [@overlayAnimation]="'visible'"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                (keydown.escape)="onEscape()"
            >
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: field }"></ng-container>
                <ul *ngIf="display === 'row'; else menu" class="p-column-filter-row-items">
                    <li
                        class="p-column-filter-row-item"
                        *ngFor="let matchMode of matchModes; let i = index"
                        (click)="onRowMatchModeChange(matchMode.value)"
                        (keydown)="onRowMatchModeKeyDown($event)"
                        (keydown.enter)="this.onRowMatchModeChange(matchMode.value)"
                        [ngClass]="{ 'p-highlight': isRowMatchModeSelected(matchMode.value) }"
                        [attr.tabindex]="i === 0 ? '0' : null"
                    >
                        {{ matchMode.label }}
                    </li>
                    <li class="p-column-filter-separator"></li>
                    <li class="p-column-filter-row-item" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">{{ noFilterLabel }}</li>
                </ul>
                <ng-template #menu>
                    <div class="p-column-filter-operator" *ngIf="isShowOperator">
                        <p-dropdown [options]="operatorOptions" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" styleClass="p-column-filter-operator-dropdown"></p-dropdown>
                    </div>
                    <div class="p-column-filter-constraints">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" class="p-column-filter-constraint">
                            <p-dropdown
                                *ngIf="showMatchModes && matchModes"
                                [options]="matchModes"
                                [ngModel]="fieldConstraint.matchMode"
                                (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                styleClass="p-column-filter-matchmode-dropdown"
                            ></p-dropdown>
                            <p-columnFilterFormElement
                                [type]="type"
                                [field]="field"
                                [filterConstraint]="fieldConstraint"
                                [filterTemplate]="filterTemplate"
                                [placeholder]="placeholder"
                                [minFractionDigits]="minFractionDigits"
                                [maxFractionDigits]="maxFractionDigits"
                                [prefix]="prefix"
                                [suffix]="suffix"
                                [locale]="locale"
                                [localeMatcher]="localeMatcher"
                                [currency]="currency"
                                [currencyDisplay]="currencyDisplay"
                                [useGrouping]="useGrouping"
                            ></p-columnFilterFormElement>
                            <div>
                                <button
                                    *ngIf="showRemoveIcon"
                                    type="button"
                                    pButton
                                    icon="pi pi-trash"
                                    class="p-column-filter-remove-button p-button-text p-button-danger p-button-sm"
                                    (click)="removeConstraint(fieldConstraint)"
                                    pRipple
                                    [label]="removeRuleButtonLabel"
                                ></button>
                            </div>
                        </div>
                    </div>
                    <div class="p-column-filter-add-rule" *ngIf="isShowAddConstraint">
                        <button type="button" pButton [label]="addRuleButtonLabel" icon="pi pi-plus" class="p-column-filter-add-button p-button-text p-button-sm" (click)="addConstraint()" pRipple></button>
                    </div>
                    <div class="p-column-filter-buttonbar">
                        <button *ngIf="showClearButton" type="button" pButton class="p-button-outlined p-button-sm" (click)="clearFilter()" [label]="clearButtonLabel" pRipple></button>
                        <button *ngIf="showApplyButton" type="button" pButton (click)="applyFilter()" class="p-button-sm" [label]="applyButtonLabel" pRipple></button>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: field }"></ng-container>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('.12s cubic-bezier(0, 0, 0.2, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        opacity: 0
      }))])])],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Table
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matchMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    operator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showOperator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClearButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showApplyButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMatchModes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showAddButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideOnClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    matchModeOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxConstraints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    localeMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currencyDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGrouping: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['icon']
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }]
  });
})();
class ColumnFilterFormElement {
  constructor(dt, colFilter) {
    this.dt = dt;
    this.colFilter = colFilter;
    this.useGrouping = true;
  }
  get showButtons() {
    return this.colFilter.showButtons;
  }
  ngOnInit() {
    this.filterCallback = value => {
      this.filterConstraint.value = value;
      this.dt._filter();
    };
  }
  onModelChange(value) {
    this.filterConstraint.value = value;
    if (this.type === 'boolean' || value === '') {
      this.dt._filter();
    }
  }
  onTextInputEnterKeyDown(event) {
    this.dt._filter();
    event.preventDefault();
  }
  onNumericInputKeyDown(event) {
    if (event.key === 'Enter') {
      this.dt._filter();
      event.preventDefault();
    }
  }
}
ColumnFilterFormElement.ɵfac = function ColumnFilterFormElement_Factory(t) {
  return new (t || ColumnFilterFormElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Table), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnFilter));
};
ColumnFilterFormElement.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ColumnFilterFormElement,
  selectors: [["p-columnFilterFormElement"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    filterConstraint: "filterConstraint",
    filterTemplate: "filterTemplate",
    placeholder: "placeholder",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["builtInElement", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "ngModel", "ngModelChange", 4, "ngSwitchCase"], [3, "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown"], [3, "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"]],
  template: function ColumnFilterFormElement_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterTemplate)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.Calendar, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__.TriStateCheckbox],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnFilterFormElement, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-columnFilterFormElement',
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container
                *ngTemplateOutlet="
                    filterTemplate;
                    context: {
                        $implicit: filterConstraint.value,
                        filterCallback: filterCallback,
                        type: type,
                        field: field,
                        filterConstraint: filterConstraint,
                        placeholder: placeholder,
                        minFractionDigits: minFractionDigits,
                        maxFractionDigits: maxFractionDigits,
                        prefix: prefix,
                        suffix: suffix,
                        locale: locale,
                        localeMatcher: localeMatcher,
                        currency: currency,
                        currencyDisplay: currencyDisplay,
                        useGrouping: useGrouping,
                        showButtons: showButtons
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input *ngSwitchCase="'text'" type="text" pInputText [value]="filterConstraint?.value" (input)="onModelChange($event.target.value)" (keydown.enter)="onTextInputEnterKeyDown($event)" [attr.placeholder]="placeholder" />
                <p-inputNumber
                    *ngSwitchCase="'numeric'"
                    [ngModel]="filterConstraint?.value"
                    (ngModelChange)="onModelChange($event)"
                    (onKeyDown)="onNumericInputKeyDown($event)"
                    [showButtons]="showButtons"
                    [minFractionDigits]="minFractionDigits"
                    [maxFractionDigits]="maxFractionDigits"
                    [prefix]="prefix"
                    [suffix]="suffix"
                    [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'"
                    [locale]="locale"
                    [localeMatcher]="localeMatcher"
                    [currency]="currency"
                    [currencyDisplay]="currencyDisplay"
                    [useGrouping]="useGrouping"
                ></p-inputNumber>
                <p-triStateCheckbox *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-triStateCheckbox>
                <p-calendar *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-calendar>
            </ng-container>
        </ng-template>
    `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: Table
    }, {
      type: ColumnFilter
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterConstraint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxFractionDigits: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    localeMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    currencyDisplay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    useGrouping: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class TableModule {}
TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || TableModule)();
};
TableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TableModule
});
TableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__.TriStateCheckboxModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_16__.SelectButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__.TriStateCheckboxModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule],
      exports: [Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, primeng_scroller__WEBPACK_IMPORTED_MODULE_7__.ScrollerModule],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-table.mjs.map

/***/ }),

/***/ 5293:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-togglebutton.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOGGLEBUTTON_VALUE_ACCESSOR": () => (/* binding */ TOGGLEBUTTON_VALUE_ACCESSOR),
/* harmony export */   "ToggleButton": () => (/* binding */ ToggleButton),
/* harmony export */   "ToggleButtonModule": () => (/* binding */ ToggleButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 4538);







const _c0 = function (a1, a2) {
  return {
    "p-button-icon": true,
    "p-button-icon-left": a1,
    "p-button-icon-right": a2
  };
};
function ToggleButton_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
  }
}
function ToggleButton_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checked ? ctx_r1.hasOnLabel ? ctx_r1.onLabel : "" : ctx_r1.hasOffLabel ? ctx_r1.offLabel : "");
  }
}
const _c1 = function (a1, a2, a3) {
  return {
    "p-button p-togglebutton p-component": true,
    "p-button-icon-only": a1,
    "p-highlight": a2,
    "p-disabled": a3
  };
};
const TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ToggleButton),
  multi: true
};
class ToggleButton {
  constructor(cd) {
    this.cd = cd;
    this.iconPos = 'left';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.checked = false;
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
  }
  toggle(event) {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
}
ToggleButton.ɵfac = function ToggleButton_Factory(t) {
  return new (t || ToggleButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
ToggleButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ToggleButton,
  selectors: [["p-toggleButton"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    onLabel: "onLabel",
    offLabel: "offLabel",
    onIcon: "onIcon",
    offIcon: "offIcon",
    ariaLabelledBy: "ariaLabelledBy",
    disabled: "disabled",
    style: "style",
    styleClass: "styleClass",
    inputId: "inputId",
    tabindex: "tabindex",
    iconPos: "iconPos"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TOGGLEBUTTON_VALUE_ACCESSOR])],
  decls: 3,
  vars: 12,
  consts: [["role", "checkbox", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown.enter"], [3, "class", "ngClass", 4, "ngIf"], ["class", "p-button-label", 4, "ngIf"], [3, "ngClass"], [1, "p-button-label"]],
  template: function ToggleButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleButton_Template_div_click_0_listener($event) {
        return ctx.toggle($event);
      })("keydown.enter", function ToggleButton_Template_div_keydown_enter_0_listener($event) {
        return ctx.toggle($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToggleButton_span_1_Template, 1, 6, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToggleButton_span_2_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, ctx.onIcon && ctx.offIcon && !ctx.hasOnLabel && !ctx.hasOffLabel, ctx.checked, ctx.disabled))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : "0")("aria-checked", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onIcon || ctx.offIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onLabel || ctx.offLabel);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple],
  styles: [".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-toggleButton',
      template: `
        <div
            [ngClass]="{ 'p-button p-togglebutton p-component': true, 'p-button-icon-only': onIcon && offIcon && !hasOnLabel && !hasOffLabel, 'p-highlight': checked, 'p-disabled': disabled }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="toggle($event)"
            (keydown.enter)="toggle($event)"
            [attr.tabindex]="disabled ? null : '0'"
            role="checkbox"
            [attr.aria-checked]="checked"
            pRipple
        >
            <span *ngIf="onIcon || offIcon" [class]="checked ? this.onIcon : this.offIcon" [ngClass]="{ 'p-button-icon': true, 'p-button-icon-left': iconPos === 'left', 'p-button-icon-right': iconPos === 'right' }"></span>
            <span class="p-button-label" *ngIf="onLabel || offLabel">{{ checked ? (hasOnLabel ? onLabel : '') : hasOffLabel ? offLabel : '' }}</span>
        </div>
    `,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'p-element'
      },
      styles: [".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    onLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconPos: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class ToggleButtonModule {}
ToggleButtonModule.ɵfac = function ToggleButtonModule_Factory(t) {
  return new (t || ToggleButtonModule)();
};
ToggleButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToggleButtonModule
});
ToggleButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule],
      exports: [ToggleButton],
      declarations: [ToggleButton]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-togglebutton.mjs.map

/***/ }),

/***/ 1604:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-tristatecheckbox.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRISTATECHECKBOX_VALUE_ACCESSOR": () => (/* binding */ TRISTATECHECKBOX_VALUE_ACCESSOR),
/* harmony export */   "TriStateCheckbox": () => (/* binding */ TriStateCheckbox),
/* harmony export */   "TriStateCheckboxModule": () => (/* binding */ TriStateCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = function (a0, a1, a2) {
  return {
    "p-checkbox-label-active": a0,
    "p-disabled": a1,
    "p-checkbox-label-focus": a2
  };
};
function TriStateCheckbox_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_label_6_Template_label_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onClick($event, _r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r1.value != null, ctx_r1.disabled, ctx_r1.focused));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r1.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
  }
}
const _c1 = function (a1, a2) {
  return {
    "p-checkbox p-component": true,
    "p-checkbox-disabled": a1,
    "p-checkbox-focused": a2
  };
};
const _c2 = function (a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-focus": a2
  };
};
const TRISTATECHECKBOX_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TriStateCheckbox),
  multi: true
};
class TriStateCheckbox {
  constructor(cd) {
    this.cd = cd;
    this.checkboxTrueIcon = 'pi pi-check';
    this.checkboxFalseIcon = 'pi pi-times';
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onModelChange = () => {};
    this.onModelTouched = () => {};
  }
  onClick(event, input) {
    if (!this.disabled && !this.readonly) {
      this.toggle(event);
      this.focused = true;
      input.focus();
    }
  }
  onKeydown(event) {
    if (event.keyCode == 32) {
      event.preventDefault();
    }
  }
  onKeyup(event) {
    if (event.keyCode == 32 && !this.readonly) {
      this.toggle(event);
      event.preventDefault();
    }
  }
  toggle(event) {
    if (this.value == null || this.value == undefined) this.value = true;else if (this.value == true) this.value = false;else if (this.value == false) this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
    this.cd.markForCheck();
  }
}
TriStateCheckbox.ɵfac = function TriStateCheckbox_Factory(t) {
  return new (t || TriStateCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
TriStateCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TriStateCheckbox,
  selectors: [["p-triStateCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    name: "name",
    ariaLabelledBy: "ariaLabelledBy",
    tabindex: "tabindex",
    inputId: "inputId",
    style: "style",
    styleClass: "styleClass",
    label: "label",
    readonly: "readonly",
    checkboxTrueIcon: "checkboxTrueIcon",
    checkboxFalseIcon: "checkboxFalseIcon"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TRISTATECHECKBOX_VALUE_ACCESSOR])],
  decls: 7,
  vars: 21,
  consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "text", "inputmode", "none", 3, "name", "readonly", "disabled", "keyup", "keydown", "focus", "blur"], ["input", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], [1, "p-checkbox-label", 3, "ngClass", "click"]],
  template: function TriStateCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TriStateCheckbox_Template_input_keyup_2_listener($event) {
        return ctx.onKeyup($event);
      })("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) {
        return ctx.onKeydown($event);
      })("focus", function TriStateCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TriStateCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriStateCheckbox_Template_div_click_4_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event, _r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TriStateCheckbox_label_6_Template, 2, 7, "label", 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](17, _c2, ctx.value != null, ctx.disabled, ctx.focused));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.value === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value === true ? ctx.checkboxTrueIcon : ctx.value === false ? ctx.checkboxFalseIcon : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriStateCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-triStateCheckbox',
      template: `
        <div [ngStyle]="style" [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused }" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input
                    #input
                    type="text"
                    [attr.id]="inputId"
                    [name]="name"
                    [attr.tabindex]="tabindex"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    (keyup)="onKeyup($event)"
                    (keydown)="onKeydown($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    inputmode="none"
                />
            </div>
            <div class="p-checkbox-box" (click)="onClick($event, input)" role="checkbox" [attr.aria-checked]="value === true" [ngClass]="{ 'p-highlight': value != null, 'p-disabled': disabled, 'p-focus': focused }">
                <span class="p-checkbox-icon" [ngClass]="value === true ? checkboxTrueIcon : value === false ? checkboxFalseIcon : ''"></span>
            </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event, input)" [ngClass]="{ 'p-checkbox-label-active': value != null, 'p-disabled': disabled, 'p-checkbox-label-focus': focused }" *ngIf="label" [attr.for]="inputId">{{ label }}</label>
    `,
      providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxTrueIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxFalseIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class TriStateCheckboxModule {}
TriStateCheckboxModule.ɵfac = function TriStateCheckboxModule_Factory(t) {
  return new (t || TriStateCheckboxModule)();
};
TriStateCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: TriStateCheckboxModule
});
TriStateCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriStateCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [TriStateCheckbox],
      declarations: [TriStateCheckbox]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tristatecheckbox.mjs.map

/***/ }),

/***/ 8476:
/*!*******************************************************************!*\
  !*** ./node_modules/primeng/fesm2020/primeng-virtualscroller.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScroller": () => (/* binding */ VirtualScroller),
/* harmony export */   "VirtualScrollerModule": () => (/* binding */ VirtualScrollerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/scroller */ 3705);








const _c0 = ["scroller"];
function VirtualScroller_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function VirtualScroller_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VirtualScroller_div_1_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function VirtualScroller_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    height: a0
  };
};
const _c2 = function (a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function VirtualScroller_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VirtualScroller_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const scrollerOptions_r7 = ctx.options;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r3.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r6 ? ctx_r3.itemTemplate : ctx_r3.loadingItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, item_r6, scrollerOptions_r7));
  }
}
function VirtualScroller_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function VirtualScroller_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VirtualScroller_div_7_ng_container_2_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate);
  }
}
const _c3 = [[["p-header"]], [["p-footer"]]];
const _c4 = ["p-header", "p-footer"];
class VirtualScroller {
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
    this.delay = 250;
    this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'loadingItem':
          this.loadingItemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  onLazyItemLoad(event) {
    if (this.virtualScrollTimeout) {
      clearTimeout(this.virtualScrollTimeout);
    }
    this.virtualScrollTimeout = setTimeout(() => {
      this.onLazyLoad.emit({
        ...event,
        rows: event.last - event.first,
        forceUpdate: () => this.cd.detectChanges()
      });
    }, this.delay);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  scrollToIndex(index, mode) {
    this.scroller?.scrollToIndex(index, mode);
  }
}
VirtualScroller.ɵfac = function VirtualScroller_Factory(t) {
  return new (t || VirtualScroller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
VirtualScroller.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VirtualScroller,
  selectors: [["p-virtualScroller"]],
  contentQueries: function VirtualScroller_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function VirtualScroller_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    value: "value",
    itemSize: "itemSize",
    style: "style",
    styleClass: "styleClass",
    scrollHeight: "scrollHeight",
    lazy: "lazy",
    options: "options",
    delay: "delay"
  },
  outputs: {
    onLazyLoad: "onLazyLoad"
  },
  ngContentSelectors: _c4,
  decls: 8,
  vars: 14,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-virtualscroller-header", 4, "ngIf"], [1, "p-virtualscroller-content"], ["content", ""], ["styleClass", "p-virtualscroller-list", 3, "items", "itemSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "item"], ["class", "p-virtualscroller-footer", 4, "ngIf"], [1, "p-virtualscroller-header"], [4, "ngTemplateOutlet"], [1, "p-virtualscroller-item", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-footer"]],
  template: function VirtualScroller_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VirtualScroller_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3)(4, "p-scroller", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function VirtualScroller_Template_p_scroller_onLazyLoad_4_listener($event) {
        return ctx.onLazyItemLoad($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VirtualScroller_ng_template_6_Template, 2, 8, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VirtualScroller_div_7_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-virtualscroller p-component")("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header || ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.scrollHeight));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.value)("itemSize", ctx.itemSize)("lazy", ctx.lazy)("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer || ctx.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.Scroller],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScroller, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-virtualScroller',
      template: `
        <div [ngClass]="'p-virtualscroller p-component'" [ngStyle]="style" [class]="styleClass">
            <div class="p-virtualscroller-header" *ngIf="header || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div #content class="p-virtualscroller-content">
                <p-scroller #scroller [items]="value" styleClass="p-virtualscroller-list" [style]="{ height: scrollHeight }" [itemSize]="itemSize" [lazy]="lazy" (onLazyLoad)="onLazyItemLoad($event)" [options]="options">
                    <ng-template pTemplate="item" let-item let-scrollerOptions="options">
                        <div [ngStyle]="{ height: itemSize + 'px' }" class="p-virtualscroller-item">
                            <ng-container *ngTemplateOutlet="item ? itemTemplate : loadingItemTemplate; context: { $implicit: item, options: scrollerOptions }"></ng-container>
                        </div>
                    </ng-template>
                </p-scroller>
            </div>
            <div class="p-virtualscroller-footer" *ngIf="footer || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lazy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Header]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.Footer]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroller']
    }],
    onLazyLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class VirtualScrollerModule {}
VirtualScrollerModule.ɵfac = function VirtualScrollerModule_Factory(t) {
  return new (t || VirtualScrollerModule)();
};
VirtualScrollerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: VirtualScrollerModule
});
VirtualScrollerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule],
      exports: [VirtualScroller, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_3__.ScrollerModule],
      declarations: [VirtualScroller]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-virtualscroller.mjs.map

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_customer_service_ts-src_app_features_language-selector_language-207085.js.map