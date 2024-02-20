"use strict";
(self["webpackChunkppeWebApp"] = self["webpackChunkppeWebApp"] || []).push([["src_app_features_manager_manager_module_ts"],{

/***/ 7640:
/*!****************************************************!*\
  !*** ./src/app/core/models/datamodels/Contract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contract": () => (/* binding */ Contract)
/* harmony export */ });
class Contract {
  constructor(id, startDate, endDate, providerId, contractType, buildingId, customerId) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.providerId = providerId;
    this.contractType = contractType;
    this.buildingId = buildingId;
    this.customerId = customerId;
  }
}

/***/ }),

/***/ 9472:
/*!***************************************************!*\
  !*** ./src/app/core/services/building.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildingService": () => (/* binding */ BuildingService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class BuildingService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllBuildings(offset, limit) {
    return this.httpClient.get(this.baseUrl + `/building/getAllBuildings?offset=${offset}&limit=${limit}`);
  }
  countAllBuildings() {
    return this.httpClient.get(this.baseUrl + `/building/countAllBuildings`);
  }
  getBuildingByCustomerId(customerId, offset, limit) {
    return this.httpClient.get(this.baseUrl + `/building/getBuildingByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }
  countBuildingByCustomerId(customerId) {
    return this.httpClient.get(this.baseUrl + `/building/countBuildingByCustomerId?customerId=${customerId}`);
  }
  getBuildingById(id) {
    return this.httpClient.get(this.baseUrl + `/building/getBuildingById?id=${id}`);
  }
  createBuilding(building, customerId) {
    return this.httpClient.post(this.baseUrl + `/building/createBuilding?customerId=${customerId}`, building, {
      responseType: 'text'
    });
  }
  deleteBuilding(id) {
    return this.httpClient.delete(this.baseUrl + `/building/deleteBuildingById?id=${id}`);
  }
  updateBuilding(building) {
    return this.httpClient.put(this.baseUrl + `/building/updateBuilding`, building);
  }
}
BuildingService.ɵfac = function BuildingService_Factory(t) {
  return new (t || BuildingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BuildingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BuildingService,
  factory: BuildingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9899:
/*!***************************************************!*\
  !*** ./src/app/core/services/contract.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ContractService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllContracts() {
    return this.httpClient.get(this.baseUrl + "/contract/getAllContracts");
  }
  getContractsByCustomerId(customerId, offset, limit) {
    return this.httpClient.get(this.baseUrl + `/contract/getContractByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }
  countContractByCustomerId(customerId) {
    return this.httpClient.get(this.baseUrl + `/contract/countContractByCustomerId?customerId=${customerId}`);
  }
  getContractsByProviderId(providerId, offset, limit) {
    return this.httpClient.get(this.baseUrl + `/contract/getContractByProviderId?providerId=${providerId}&offset=${offset}&limit=${limit}`);
  }
  countContractByProviderId(providerId) {
    return this.httpClient.get(this.baseUrl + `/contract/countContractByProviderId?providerId=${providerId}`);
  }
  createContract(contract) {
    return this.httpClient.post(this.baseUrl + "/contract/createContract", contract, {
      responseType: 'text'
    });
  }
  getAllContractTypes() {
    return this.httpClient.get(this.baseUrl + "/contractType/getAllContractTypes");
  }
  //should be placed in another service ... utility.service.ts ? 
  getAllEnergyTypes() {
    return this.httpClient.get(this.baseUrl + "/energyType/getAllEnergyTypes");
  }
  updateContract(contract) {
    return this.httpClient.put(this.baseUrl + "/contract/updateContract", contract);
  }
  getEnergyTypeByProviderId(providerId) {
    return this.httpClient.get(this.baseUrl + `/energyType/getEnergyTypeByProviderId?providerId=${providerId}`);
  }
  getContractEnergyTypeByContractId(contractId) {
    return this.httpClient.get(this.baseUrl + `/contractEnergyType/getContractEnergyTypeByContractId?contractId=${contractId}`);
  }
  createContractEnergyType(contractEnergyType, contractId) {
    return this.httpClient.post(this.baseUrl + `/contractEnergyType/createContractEnergyType?contractId=${contractId}`, contractEnergyType, {
      responseType: 'text'
    });
  }
  updateContractEnergyType(contractEnergyType) {
    return this.httpClient.put(this.baseUrl + "/contractEnergyType/updateContractEnergyType", contractEnergyType);
  }
  deleteContractEnergyTypeById(id) {
    return this.httpClient.delete(this.baseUrl + `/contractEnergyType/deleteContractEnergyTypeById?id=${id}`);
  }
}
ContractService.ɵfac = function ContractService_Factory(t) {
  return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ContractService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ContractService,
  factory: ContractService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 891:
/*!************************************************!*\
  !*** ./src/app/core/services/meter.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterService": () => (/* binding */ MeterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class MeterService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllMeter() {
    return this.httpClient.get(this.baseUrl + "/meter/getAllMeters");
  }
  getMetersByBuildingId(buildingId) {
    return this.httpClient.get(this.baseUrl + `/meter/getMetersByBuildingId?buildingId=${buildingId}`);
  }
  getMetersByWalletId(walletId) {
    return this.httpClient.get(this.baseUrl + `/meter/getMetersByWalletId?walletId=${walletId}`);
  }
  getMeterHistoryByMeterId(meterId, offset, limit, columnName = "date", order = -1) {
    return this.httpClient.get(this.baseUrl + `/meterHistory/getMeterHistoryByMeterId?meterId=${meterId}&offset=${offset}&limit=${limit}&columnName=${columnName}&order=${order}`);
  }
  getMeterHistoryByMeterIdUsingDate(meterId, startDate, endDate) {
    return this.httpClient.get(this.baseUrl + `/meterHistory/getMeterHistoryByMeterIdUsingDate?meterId=${meterId}&startDate=${startDate}&endDate=${endDate}`);
  }
  countMeterHistoryByMeterId(meterId) {
    return this.httpClient.get(this.baseUrl + `/meterHistory/countMeterHistoryByMeterId?meterId=${meterId}`);
  }
  createMeter(meter, buildingId) {
    return this.httpClient.post(this.baseUrl + `/meter/createMeter?buildingId=${buildingId}`, meter, {
      responseType: 'text'
    });
  }
  deleteMeter(id) {
    return this.httpClient.delete(this.baseUrl + `/meter/deleteMeterById?id=${id}`);
  }
  updateMeter(meter) {
    return this.httpClient.put(this.baseUrl + `/meter/updateMeter`, meter);
  }
  getAllEnergyTypes() {
    return this.httpClient.get(this.baseUrl + "/energyType/getAllEnergyTypes");
  }
  deleteMeterHistoryById(id) {
    return this.httpClient.delete(this.baseUrl + `/meterHistory/deleteMeterHistoryById?id=${id}`);
  }
  updateMeterHistory(meterHistory) {
    return this.httpClient.put(this.baseUrl + `/meterHistory/updateMeterHistory`, meterHistory);
  }
  createMeterHistory(meterHistory, meterId) {
    return this.httpClient.post(this.baseUrl + `/meterHistory/createMeterHistory?meterId=${meterId}`, meterHistory);
  }
}
MeterService.ɵfac = function MeterService_Factory(t) {
  return new (t || MeterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MeterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MeterService,
  factory: MeterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 366:
/*!***************************************************!*\
  !*** ./src/app/core/services/provider.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderService": () => (/* binding */ ProviderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProviderService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllProviders() {
    return this.httpClient.get(this.baseUrl + "/provider/getAllProviders");
  }
}
ProviderService.ɵfac = function ProviderService_Factory(t) {
  return new (t || ProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ProviderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProviderService,
  factory: ProviderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9980:
/*!*************************************************!*\
  !*** ./src/app/core/services/wallet.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletService": () => (/* binding */ WalletService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class WalletService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL;
  }
  getAllWallets() {
    return this.httpClient.get(this.baseUrl + "/wallet/getAllWallets");
  }
  getWalletByCustomerId(customerId, offset, limit) {
    if (offset === undefined || limit === undefined) {
      return this.httpClient.get(this.baseUrl + `/wallet/getWalletByCustomerId?customerId=${customerId}`);
    }
    return this.httpClient.get(this.baseUrl + `/wallet/getWalletByCustomerId?customerId=${customerId}&offset=${offset}&limit=${limit}`);
  }
  countWalletByCustomerId(customerId) {
    return this.httpClient.get(this.baseUrl + `/wallet/countWalletByCustomerId?customerId=${customerId}`);
  }
  createWallet(buildingId, customerId) {
    return this.httpClient.post(this.baseUrl + `/wallet/createWallet?customerId=${customerId}&buildingId=${buildingId}`, null, {
      responseType: 'text'
    });
  }
  createWalletMeter(walletId, meterId) {
    return this.httpClient.post(this.baseUrl + `/walletMeter/createWalletMeter?meterId=${meterId}&walletId=${walletId}`, null, {
      responseType: 'text'
    });
  }
}
WalletService.ɵfac = function WalletService_Factory(t) {
  return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
WalletService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: WalletService,
  factory: WalletService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3048:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/manager/building-view/building-form/building-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildingFormComponent": () => (/* binding */ BuildingFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/building.service */ 9472);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);


//components

//services















class BuildingFormComponent {
  constructor(fb, buildingService, ref, config, confirmationService, translateService) {
    this.fb = fb;
    this.buildingService = buildingService;
    this.ref = ref;
    this.config = config;
    this.confirmationService = confirmationService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.buildingForm = _this.fb.group({
        id: [null],
        buildingName: [''],
        city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        room: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        main: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
      if (_this.config.data) {
        _this.modeForm = "edit";
        yield _this.buildingService.getBuildingById(_this.config.data).toPromise().then(building => {
          _this._building = building;
          _this.updateForm();
        });
      } else {
        _this.modeForm = "create";
      }
    })();
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
    if (this.buildingForm.valid) {
      this.translateService.get("saveMessage").subscribe(translation => {
        this.confirmationService.confirm({
          message: translation,
          key: 'saveDialog',
          accept: () => {
            this._building = this.buildingForm.value;
            this.ref.close(this._building);
          }
        });
      });
    }
  }
  updateForm() {
    this.buildingForm.patchValue(this._building);
  }
}
BuildingFormComponent.ɵfac = function BuildingFormComponent_Factory(t) {
  return new (t || BuildingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_1__.BuildingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
};
BuildingFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BuildingFormComponent,
  selectors: [["app-building-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService])],
  decls: 54,
  vars: 34,
  consts: [[1, "dialog-component"], [1, "form-section"], [1, "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "buildingName", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["formControlName", "city", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["formControlName", "number", 1, "field", "form-inputNumber", "purple-inputnumber", 3, "min"], ["formControlName", "room", 1, "field", "form-inputNumber", "purple-inputnumber", 3, "min"], ["formControlName", "street", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["formControlName", "zipCode", 1, "field", "form-inputNumber", "purple-inputnumber", 3, "min"], ["formControlName", "main", 1, "field", "purple-checkbox", 3, "binary"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function BuildingFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "p-inputNumber", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "p-inputNumber", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "p-inputNumber", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "p-checkbox", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "section", 11)(44, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "app-form-status", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div")(48, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuildingFormComponent_Template_button_click_48_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BuildingFormComponent_Template_button_click_50_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "p-confirmDialog", 15)(53, "p-confirmDialog", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.buildingForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 18, "city"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 20, "number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 22, "room"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 24, "street"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 26, "zipcode"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 28, "mainbuilding"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("validity", ctx.buildingForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 30, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 32, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.buildingForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3874:
/*!***************************************************************************!*\
  !*** ./src/app/features/manager/building-view/building-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildingViewComponent": () => (/* binding */ BuildingViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _building_form_building_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building-form/building-form.component */ 3048);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/directives/route-history.service */ 5220);
/* harmony import */ var src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/building.service */ 9472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);


//components

//services

















function BuildingViewComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingViewComponent_ng_template_4_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "new"));
  }
}
function BuildingViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingViewComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onPreviousClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BuildingViewComponent_ng_template_4_div_3_Template, 3, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
  }
}
function BuildingViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingViewComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.onShowMetersClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BuildingViewComponent_ng_template_5_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onShowChartClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, "showmeter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.selectedBuilding == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, "visualcons"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.selectedBuilding == null);
  }
}
class BuildingViewComponent {
  constructor(activatedRoute, router, buildingService, dialogService, routeHistory, translateService, localStorage) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.buildingService = buildingService;
    this.dialogService = dialogService;
    this.routeHistory = routeHistory;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'buildingName',
      header: 'name'
    }, {
      field: 'city',
      header: 'city'
    }, {
      field: 'number',
      header: 'number'
    }, {
      field: 'room',
      header: 'room'
    }, {
      field: 'street',
      header: 'street'
    }, {
      field: 'zipCode',
      header: 'zipcode'
    }, {
      field: 'main',
      header: 'main'
    }];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.refreshData();
  }
  createFormDialog() {
    this.translateService.get("buildingform").subscribe(translation => {
      const ref = this.dialogService.open(_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_1__.BuildingFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(building => {
        if (building) {
          this.buildingService.createBuilding(building, this.currentCustomerId).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  editFormDialog(data) {
    this.translateService.get("buildingform").subscribe(translation => {
      const ref = this.dialogService.open(_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_1__.BuildingFormComponent, {
        header: translation,
        data: data.id,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(building => {
        if (building) {
          this.buildingService.updateBuilding(building).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  onBuildingSelected(building) {
    this.selectedBuilding = building;
  }
  deleteBuilding(id) {
    this.buildingService.deleteBuilding(id).subscribe(() => {
      this.refreshData();
    });
  }
  updatePaginationParams(params) {
    this.paginationParams = params;
    this.refreshData();
  }
  refreshData() {
    if (JSON.parse(this.localStorage.getData("roles")).includes("USER")) {
      this.currentCustomerId = this.localStorage.getData("id");
    } else {
      this.currentCustomerId = this.activatedRoute.snapshot.params['customerId'];
    }
    this.isLoading = true;
    this.loadBuildingsByCustomerId();
  }
  loadBuildingsByCustomerId() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.buildingService.countBuildingByCustomerId(_this.currentCustomerId).toPromise().then(buildingsCounter => {
        _this.buildingsCounter = buildingsCounter;
      });
      yield _this.buildingService.getBuildingByCustomerId(_this.currentCustomerId, _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(buildings => {
        _this.buildings = buildings;
        _this.isLoading = false;
      });
    })();
  }
  onShowMetersClick() {
    this.router.navigateByUrl(`/manager/building/${this.selectedBuilding.id}/meters`);
  }
  onPreviousClick() {
    this.routeHistory.back();
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
  onShowChartClick() {
    this.router.navigateByUrl(`/manager/chart/${this.selectedBuilding.id}`);
  }
}
BuildingViewComponent.ɵfac = function BuildingViewComponent_Factory(t) {
  return new (t || BuildingViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_4__.BuildingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_3__.RouteHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
};
BuildingViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: BuildingViewComponent,
  selectors: [["app-building-view"]],
  decls: 8,
  vars: 7,
  consts: [[1, "building-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "totalRecords", "cols", "isEditable", "isDeletable", "isLoading", "isPaginable", "onEdit", "onDelete", "onSelect", "onPageChange"], [1, "router-actions", "rv-separator"], ["pButton", "", "icon", "pi pi-chevron-left", 1, "p-button-sm", "p-button-secondary", 3, "label", "click"], ["class", "table-actions", 4, "ngIf"], [1, "table-actions"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "purple-button", 3, "label", "click"], ["pButton", "", "icon", "pi pi-info-circle", 1, "p-button-sm", "purple-button", 3, "disabled", "label", "click"]],
  template: function BuildingViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BuildingViewComponent_ng_template_4_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BuildingViewComponent_ng_template_5_Template, 4, 8, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onEdit", function BuildingViewComponent_Template_app_dynamic_table_onEdit_7_listener($event) {
        return ctx.editFormDialog($event);
      })("onDelete", function BuildingViewComponent_Template_app_dynamic_table_onDelete_7_listener($event) {
        return ctx.deleteBuilding($event);
      })("onSelect", function BuildingViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onBuildingSelected($event);
      })("onPageChange", function BuildingViewComponent_Template_app_dynamic_table_onPageChange_7_listener($event) {
        return ctx.updatePaginationParams($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collection", ctx.buildings)("totalRecords", ctx.buildingsCounter)("cols", ctx.cols)("isEditable", ctx.isAdmin())("isDeletable", ctx.isAdmin())("isLoading", ctx.isLoading)("isPaginable", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2397:
/*!*********************************************************************!*\
  !*** ./src/app/features/manager/chart-view/chart-view.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartViewComponent": () => (/* binding */ ChartViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var export_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! export-from-json */ 9615);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chart */ 2348);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/togglebutton */ 5293);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/slidemenu */ 691);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);



//services
















const _c0 = ["myChart"];
function ChartViewComponent_p_toolbar_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChartViewComponent_p_toolbar_1_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.showSeven());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChartViewComponent_p_toolbar_1_ng_template_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.showMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChartViewComponent_p_toolbar_1_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.showYear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "show7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "showMonth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, "showYear"));
  }
}
function ChartViewComponent_p_toolbar_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-slideMenu", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChartViewComponent_p_toolbar_1_ng_template_2_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r10.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p-toggleButton", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChartViewComponent_p_toolbar_1_ng_template_2_Template_p_toggleButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showTransitionOptions", "5ms")("hideTransitionOptions", "0ms")("model", ctx_r5.items)("popup", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 8, "exportfile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("onLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, "showtable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("offLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, "showchart"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.checked);
  }
}
function ChartViewComponent_p_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChartViewComponent_p_toolbar_1_ng_template_1_Template, 6, 9, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChartViewComponent_p_toolbar_1_ng_template_2_Template, 8, 14, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ChartViewComponent_ng_container_3_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-chart", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r15.basicData)("options", ctx_r15.basicOptions);
  }
}
function ChartViewComponent_ng_container_3_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-dynamic-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collection", ctx_r16.chartTable)("cols", ctx_r16.cols)("isEditable", false)("isDeletable", false)("isLoading", !ctx_r16.isLoad);
  }
}
function ChartViewComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChartViewComponent_ng_container_3_section_2_Template, 3, 2, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ChartViewComponent_ng_container_3_section_3_Template, 2, 5, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.checked);
  }
}
function ChartViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 25)(3, "div", 26)(4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 28)(6, "div", 29)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 31)(9, "div", 32)(10, "div", 33)(11, "div", 34)(12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Loading....");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ChartViewComponent {
  constructor(activatedRoute, meterService, translateService) {
    this.activatedRoute = activatedRoute;
    this.meterService = meterService;
    this.translateService = translateService;
    this.checked = true;
    this.isLoad = false;
    this._histories = new Map();
    this.month = {
      "january": '01',
      "february": '02',
      "march": '03',
      "april": '04',
      "may": '05',
      "june": '06',
      "july": '07',
      "august": '08',
      "september": '09',
      "october": '10',
      "november": '11',
      "december": '12'
    };
    this.colors = {
      1: "#e9c752",
      2: "#1E2EDE",
      3: "#890F0F"
    };
    this.names = {
      1: "electricity",
      2: "water",
      3: "gas"
    };
    this.translateName = {
      "Electricity": "electricity",
      "Water": "water",
      "Gas": "gas",
      "Electricité": "electricity",
      "Eau": "water",
      "Gaz": "gas"
    };
    this.translateMonth = {
      "January": "january",
      "February": "february",
      "March": "march",
      "April": "april",
      "May": "may",
      "June": "june",
      "July": "july",
      "August": "august",
      "September": "september",
      "October": "october",
      "November": "november",
      "December": "december",
      "Janvier": "january",
      "Février": "february",
      "Mars": "march",
      "Avril": "april",
      "Mai": "may",
      "Juin": "june",
      "Juillet": "july",
      "Août": "august",
      "Septembre": "september",
      "Octobre": "october",
      "Novembre": "november",
      "Décembre": "december"
    };
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.chart) this.chart.reinit();
    });
  }
  ngOnInit() {
    this.basicOptions = {
      plugins: {
        datalabels: {
          align: "end",
          anchor: "end",
          borderRadius: 4,
          backgroundColor: "#6B6FD5",
          color: "white"
        },
        legend: {
          display: true,
          labels: {
            color: '#495057'
          }
        }
      }
    };
    this.chartTable = [];
    this.items = [{
      label: 'JSON',
      command: () => this.exportJSON(this.chartTable)
    }, {
      label: 'XML',
      command: () => this.exportXML(this.chartTable)
    }];
    this.cols = [{
      field: 'date',
      header: 'date'
    }, {
      field: 'energyType',
      header: 'energytype'
    }, {
      field: 'value',
      header: 'value'
    }];
    this.showSeven().then(() => {
      this.translateService.onLangChange.subscribe(event => {
        this.refreshLabels();
      });
    });
  }
  refreshLabels() {
    this.basicData.datasets.forEach(element => {
      this.translateService.get(this.translateName[element.label]).subscribe(translation => {
        element.label = translation;
      });
    });
    if (this._hasMonth) {
      this.refreshLabelsMonth();
    }
    if (this.checked) {
      this.chart.reinit();
    }
  }
  refreshLabelsMonth() {
    for (let index = 0; index < this.basicData.labels.length; index++) {
      var parts = this.basicData.labels[index].split(" - ");
      this.translateService.get(this.translateMonth[parts[0]] ? this.translateMonth[parts[0]] : parts[0]).subscribe(translation => {
        this.basicData.labels[index] = translation + " - " + parts[1];
      });
    }
    ;
  }
  refreshData(startDate, endDate) {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._currentId = _this.activatedRoute.snapshot.params['id'];
      if (_this._currentId.includes('H')) {
        yield _this.meterService.getMetersByBuildingId(_this._currentId).toPromise().then(response => {
          _this._meters = response;
        });
        yield _this.historiesCreator(_this._meters, startDate, endDate);
      } else {
        yield _this.meterService.getMetersByWalletId(_this._currentId).toPromise().then(response => {
          _this._meters = response;
        });
        yield _this.historiesCreator(_this._meters, startDate, endDate);
      }
    })();
  }
  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  formatDate(date) {
    return [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join('-');
  }
  historiesCreator(meters, startDate, endDate) {
    var _this2 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._histories.clear();
      _this2.chartTable = [];
      for (let index = 0; index < meters.length; index++) {
        yield _this2.meterService.getMeterHistoryByMeterIdUsingDate(meters[index].id, startDate, endDate).toPromise().then(response => {
          _this2._histories.set(meters[index], response);
        });
      }
    })();
  }
  getLastSevenDay() {
    var _this3 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var startDate = new Date();
      var endDate = new Date();
      var dataIndex = 0;
      startDate.setDate(startDate.getDate() - 7);
      yield _this3.refreshData(_this3.formatDate(startDate), _this3.formatDate(endDate));
      for (let index = 0; index < 7; index++) {
        startDate.setDate(startDate.getDate() + 1);
        _this3.basicData.labels.push(_this3.formatDate(startDate));
      }
      _this3._histories.forEach((value, key) => {
        _this3.translateService.get(_this3.names[key.energyType.id]).subscribe(translation => {
          _this3.initialiazeDatasetElement(translation, _this3.colors[key.energyType.id]);
        });
        var array = [];
        var valueData = 0;
        _this3.basicData.labels.forEach(element => {
          value.forEach(history => {
            if (history.date == element) {
              if (valueData <= history.value) {
                valueData = history.value;
              }
            }
          });
          _this3.addDataTableChart(element, key.energyType.id, valueData, key.id);
          array.push(valueData);
        });
        _this3.basicData.datasets[dataIndex].data = array;
        dataIndex++;
      });
    })();
  }
  getByMonth() {
    var _this4 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var endDate = new Date();
      var startDate = new Date();
      var dataIndex = 0;
      startDate.setFullYear(startDate.getFullYear() - 1);
      yield _this4.refreshData(_this4.formatDate(startDate), _this4.formatDate(endDate));
      var currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        var month = currentDate.toLocaleString('en', {
          month: 'long'
        }).toLocaleLowerCase();
        var year = currentDate.getFullYear();
        var label = month + ' - ' + year;
        _this4.basicData.labels.push(label);
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      _this4._histories.forEach((value, key) => {
        _this4.translateService.get(_this4.names[key.energyType.id]).subscribe(translation => {
          _this4.initialiazeDatasetElement(translation, _this4.colors[key.energyType.id]);
        });
        var array = [];
        var valueData = 0;
        _this4.basicData.labels.forEach(element => {
          value.forEach(history => {
            if (history.date.split("-")[1] == _this4.month[element.split(" - ")[0]] && history.date.split("-")[0] == element.split(" - ")[1]) {
              if (valueData <= history.value) {
                valueData = history.value;
              }
            }
          });
          _this4.addDataTableChart(element, key.energyType.id, valueData, key.id);
          array.push(valueData);
        });
        _this4.basicData.datasets[dataIndex].data = array;
        dataIndex++;
      });
      _this4.refreshLabelsMonth();
    })();
  }
  getByYear() {
    var _this5 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var startDate = new Date();
      var endDate = new Date();
      var dataIndex = 0;
      startDate.setFullYear(startDate.getFullYear() - 5);
      yield _this5.refreshData(_this5.formatDate(startDate), _this5.formatDate(endDate));
      for (let index = 2019; index <= endDate.getFullYear(); index++) {
        _this5.basicData.labels.push(index);
      }
      _this5._histories.forEach((value, key) => {
        _this5.translateService.get(_this5.names[key.energyType.id]).subscribe(translation => {
          _this5.initialiazeDatasetElement(translation, _this5.colors[key.energyType.id]);
        });
        var array = [];
        var valueData = 0;
        _this5.basicData.labels.forEach(element => {
          value.forEach(history => {
            if (history.date.split("-")[0] == element) {
              if (valueData <= history.value) {
                valueData = history.value;
              }
            }
          });
          if (valueData > 0) _this5.addDataTableChart(element, key.energyType.id, valueData, key.id);
          array.push(valueData);
        });
        _this5.basicData.datasets[dataIndex].data = array;
        dataIndex++;
      });
    })();
  }
  showSeven() {
    var _this6 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6._hasMonth = false;
      _this6.isLoad = false;
      _this6.basicData = {
        labels: [],
        datasets: []
      };
      yield _this6.getLastSevenDay();
      _this6.isLoad = true;
    })();
  }
  showMonth() {
    var _this7 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7._hasMonth = true;
      _this7.isLoad = false;
      _this7.basicData = {
        labels: [],
        datasets: []
      };
      yield _this7.getByMonth();
      _this7.isLoad = true;
    })();
  }
  showYear() {
    var _this8 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8._hasMonth = false;
      _this8.isLoad = false;
      _this8.basicData = {
        labels: [],
        datasets: []
      };
      yield _this8.getByYear();
      _this8.isLoad = true;
    })();
  }
  addDataTableChart(date, energyType, value, meterId) {
    this.chartTable.push({
      date: date,
      energyType: this.names[energyType],
      value: value,
      meterId: meterId
    });
  }
  exportJSON(chartTable) {
    const data = chartTable;
    const fileName = "data";
    const exportType = export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"].types.json;
    (0,export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"])({
      data,
      fileName,
      exportType
    });
  }
  exportXML(chartTable) {
    const data = chartTable;
    const fileName = 'data';
    const exportType = export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"].types.xml;
    (0,export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"])({
      data,
      fileName,
      exportType
    });
  }
  initialiazeDatasetElement(translation, color) {
    this.basicData.datasets.push({
      label: translation,
      borderColor: color,
      backgroundColor: color,
      tension: 0.4,
      data: []
    });
  }
}
ChartViewComponent.ɵfac = function ChartViewComponent_Factory(t) {
  return new (t || ChartViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_2__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
};
ChartViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ChartViewComponent,
  selectors: [["app-chart-view"]],
  viewQuery: function ChartViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 6,
  vars: 3,
  consts: [[1, "view"], ["class", "toolbar", "styleClass", "mb-4 gap-2", 4, "ngIf"], [1, "card", "table-container"], [4, "ngIf", "ngIfElse"], ["class", "card"], ["loading", ""], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pButton", "", "icon", "pi pi-info-circle", 1, "p-button-sm", "button", "purple-button", 3, "label", "click"], [3, "showTransitionOptions", "hideTransitionOptions", "model", "popup"], ["menu", ""], ["type", "button", "pButton", "", "icon", "pi pi-file-export", 1, "p-button-sm", "button", "purple-button", 3, "label", "click"], ["btn", ""], ["offIcon", "pi pi-chart-pie", "onIcon", "pi pi-table", "styleClass", "p-button-sm button", 1, "purple-togglebutton", 3, "onLabel", "offLabel", "ngModel", "ngModelChange"], [1, "element-section"], ["class", "chart-section", 4, "ngIf"], ["class", "table-section", 4, "ngIf"], [1, "chart-section"], ["type", "line", 1, "chart", 3, "data", "options"], ["myChart", ""], [1, "table-section"], [3, "collection", "cols", "isEditable", "isDeletable", "isLoading"], ["aria-label", "Orange and tan hamster running in a metal wheel", "role", "img", 1, "wheel-and-hamster", "center-hamster"], [1, "wheel"], [1, "hamster"], [1, "hamster__body"], [1, "hamster__head"], [1, "hamster__ear"], [1, "hamster__eye"], [1, "hamster__nose"], [1, "hamster__limb", "hamster__limb--fr"], [1, "hamster__limb", "hamster__limb--fl"], [1, "hamster__limb", "hamster__limb--br"], [1, "hamster__limb", "hamster__limb--bl"], [1, "hamster__tail"], [1, "spoke"]],
  template: function ChartViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChartViewComponent_p_toolbar_1_Template, 3, 0, "p-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ChartViewComponent_ng_container_3_Template, 4, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ChartViewComponent_ng_template_4_Template, 16, 0, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoad);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoad)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_chart__WEBPACK_IMPORTED_MODULE_11__.UIChart, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_12__.ToggleButton, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_13__.SlideMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background: #f8f9fa;\n  border-radius: 10px;\n  border: 1px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 100%;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin: 0.2em;\n}\n\n.chart[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.element-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.chart-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.table-section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9jaGFydC12aWV3L2NoYXJ0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi9zcmMvYXNzZXRzL3N0eWxlcy9jb25zdGFudHMvaW5kZXhcIiBhcyAqO1xyXG5cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwLjJlbTtcclxufVxyXG5cclxuLmNoYXJ0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbGVtZW50LXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNoYXJ0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5154:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/manager/contract-view/contract-form/contract-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractFormComponent": () => (/* binding */ ContractFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_models_datamodels_Contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/datamodels/Contract */ 7640);
/* harmony import */ var src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/building.service */ 9472);
/* harmony import */ var src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/contract.service */ 9899);
/* harmony import */ var src_app_core_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/customer.service */ 1173);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);



//components

//services






















function ContractFormComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContractFormComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onClean());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ContractFormComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContractFormComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class ContractFormComponent {
  constructor(contractService, customerService, fb, ref, config, translateService, confirmationService, buildingService, localStorage) {
    this.contractService = contractService;
    this.customerService = customerService;
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.confirmationService = confirmationService;
    this.buildingService = buildingService;
    this.localStorage = localStorage;
    //dropdown
    this.energies = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.initForm();
      yield _this.contractService.getAllContractTypes().toPromise().then(contractTypes => {
        _this.contractTypes = contractTypes;
      });
      yield _this.contractService.getEnergyTypeByProviderId(_this.localStorage.getData('id')).toPromise().then(energyTypes => {
        _this.energies = energyTypes;
        for (let index = 0; index < _this.energies.length; index++) {
          _this.translateService.get(_this.energies[index].value).subscribe(translation => {
            _this.energies[index].value = translation;
          });
        }
      });
      if (_this.modeForm == "edit") {
        yield _this.loadCustomer(_this._contract.customerId);
      }
    })();
  }
  initForm() {
    var _this2 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.customerForm = _this2.fb.group({
        id: [null],
        name: [''],
        surname: [''],
        building: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      _this2.contractForm = _this2.fb.group({
        id: [null],
        startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        contractType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      if (_this2.config.data) {
        _this2.modeForm = "edit";
        _this2._contract = _this2.config.data;
        yield _this2.loadCustomerBuilding(_this2._contract.customerId);
        _this2.updateContractForm();
      } else {
        _this2.modeForm = "create";
      }
    })();
  }
  loadCustomerBuilding(customerId) {
    var _this3 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.buildingService.getBuildingByCustomerId(customerId, 0, 50).toPromise().then(buildings => {
        _this3.buildings = buildings;
        _this3.buildings.forEach(element => {
          element.fullAdress = (element.buildingName ? "" : element.buildingName) + `${element.street} ${element.number}, ${element.zipCode} ${element.city}`;
        });
      });
    })();
  }
  loadCustomer(customerId) {
    var _this4 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.customerService.getCustomerById(customerId).toPromise().then(customer => {
        _this4._customer = customer;
        _this4.customerForm.patchValue(_this4._customer);
      });
    })();
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
          this._contract = this.contractForm.value;
          this._customer = this.customerForm.value;
          this._newContract = new src_app_core_models_datamodels_Contract__WEBPACK_IMPORTED_MODULE_1__.Contract(this._contract.id, this._contract.startDate, this._contract.endDate, this.localStorage.getData("id"), this._contract.contractType, this._customer.building.id, this._customer.id);
          this.ref.close(this._newContract);
        }
      });
    });
  }
  updateContractForm() {
    this.contractForm.patchValue(this._contract);
    if (this.modeForm === "edit") {
      this.buildings.forEach(element => {
        if (element.id == this._contract.buildingId) {
          this.customerForm.get("building").patchValue(element);
        }
      });
    }
  }
  isReadOnly() {
    return this.modeForm == "edit";
  }
  onSearch() {
    this.loadCustomerBuilding(this.customerForm.get("id").value);
    this.loadCustomer(this.customerForm.get("id").value);
  }
  onClean() {
    this.customerForm.get("id").patchValue(null);
    this.customerForm.get("name").patchValue('');
    this.customerForm.get("surname").patchValue('');
    this.customerForm.get("building").patchValue(null);
  }
}
ContractFormComponent.ɵfac = function ContractFormComponent_Factory(t) {
  return new (t || ContractFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_3__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_customer_service__WEBPACK_IMPORTED_MODULE_4__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_2__.BuildingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_5__.LocalService));
};
ContractFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ContractFormComponent,
  selectors: [["app-contract-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService])],
  decls: 60,
  vars: 51,
  consts: [[1, "contract-form-container", "dialog-component"], [1, "form-section"], [1, "contract-form", "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "startDate", "dateFormat", "yy-mm-dd", "dataType", "string", 1, "field", "form-calendar", "purple-calendar", 3, "showIcon"], ["formControlName", "endDate", "dateFormat", "yy-mm-dd", "dataType", "string", 1, "field", "form-calendar", "purple-calendar", 3, "showIcon"], ["appendTo", "body", "formControlName", "contractType", "optionLabel", "value", 1, "field", "form-dropdown", "purple-dropdown", 3, "options", "placeholder", "showClear"], [1, "contractor-infos", "grid-form", 3, "formGroup"], [1, "p-inputgroup"], ["formControlName", "id", "type", "text", "pInputText", "", 1, "field", "purple-input", 3, "readonly"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "class", "purple-button", "styleClass", "p-button-warn", 3, "click", 4, "ngIf"], ["type", "button", "pButton", "", "icon", "pi pi-search", "class", "purple-button", "styleClass", "p-button-warn", 3, "click", 4, "ngIf"], ["formControlName", "name", "type", "text", "pInputText", "", 1, "field", "purple-input", 3, "readonly"], ["formControlName", "surname", "type", "text", "pInputText", "", 1, "field", "purple-input", 3, "readonly"], ["appendTo", "body", "formControlName", "building", "optionLabel", "fullAdress", 1, "field", "form-dropdown", "purple-dropdown", 3, "options", "placeholder", "showClear"], [1, "form-required"], [1, "form-validation"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["type", "button", "pButton", "", "icon", "pi pi-trash", "styleClass", "p-button-warn", 1, "purple-button", 3, "click"], ["type", "button", "pButton", "", "icon", "pi pi-search", "styleClass", "p-button-warn", 1, "purple-button", 3, "click"]],
  template: function ContractFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 2)(6, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "p-calendar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "p-calendar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "p-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "form", 7)(29, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ContractFormComponent_button_33_Template, 1, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ContractFormComponent_button_34_Template, 1, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "p-dropdown", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "section", 15)(49, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "section", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "app-form-status", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div")(54, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContractFormComponent_Template_button_click_54_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ContractFormComponent_Template_button_click_56_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "p-confirmDialog", 20)(59, "p-confirmDialog", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 27, "contractinfo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.contractForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 29, "startdate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showIcon", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 31, "enddate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showIcon", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 33, "contracttype"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 35, "selectcontract"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.contractTypes)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 37, "contractorinfo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.customerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.isReadOnly());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isReadOnly());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isReadOnly());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 39, "name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 41, "surname"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 43, "building"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 45, "selectbuilding"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.buildings)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("validity", ctx.contractForm.valid && ctx.customerForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 47, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 49, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.contractForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.Calendar, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_6__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: [".contract-form-container[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  min-width: 35vw;\n}\n\np-dropdown[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9jb250cmFjdC12aWV3L2NvbnRyYWN0LWZvcm0vY29udHJhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LWZvcm0tY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAuNXJlbTtcclxuICAgIG1pbi13aWR0aDogMzV2dztcclxufVxyXG5cclxucC1kcm9wZG93bntcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6234:
/*!***************************************************************************!*\
  !*** ./src/app/features/manager/contract-view/contract-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractViewComponent": () => (/* binding */ ContractViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract-form/contract-form.component */ 5154);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/contract.service */ 9899);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);


//components

//services















function ContractViewComponent_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContractViewComponent_4_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "new"));
  }
}
function ContractViewComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ContractViewComponent_4_ng_template_0_Template, 2, 3, "ng-template", 8);
  }
}
function ContractViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ContractViewComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.onShowContractPricesClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "showcontractprices"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.selectedContract == null);
  }
}
class ContractViewComponent {
  constructor(router, contractService, dialogService, translateService, localStorage) {
    this.router = router;
    this.contractService = contractService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.isLoading = false;
  }
  ngOnInit() {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.cols = [{
      field: 'startDate',
      header: 'startdate'
    }, {
      field: 'endDate',
      header: 'enddate'
    }, {
      field: 'providerName',
      header: 'provider'
    }, {
      field: 'contractType.value',
      header: 'contracttype'
    }, {
      field: 'buildingAdress',
      header: 'buildingadress'
    }];
    this.refreshData();
  }
  createFormDialog() {
    this.translateService.get("contractform").subscribe(translation => {
      const ref = this.dialogService.open(_contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__.ContractFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(contract => {
        if (contract) {
          this.contractService.createContract(contract).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  editFormDialog(data) {
    this.translateService.get("contractform").subscribe(translation => {
      const ref = this.dialogService.open(_contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_1__.ContractFormComponent, {
        header: translation,
        data: data,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(contract => {
        if (contract) {
          this.contractService.updateContract(contract).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  onShowContractPricesClick() {
    this.router.navigateByUrl(`/manager/contract/${this.selectedContract.id}/prices`);
  }
  onContractSelected(contract) {
    this.selectedContract = contract;
  }
  updatePaginationParams(params) {
    this.paginationParams = params;
    this.refreshData();
  }
  refreshData() {
    this.isLoading = true;
    this.roles.includes("ADMIN") ? this.loadProviderContracts() : this.loadCustomerContracts();
  }
  loadCustomerContracts() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.contractService.countContractByCustomerId(_this.localStorage.getData('id')).toPromise().then(contractsCounter => {
        _this.contractsCounter = contractsCounter;
      });
      yield _this.contractService.getContractsByCustomerId(_this.localStorage.getData('id'), _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(contracts => {
        _this.contracts = contracts;
        _this.isLoading = false;
      });
    })();
  }
  loadProviderContracts() {
    var _this2 = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.contractService.countContractByProviderId(_this2.localStorage.getData('id')).toPromise().then(contractsCounter => {
        _this2.contractsCounter = contractsCounter;
      });
      yield _this2.contractService.getContractsByProviderId(_this2.localStorage.getData('id'), _this2.paginationParams.first, _this2.paginationParams.rowsNumber).toPromise().then(contracts => {
        _this2.contracts = contracts;
        _this2.isLoading = false;
      });
    })();
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
ContractViewComponent.ɵfac = function ContractViewComponent_Factory(t) {
  return new (t || ContractViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_3__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
};
ContractViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContractViewComponent,
  selectors: [["app-contract-view"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService])],
  decls: 8,
  vars: 8,
  consts: [[1, "contract-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], [4, "ngIf"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "totalRecords", "cols", "isLoading", "isEditable", "isDeletable", "isPaginable", "onEdit", "onPageChange", "onSelect"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "mr-2", "purple-button", 3, "label", "click"], ["pButton", "", "icon", "pi pi-history", 1, "mr-2", "p-button-sm", "purple-button", 3, "disabled", "label", "click"]],
  template: function ContractViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ContractViewComponent_4_Template, 1, 0, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ContractViewComponent_ng_template_5_Template, 2, 4, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onEdit", function ContractViewComponent_Template_app_dynamic_table_onEdit_7_listener($event) {
        return ctx.editFormDialog($event);
      })("onPageChange", function ContractViewComponent_Template_app_dynamic_table_onPageChange_7_listener($event) {
        return ctx.updatePaginationParams($event);
      })("onSelect", function ContractViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onContractSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collection", ctx.contracts)("totalRecords", ctx.contractsCounter)("cols", ctx.cols)("isLoading", ctx.isLoading)("isEditable", ctx.isAdmin())("isDeletable", false)("isPaginable", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4878:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/manager/contract-view/price-view/price-form/price-form.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceFormComponent": () => (/* binding */ PriceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/contract.service */ 9899);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/form-status/form-status.component */ 2503);

//components

//services
















class PriceFormComponent {
  constructor(fb, ref, config, translateService, confirmationService, contractService, localStorage) {
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.confirmationService = confirmationService;
    this.contractService = contractService;
    this.localStorage = localStorage;
  }
  ngOnInit() {
    this.initForm();
    this.contractService.getEnergyTypeByProviderId(this.localStorage.getData('id')).subscribe(energies => {
      this.energies = energies;
      for (let index = 0; index < this.energies.length; index++) {
        this.translateService.get(this.energies[index].value).subscribe(translation => {
          this.energies[index].value = translation;
        });
      }
      ;
    });
  }
  initForm() {
    this.priceForm = this.fb.group({
      id: [null],
      dayPrice: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nightPrice: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      energyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    if (this.config.data) {
      this.modeForm = "edit";
      this._contractEnergyType = this.config.data;
      this.updateForm();
    } else {
      this.modeForm = "create";
    }
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
          this._contractEnergyType = this.priceForm.value;
          if (this.modeForm == "create") {
            this._contractEnergyType.energyTypeId = this._contractEnergyType.energyType;
            delete this._contractEnergyType.energyType;
          }
          this.ref.close(this._contractEnergyType);
        }
      });
    });
  }
  updateForm() {
    this.priceForm.patchValue(this._contractEnergyType);
    if (this.modeForm === "edit") {
      this.priceForm.get("energyType").patchValue(this._contractEnergyType.energyTypeId);
      this.priceForm.get("energyType").disable();
    }
  }
}
PriceFormComponent.ɵfac = function PriceFormComponent_Factory(t) {
  return new (t || PriceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService));
};
PriceFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PriceFormComponent,
  selectors: [["app-price-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 33,
  vars: 25,
  consts: [[1, "dialog-component"], [1, "form-section"], [1, "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "dayPrice", "type", "text", 1, "field", "form-inputNumber", "purple-inputnumber", 3, "min"], ["formControlName", "nightPrice", "type", "text", 1, "field", "form-inputNumber", "purple-inputnumber", 3, "min"], ["appendTo", "body", "formControlName", "energyType", "optionLabel", "value", "optionValue", "id", 1, "field", "form-dropdown", "purple-dropdown", 3, "options", "placeholder", "showClear"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function PriceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "p-inputNumber", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p-inputNumber", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "p-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "section", 7)(23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-form-status", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div")(27, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PriceFormComponent_Template_button_click_27_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PriceFormComponent_Template_button_click_29_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "p-confirmDialog", 11)(32, "p-confirmDialog", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.priceForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, "dayprice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 15, "nightprice"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 17, "energytype"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 19, "selectenergy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.energies)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("validity", ctx.priceForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 21, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 23, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.priceForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1988:
/*!***********************************************************************************!*\
  !*** ./src/app/features/manager/contract-view/price-view/price-view.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceViewComponent": () => (/* binding */ PriceViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/route-history.service */ 5220);
/* harmony import */ var _price_form_price_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price-form/price-form.component */ 4878);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/contract.service */ 9899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/dynamic-table/dynamic-table.component */ 79);



//components


//services















function PriceViewComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PriceViewComponent_ng_template_4_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "new"));
  }
}
function PriceViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PriceViewComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onPreviousClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PriceViewComponent_ng_template_4_div_3_Template, 3, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
  }
}
function PriceViewComponent_ng_template_5_Template(rf, ctx) {}
class PriceViewComponent {
  constructor(router, activatedRoute, contractService, dialogService, routeHistory, translateService, localStorage) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.contractService = contractService;
    this.dialogService = dialogService;
    this.routeHistory = routeHistory;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'energyType',
      header: 'energy'
    }, {
      field: 'dayPrice',
      header: 'dayprice'
    }, {
      field: 'nightPrice',
      header: 'nightprice'
    }];
    this.refreshData();
  }
  refreshData() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentContractId = _this.activatedRoute.snapshot.params['contractId'];
      _this.isLoading = true;
      //convert id of energy type to energy type name
      let map = new Map();
      yield _this.contractService.getAllEnergyTypes().toPromise().then(energyTypes => {
        energyTypes.forEach(e => {
          map.set(e.id, e.value);
        });
      });
      yield _this.contractService.getContractEnergyTypeByContractId(_this.currentContractId).toPromise().then(contractEnergyType => {
        contractEnergyType.forEach(ce => {
          ce.energyType = map.get(ce.energyTypeId);
        });
        _this.energiesPrices = contractEnergyType;
        _this.isLoading = false;
      });
    })();
  }
  createFormDialog() {
    this.translateService.get("priceform").subscribe(translation => {
      const ref = this.dialogService.open(_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_2__.PriceFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(contractEnergyType => {
        if (contractEnergyType) {
          this.contractService.createContractEnergyType(contractEnergyType, this.currentContractId).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  editFormDialog(data) {
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_2__.PriceFormComponent, {
        header: translation,
        data: data,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(contractEnergyType => {
        if (contractEnergyType) {
          this.contractService.updateContractEnergyType(contractEnergyType).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  deletePrice(id) {
    this.contractService.deleteContractEnergyTypeById(id).subscribe(() => {
      this.refreshData();
    });
  }
  onPriceSelected(energy) {
    this.selectedContractEnergy = energy;
  }
  onPreviousClick() {
    this.routeHistory.back();
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
PriceViewComponent.ɵfac = function PriceViewComponent_Factory(t) {
  return new (t || PriceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_contract_service__WEBPACK_IMPORTED_MODULE_4__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_1__.RouteHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService));
};
PriceViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PriceViewComponent,
  selectors: [["app-price-view"]],
  decls: 8,
  vars: 5,
  consts: [[1, "price-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "cols", "isEditable", "isDeletable", "isLoading", "onEdit", "onDelete", "onSelect"], [1, "router-actions", "rv-separator"], ["pButton", "", "icon", "pi pi-chevron-left", 1, "p-button-sm", "p-button-secondary", 3, "label", "click"], ["class", "table-actions", 4, "ngIf"], [1, "table-actions"], ["pButton", "", "icon", "pi pi-plus", 1, "mr-2", "p-button-sm", "purple-button", 3, "label", "click"]],
  template: function PriceViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PriceViewComponent_ng_template_4_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PriceViewComponent_ng_template_5_Template, 0, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onEdit", function PriceViewComponent_Template_app_dynamic_table_onEdit_7_listener($event) {
        return ctx.editFormDialog($event);
      })("onDelete", function PriceViewComponent_Template_app_dynamic_table_onDelete_7_listener($event) {
        return ctx.deletePrice($event);
      })("onSelect", function PriceViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onPriceSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collection", ctx.energiesPrices)("cols", ctx.cols)("isEditable", ctx.isAdmin())("isDeletable", ctx.isAdmin())("isLoading", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9848:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/manager/customer-view/customer-form/customer-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFormComponent": () => (/* binding */ CustomerFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);

//components

//services












class CustomerFormComponent {
  constructor(fb, ref, config, confirmationService, translateService) {
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.confirmationService = confirmationService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.initForm();
    //display in console values when changed 
    //this.customerForm.valueChanges.subscribe(console.log);
  }

  initForm() {
    this.customerForm = this.fb.group({
      id: [null],
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phoneNumber: [''],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      language: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
    if (this.config.data) {
      this.modeForm = "edit";
      this._customer = this.config.data;
      this.updateForm();
    } else {
      this.modeForm = "create";
    }
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
          this._customer = this.customerForm.value;
          this._customer.phoneNumber = "0" + this.customerForm.value.phoneNumber;
          this.ref.close(this._customer);
        }
      });
    });
  }
  updateForm() {
    this.customerForm.patchValue(this._customer);
  }
}
CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) {
  return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};
CustomerFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerFormComponent,
  selectors: [["app-customer-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService])],
  decls: 36,
  vars: 21,
  consts: [[1, "customer-form-container", "dialog-component"], [1, "form-section"], [1, "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "name", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["formControlName", "surname", "type", "text", "pInputText", "", 1, "field", "purple-input"], ["prefix", "(0)", "formControlName", "phoneNumber", 1, "field", "form-inputNumber", "purple-inputnumber"], ["formControlName", "email", "type", "text", "pInputText", "", 1, "field", "purple-input"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function CustomerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "p-inputNumber", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section", 8)(26, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-form-status", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerFormComponent_Template_button_click_30_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerFormComponent_Template_button_click_32_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "p-confirmDialog", 12)(35, "p-confirmDialog", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.customerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, "surname"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 13, "phonenumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 15, "email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validity", ctx.customerForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 17, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 19, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.customerForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_8__.InputNumber, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_0__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5606:
/*!***************************************************************************!*\
  !*** ./src/app/features/manager/customer-view/customer-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerViewComponent": () => (/* binding */ CustomerViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-form/customer-form.component */ 9848);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/customer.service */ 1173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);


//components

//services














function CustomerViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerViewComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "new"));
  }
}
function CustomerViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerViewComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.onShowBuildingsClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "showbuilding"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.selectedCustomer == null);
  }
}
class CustomerViewComponent {
  constructor(router, customerService, dialogService, translateService, localStorage) {
    this.router = router;
    this.customerService = customerService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'name',
      header: 'name'
    }, {
      field: 'surname',
      header: 'surname'
    }, {
      field: 'phoneNumber',
      header: 'phonenumber'
    }, {
      field: 'email',
      header: 'email'
    }];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.refreshData();
  }
  createFormDialog() {
    this.translateService.get("customerform").subscribe(translation => {
      const ref = this.dialogService.open(_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__.CustomerFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(customer => {
        if (customer) {
          this.customerService.createCustomer(customer, "Customer").subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  editFormDialog(data) {
    this.translateService.get("customerform").subscribe(translation => {
      const ref = this.dialogService.open(_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__.CustomerFormComponent, {
        header: translation,
        data: data,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(customer => {
        if (customer) {
          this.customerService.updateCustomer(customer).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  onCustomerSelected(customer) {
    this.selectedCustomer = customer;
  }
  deleteCustomer(id) {
    this.customerService.deleteCustomerById(id).subscribe(() => {
      this.refreshData();
    });
  }
  onShowBuildingsClick() {
    this.router.navigateByUrl(`/manager/customer/${this.selectedCustomer.id}/buildings`);
  }
  updatePaginationParams(params) {
    this.paginationParams = params;
    this.refreshData();
  }
  refreshData() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      yield _this.customerService.countCustomerByProviderId(_this.localStorage.getData('id')).toPromise().then(customersCounter => {
        _this.customersCounter = customersCounter;
      });
      yield _this.customerService.getCustomersByProviderId(_this.localStorage.getData('id'), _this.paginationParams.first, _this.paginationParams.rowsNumber).toPromise().then(customers => {
        _this.customers = customers;
        _this.isLoading = false;
      });
    })();
  }
}
CustomerViewComponent.ɵfac = function CustomerViewComponent_Factory(t) {
  return new (t || CustomerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
};
CustomerViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CustomerViewComponent,
  selectors: [["app-customer-view"]],
  decls: 8,
  vars: 7,
  consts: [[1, "customer-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "totalRecords", "cols", "isDeletable", "isEditable", "isLoading", "isPaginable", "onEdit", "onDelete", "onSelect", "onPageChange"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "mr-2", "purple-button", 3, "label", "click"], ["pButton", "", "icon", "pi pi-building", 1, "p-button-sm", "mr-2", "purple-button", 3, "label", "disabled", "click"]],
  template: function CustomerViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CustomerViewComponent_ng_template_4_Template, 2, 3, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CustomerViewComponent_ng_template_5_Template, 2, 4, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onEdit", function CustomerViewComponent_Template_app_dynamic_table_onEdit_7_listener($event) {
        return ctx.editFormDialog($event);
      })("onDelete", function CustomerViewComponent_Template_app_dynamic_table_onDelete_7_listener($event) {
        return ctx.deleteCustomer($event);
      })("onSelect", function CustomerViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onCustomerSelected($event);
      })("onPageChange", function CustomerViewComponent_Template_app_dynamic_table_onPageChange_7_listener($event) {
        return ctx.updatePaginationParams($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collection", ctx.customers)("totalRecords", ctx.customersCounter)("cols", ctx.cols)("isDeletable", true)("isEditable", true)("isLoading", ctx.isLoading)("isPaginable", true);
    }
  },
  dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 79:
/*!***********************************************************************************!*\
  !*** ./src/app/features/manager/layouts/dynamic-table/dynamic-table.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableComponent": () => (/* binding */ DynamicTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ 97);

//services









function DynamicTableComponent_ng_template_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, col_r4.header));
  }
}
function DynamicTableComponent_ng_template_2_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th");
  }
}
function DynamicTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableComponent_ng_template_2_th_1_Template, 3, 3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_template_2_th_2_Template, 1, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditable || ctx_r0.isDeletable);
  }
}
function DynamicTableComponent_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.parseData(rowData_r5, col_r8.field)), " ");
  }
}
function DynamicTableComponent_ng_template_3_td_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_ng_template_3_td_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onEditClick(rowData_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DynamicTableComponent_ng_template_3_td_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_ng_template_3_td_2_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onDeleteClick(rowData_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DynamicTableComponent_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableComponent_ng_template_3_td_2_button_1_Template, 1, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_template_3_td_2_button_2_Template, 1, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isEditable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isDeletable);
  }
}
function DynamicTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicTableComponent_ng_template_3_td_1_Template, 3, 3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_template_3_td_2_Template, 3, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSelectableRow", rowData_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditable || ctx_r1.isDeletable);
  }
}
const _c0 = function () {
  return {
    "min-width": "30rem"
  };
};
class DynamicTableComponent {
  constructor(confirmationService, translateService) {
    this.confirmationService = confirmationService;
    this.translateService = translateService;
    //emitter
    this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    //selection
    this.selectedItems = [];
    //pagination
    this.rowsNumber = 5;
    this.rowsPerPage = [5, 10, 15];
    this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    //table params
    this.isEditable = false;
    this.isDeletable = false;
    this.isLoading = false;
    this.isPaginable = false;
  }
  loadCollectionLazy(event) {
    const paginationParams = {
      first: event.first || 0,
      rowsNumber: event.rows || 5
    };
    this.onPageChange.emit(paginationParams);
  }
  onEditClick(rowData) {
    this.onEdit.emit(rowData);
  }
  onDeleteClick(id) {
    this.translateService.get("deleteMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'deleteDialog',
        accept: () => {
          this.onDelete.emit(id);
        }
      });
    });
  }
  onSelectionSend() {
    this.onSelect.emit(this.selectedItem);
  }
  /*
  public debug(data: any, field: string) {
    console.log(data);
    console.log("field: " + field);
  }
  */
  parseData(data, field) {
    if (typeof data[field] == 'boolean') this.parseBoolean(data, field);
    if (field.includes('.')) return field.split('.').reduce((acc, obj) => acc[obj], data);
    if (typeof data[field] == 'string' && (data[field].match(/ - /g) || []).length === 1) {
      const parts = data[field].split(" - ");
      var element = "";
      this.translateService.get(parts[0]).subscribe(translation => {
        element = translation + " - " + parts[1];
      });
      return element;
    } else return data[field];
  }
  parseBoolean(data, booleanField) {
    return data[booleanField] ? data[booleanField] = '✔️' : data[booleanField] = '❌';
  }
}
DynamicTableComponent.ɵfac = function DynamicTableComponent_Factory(t) {
  return new (t || DynamicTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
};
DynamicTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DynamicTableComponent,
  selectors: [["app-dynamic-table"]],
  inputs: {
    collection: "collection",
    totalRecords: "totalRecords",
    cols: "cols",
    isEditable: "isEditable",
    isDeletable: "isDeletable",
    isLoading: "isLoading",
    isPaginable: "isPaginable"
  },
  outputs: {
    onEdit: "onEdit",
    onDelete: "onDelete",
    onSelect: "onSelect",
    onPageChange: "onPageChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService])],
  decls: 5,
  vars: 13,
  consts: [[1, "d-table"], ["scrollHeight", "flex", "selectionMode", "single", "datakey", "id", "styleClass", "p-datatable-striped p-datatable-lg", 1, "purple-table", 3, "columns", "value", "scrollable", "loading", "lazy", "selection", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "tableStyle", "rowHover", "onLazyLoad", "selectionChange", "onRowSelect", "onRowUnselect"], ["pTemplate", "header", "class", "table-header"], ["pTemplate", "body", "class", "table-body"], ["key", "deleteDialog", "header", "Delete confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "table-row", 3, "pSelectableRow"], ["class", "actions-column", 4, "ngIf"], [1, "actions-column"], ["pButton", "", "icon", "pi pi-pencil", "class", "btn p-button-rounded p-button-outlined p-button-secondary mr-2 p-button-sm", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", "class", "btn p-button-rounded p-button-outlined p-button-danger p-button-sm", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-pencil", 1, "btn", "p-button-rounded", "p-button-outlined", "p-button-secondary", "mr-2", "p-button-sm", 3, "click"], ["pButton", "", "icon", "pi pi-trash", 1, "btn", "p-button-rounded", "p-button-outlined", "p-button-danger", "p-button-sm", 3, "click"]],
  template: function DynamicTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p-table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function DynamicTableComponent_Template_p_table_onLazyLoad_1_listener($event) {
        return ctx.loadCollectionLazy($event);
      })("selectionChange", function DynamicTableComponent_Template_p_table_selectionChange_1_listener($event) {
        return ctx.selectedItem = $event;
      })("onRowSelect", function DynamicTableComponent_Template_p_table_onRowSelect_1_listener() {
        return ctx.onSelectionSend();
      })("onRowUnselect", function DynamicTableComponent_Template_p_table_onRowUnselect_1_listener() {
        return ctx.onSelectionSend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicTableComponent_ng_template_2_Template, 3, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicTableComponent_ng_template_3_Template, 3, 3, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-confirmDialog", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.collection)("scrollable", true)("loading", ctx.isLoading)("lazy", true)("selection", ctx.selectedItem)("paginator", ctx.isPaginable)("rows", ctx.rowsNumber)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", ctx.rowsPerPage)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("rowHover", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SelectableRow, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialog, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".d-table[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.d-table[_ngcontent-%COMP%]   p-table[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.d-table[_ngcontent-%COMP%]   p-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]   td.actions-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.d-table[_ngcontent-%COMP%]   p-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]   td.actions-column[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.d-table[_ngcontent-%COMP%]   p-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]:hover   td.actions-column[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9sYXlvdXRzL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVZO0VBRUksYUFBQTtFQUNBLHlCQUFBO0FBRGhCO0FBR2dCO0VBQ0ksZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtBQUhwQjtBQVFvQjtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQU54QiIsInNvdXJjZXNDb250ZW50IjpbIi5kLXRhYmxle1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBwLXRhYmxle1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdHIudGFibGUtcm93e1xyXG4gICAgICAgICAgICB0ZC5hY3Rpb25zLWNvbHVtbntcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGQuYWN0aW9ucy1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSAgIFxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9046:
/*!************************************************************!*\
  !*** ./src/app/features/manager/manager-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerRoutingModule": () => (/* binding */ ManagerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _building_view_building_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building-view/building-view.component */ 3874);
/* harmony import */ var _contract_view_contract_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract-view/contract-view.component */ 6234);
/* harmony import */ var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-view/customer-view.component */ 5606);
/* harmony import */ var _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meter-view/meter-view.component */ 9183);
/* harmony import */ var _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-view/provider-view.component */ 2779);
/* harmony import */ var _wallet_view_wallet_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-view/wallet-view.component */ 1654);
/* harmony import */ var _chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-view/chart-view.component */ 2397);
/* harmony import */ var _contract_view_price_view_price_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contract-view/price-view/price-view.component */ 1988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [{
  path: 'contracts',
  component: _contract_view_contract_view_component__WEBPACK_IMPORTED_MODULE_1__.ContractViewComponent
}, {
  path: 'contract/:contractId/prices',
  component: _contract_view_price_view_price_view_component__WEBPACK_IMPORTED_MODULE_7__.PriceViewComponent
}, {
  path: 'buildings',
  component: _building_view_building_view_component__WEBPACK_IMPORTED_MODULE_0__.BuildingViewComponent
}, {
  path: 'building',
  children: [{
    path: ':buildingId/meters',
    component: _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_3__.MeterViewComponent
    //component: BuildingMeterViewComponent
  }, {
    path: ':walletId/meters',
    component: _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_3__.MeterViewComponent
  }]
}, {
  path: 'customers',
  component: _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_2__.CustomerViewComponent
}, {
  path: 'customer/:customerId',
  children: [{
    path: 'buildings',
    component: _building_view_building_view_component__WEBPACK_IMPORTED_MODULE_0__.BuildingViewComponent
  }]
}, {
  path: 'providers',
  component: _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_4__.ProviderViewComponent
}, {
  path: 'meters',
  component: _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_3__.MeterViewComponent
}, {
  path: 'wallets',
  component: _wallet_view_wallet_view_component__WEBPACK_IMPORTED_MODULE_5__.WalletViewComponent
}, {
  path: 'wallets/:buildingId/meters',
  component: _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_3__.MeterViewComponent
}, {
  path: 'chart/:id',
  component: _chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_6__.ChartViewComponent
}];
class ManagerRoutingModule {}
ManagerRoutingModule.ɵfac = function ManagerRoutingModule_Factory(t) {
  return new (t || ManagerRoutingModule)();
};
ManagerRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ManagerRoutingModule
});
ManagerRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ManagerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 7951:
/*!****************************************************!*\
  !*** ./src/app/features/manager/manager.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerModule": () => (/* binding */ ManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_modules_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared-modules/primeng/primeng.module */ 9832);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/avatar */ 7063);
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager.component */ 3765);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/menu/menu.component */ 7961);
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-routing.module */ 9046);
/* harmony import */ var _contract_view_contract_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contract-view/contract-view.component */ 6234);
/* harmony import */ var _building_view_building_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building-view/building-view.component */ 3874);
/* harmony import */ var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-view/customer-view.component */ 5606);
/* harmony import */ var _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meter-view/meter-view.component */ 9183);
/* harmony import */ var _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider-view/provider-view.component */ 2779);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/dynamic-table/dynamic-table.component */ 79);
/* harmony import */ var _wallet_view_wallet_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wallet-view/wallet-view.component */ 1654);
/* harmony import */ var _contract_view_contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contract-view/contract-form/contract-form.component */ 5154);
/* harmony import */ var _customer_view_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-view/customer-form/customer-form.component */ 9848);
/* harmony import */ var _building_view_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./building-view/building-form/building-form.component */ 3048);
/* harmony import */ var _meter_view_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meter-view/meter-form/meter-form.component */ 7562);
/* harmony import */ var _meter_view_meter_history_meter_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./meter-view/meter-history/meter-history.component */ 3747);
/* harmony import */ var _language_selector_language_selector_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../language-selector/language-selector.module */ 1868);
/* harmony import */ var _layouts_menu_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/menu/user-card/user-card.component */ 3811);
/* harmony import */ var _layouts_notification_notification_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/notification/notification.component */ 1610);
/* harmony import */ var _layouts_notification_notification_form_notification_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts/notification/notification-form/notification-form.component */ 6719);
/* harmony import */ var _chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chart-view/chart-view.component */ 2397);
/* harmony import */ var _meter_view_meter_history_meter_history_form_meter_history_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./meter-view/meter-history/meter-history-form/meter-history-form.component */ 8959);
/* harmony import */ var _contract_view_price_view_price_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contract-view/price-view/price-view.component */ 1988);
/* harmony import */ var _contract_view_price_view_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contract-view/price-view/price-form/price-form.component */ 4878);
/* harmony import */ var _wallet_view_wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./wallet-view/wallet-form/wallet-form.component */ 9158);
/* harmony import */ var _wallet_view_wallet_meter_form_wallet_meter_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./wallet-view/wallet-meter-form/wallet-meter-form.component */ 5034);
/* harmony import */ var _layouts_form_status_form_status_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layouts/form-status/form-status.module */ 8653);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2560);





//Components




























class ManagerModule {
  directTranslate() {}
}
ManagerModule.ɵfac = function ManagerModule_Factory(t) {
  return new (t || ManagerModule)();
};
ManagerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: ManagerModule
});
ManagerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, src_app_shared_modules_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_29__.AvatarModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagerRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _language_selector_language_selector_module__WEBPACK_IMPORTED_MODULE_16__.LanguageSelectorModule, _layouts_form_status_form_status_module__WEBPACK_IMPORTED_MODULE_26__.FormStatusModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ManagerModule, {
    declarations: [_manager_component__WEBPACK_IMPORTED_MODULE_1__.ManagerComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _contract_view_contract_view_component__WEBPACK_IMPORTED_MODULE_4__.ContractViewComponent, _building_view_building_view_component__WEBPACK_IMPORTED_MODULE_5__.BuildingViewComponent, _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_6__.CustomerViewComponent, _meter_view_meter_view_component__WEBPACK_IMPORTED_MODULE_7__.MeterViewComponent, _provider_view_provider_view_component__WEBPACK_IMPORTED_MODULE_8__.ProviderViewComponent, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__.DynamicTableComponent, _wallet_view_wallet_view_component__WEBPACK_IMPORTED_MODULE_10__.WalletViewComponent, _contract_view_contract_form_contract_form_component__WEBPACK_IMPORTED_MODULE_11__.ContractFormComponent, _customer_view_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_12__.CustomerFormComponent, _building_view_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_13__.BuildingFormComponent, _meter_view_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_14__.MeterFormComponent, _meter_view_meter_history_meter_history_component__WEBPACK_IMPORTED_MODULE_15__.MeterHistoryComponent, _layouts_menu_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_17__.UserCardComponent, _layouts_notification_notification_component__WEBPACK_IMPORTED_MODULE_18__.NotificationComponent, _layouts_notification_notification_form_notification_form_component__WEBPACK_IMPORTED_MODULE_19__.NotificationFormComponent, _chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_20__.ChartViewComponent, _meter_view_meter_history_meter_history_form_meter_history_form_component__WEBPACK_IMPORTED_MODULE_21__.MeterHistoryFormComponent, _contract_view_price_view_price_view_component__WEBPACK_IMPORTED_MODULE_22__.PriceViewComponent, _contract_view_price_view_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_23__.PriceFormComponent, _wallet_view_wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_24__.WalletFormComponent, _wallet_view_wallet_meter_form_wallet_meter_form_component__WEBPACK_IMPORTED_MODULE_25__.WalletMeterFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, src_app_shared_modules_primeng_primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_29__.AvatarModule, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule, _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__.ManagerRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _language_selector_language_selector_module__WEBPACK_IMPORTED_MODULE_16__.LanguageSelectorModule, _layouts_form_status_form_status_module__WEBPACK_IMPORTED_MODULE_26__.FormStatusModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslateModule]
  });
})();

/***/ }),

/***/ 7562:
/*!********************************************************************************!*\
  !*** ./src/app/features/manager/meter-view/meter-form/meter-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterFormComponent": () => (/* binding */ MeterFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);

//components

//services















class MeterFormComponent {
  constructor(meterService, fb, ref, config, translateService, confirmationService) {
    this.meterService = meterService;
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.initForm();
    this.meterService.getAllEnergyTypes().subscribe(energyTypes => {
      this.energies = energyTypes;
      for (let index = 0; index < this.energies.length; index++) {
        this.translateService.get(this.energies[index].value).subscribe(translation => {
          this.energies[index].value = translation;
        });
      }
    });
  }
  initForm() {
    this.meterForm = this.fb.group({
      id: [null],
      value: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      energyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      numeric: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      open: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    if (this.config.data) {
      this.modeForm = "edit";
      this.config.data.numeric = this.config.data.numeric == "✔️";
      this.config.data.open = this.config.data.open == "✔️";
      this._meter = this.config.data;
      this.updateForm();
    } else {
      this.modeForm = "create";
    }
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
          this._meter = this.meterForm.value;
          this._meter.energyType = this.energies[this._meter.energyType];
          this.ref.close(this._meter);
        }
      });
    });
  }
  updateForm() {
    this.meterForm.patchValue(this._meter);
    if (this.modeForm === "edit") {
      this.meterForm.get("energyType").patchValue(this._meter.energyType.id);
      this.meterForm.get("energyType").disable();
    }
  }
}
MeterFormComponent.ɵfac = function MeterFormComponent_Factory(t) {
  return new (t || MeterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_0__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService));
};
MeterFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MeterFormComponent,
  selectors: [["app-meter-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService])],
  decls: 39,
  vars: 28,
  consts: [[1, "dialog-component"], [1, "form-section"], [1, "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "value", "type", "text", 1, "field", "form-inputNumber", "purple-inputnumber"], ["appendTo", "body", "formControlName", "energyType", "optionLabel", "value", "optionValue", "id", 1, "field", "form-dropdown", "purple-dropdown", 3, "options", "placeholder", "showClear"], ["formControlName", "numeric", 1, "field", "purple-checkbox", 3, "binary"], ["formControlName", "open", 1, "field", "purple-checkbox", 3, "binary"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function MeterFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-inputNumber", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "p-dropdown", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-checkbox", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "p-checkbox", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "section", 8)(29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-form-status", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div")(33, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeterFormComponent_Template_button_click_33_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeterFormComponent_Template_button_click_35_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "p-confirmDialog", 12)(38, "p-confirmDialog", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.meterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 14, "value"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 16, "energytype"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 18, "selectenergy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.energies)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 20, "isnumeric"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 22, "open"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("validity", ctx.meterForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 24, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 26, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.meterForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.Checkbox, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8959:
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/manager/meter-view/meter-history/meter-history-form/meter-history-form.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterHistoryFormComponent": () => (/* binding */ MeterHistoryFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 7990);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/form-status/form-status.component */ 2503);

//components

//services














class MeterHistoryFormComponent {
  constructor(meterService, fb, ref, config, confirmationService, translateService) {
    this.meterService = meterService;
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.confirmationService = confirmationService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.meterHistoryForm = this.fb.group({
      id: [null],
      date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      value: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    if (this.config.data) {
      this.modeForm = "edit";
      this._meterHistory = this.config.data;
      this.updateForm();
    } else {
      this.modeForm = "create";
    }
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
          this._meterHistory = this.meterHistoryForm.value;
          this.ref.close(this._meterHistory);
        }
      });
    });
  }
  updateForm() {
    this.meterHistoryForm.patchValue(this._meterHistory);
  }
}
MeterHistoryFormComponent.ɵfac = function MeterHistoryFormComponent_Factory(t) {
  return new (t || MeterHistoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_0__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
};
MeterHistoryFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MeterHistoryFormComponent,
  selectors: [["app-meter-history-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService])],
  decls: 25,
  vars: 13,
  consts: [[1, "dialog-component"], [1, "form-section"], [1, "grid-form", 3, "formGroup"], [1, "label"], ["formControlName", "date", "dateFormat", "yy-mm-dd", "dataType", "string", 1, "field", "form-calendar", "purple-calendar", 3, "showIcon"], ["formControlName", "value", "type", "text", 1, "field", "form-inputNumber", "purple-inputnumber"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function MeterHistoryFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "p-calendar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p-inputNumber", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 6)(15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-form-status", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeterHistoryFormComponent_Template_button_click_19_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MeterHistoryFormComponent_Template_button_click_21_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "p-confirmDialog", 10)(24, "p-confirmDialog", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.meterHistoryForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, "value"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("validity", ctx.meterHistoryForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 9, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 11, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.meterHistoryForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_1__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3747:
/*!**************************************************************************************!*\
  !*** ./src/app/features/manager/meter-view/meter-history/meter-history.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterHistoryComponent": () => (/* binding */ MeterHistoryComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _meter_history_form_meter_history_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meter-history-form/meter-history-form.component */ 8959);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 97);


//components


//services













function MeterHistoryComponent_ng_template_5_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th");
  }
}
function MeterHistoryComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-sortIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MeterHistoryComponent_ng_template_5_th_8_Template, 1, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "value"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
  }
}
function MeterHistoryComponent_ng_template_6_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeterHistoryComponent_ng_template_6_td_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const history_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.editFormDialog(history_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeterHistoryComponent_ng_template_6_td_5_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const history_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.deleteMeterHistory(history_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MeterHistoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 12)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MeterHistoryComponent_ng_template_6_td_5_Template, 3, 0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const history_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin());
  }
}
const _c0 = function () {
  return {
    "min-width": "20rem"
  };
};
const _c1 = function () {
  return ["value", "date"];
};
class MeterHistoryComponent {
  constructor(meterService, ref, config, translateService, dialogService, localStorage, confirmationService) {
    this.meterService = meterService;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.localStorage = localStorage;
    this.confirmationService = confirmationService;
    this.first = 0;
    this.rowsNumber = 15;
    this.isLoading = true;
  }
  loadHistoricLazy(event) {
    this.isLoading = true;
    this.meterService.countMeterHistoryByMeterId(this.config.data).subscribe(historiesCounter => {
      this.totalRecords = historiesCounter;
    });
    if (event.sortField) {
      this.meterService.getMeterHistoryByMeterId(this.config.data, event.first, event.rows, event.sortField, event.sortOrder).subscribe(meterHistory => {
        this.meterHistoric = meterHistory;
        this.isLoading = false;
      });
    } else {
      this.meterService.getMeterHistoryByMeterId(this.config.data, event.first, event.rows).subscribe(meterHistory => {
        this.meterHistoric = meterHistory;
        this.isLoading = false;
      });
    }
  }
  editFormDialog(data) {
    this.translateService.get("meterhistoryform").subscribe(translation => {
      const ref = this.dialogService.open(_meter_history_form_meter_history_form_component__WEBPACK_IMPORTED_MODULE_1__.MeterHistoryFormComponent, {
        header: translation,
        data: data,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(meterHistory => {
        if (meterHistory) {
          this.meterService.updateMeterHistory(meterHistory).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  deleteMeterHistory(id) {
    this.translateService.get("deleteMessage").subscribe(translation => {
      this.confirmationService.confirm({
        message: translation,
        key: 'deleteDialog',
        accept: () => {
          this.meterService.deleteMeterHistoryById(id).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  createFormDialog() {
    this.translateService.get("meterhistoryform").subscribe(translation => {
      const ref = this.dialogService.open(_meter_history_form_meter_history_form_component__WEBPACK_IMPORTED_MODULE_1__.MeterHistoryFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(meterHistory => {
        if (meterHistory) {
          this.meterService.createMeterHistory(meterHistory, this.config.data).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  refreshData() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.meterService.countMeterHistoryByMeterId(_this.config.data).toPromise().then(historiesCounter => {
        _this.totalRecords = historiesCounter;
      });
      yield _this.meterService.getMeterHistoryByMeterId(_this.config.data, _this.first, _this.rowsNumber).toPromise().then(meterHistory => {
        _this.meterHistoric = meterHistory;
        _this.isLoading = false;
      });
    })();
  }
  onMeterHistorySelected(meterHistory) {
    this.selectedMeterHistory = meterHistory;
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
MeterHistoryComponent.ɵfac = function MeterHistoryComponent_Factory(t) {
  return new (t || MeterHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_3__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService));
};
MeterHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MeterHistoryComponent,
  selectors: [["app-meter-history"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 8,
  vars: 15,
  consts: [[1, "historic-container"], ["pButton", "", "icon", "pi pi-plus", 1, "mr-2", "p-button-sm", "purple-button", 3, "label", "click"], [1, "d-table"], ["dataKey", "id", "styleClass", "p-datatable-sm p-datatable-striped", 1, "history-table", "purple-table", 3, "value", "loading", "lazy", "paginator", "rows", "first", "tableStyle", "rowHover", "totalRecords", "globalFilterFields", "onLazyLoad", "firstChange"], ["pTemplate", "header", "class", "table-header"], ["pTemplate", "body"], ["key", "deleteDialog", "header", "Delete confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["pSortableColumn", "value"], ["field", "value"], ["pSortableColumn", "date"], ["field", "date"], [4, "ngIf"], [1, "table-row"], ["class", "actions-column", 4, "ngIf"], [1, "actions-column"], ["pButton", "", "icon", "pi pi-pencil", 1, "btn", "p-button-rounded", "p-button-outlined", "p-button-secondary", "mr-2", "p-button-sm", 3, "click"], ["pButton", "", "icon", "pi pi-trash", 1, "btn", "p-button-rounded", "p-button-outlined", "p-button-danger", "p-button-sm", 3, "click"]],
  template: function MeterHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MeterHistoryComponent_Template_button_click_1_listener() {
        return ctx.createFormDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "p-table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onLazyLoad", function MeterHistoryComponent_Template_p_table_onLazyLoad_4_listener($event) {
        return ctx.loadHistoricLazy($event);
      })("firstChange", function MeterHistoryComponent_Template_p_table_firstChange_4_listener($event) {
        return ctx.first = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MeterHistoryComponent_ng_template_5_Template, 9, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MeterHistoryComponent_ng_template_6_Template, 6, 3, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-confirmDialog", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 11, "createdata"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.meterHistoric)("loading", ctx.isLoading)("lazy", true)("paginator", true)("rows", ctx.rowsNumber)("first", ctx.first)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0))("rowHover", true)("totalRecords", ctx.totalRecords)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["div.historic-container[_ngcontent-%COMP%]   div.d-table[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ndiv.historic-container[_ngcontent-%COMP%]   div.d-table[_ngcontent-%COMP%]   p-table.history-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]   td.actions-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\ndiv.historic-container[_ngcontent-%COMP%]   div.d-table[_ngcontent-%COMP%]   p-table.history-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]   td.actions-column[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  margin: 0 0.2rem;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\ndiv.historic-container[_ngcontent-%COMP%]   div.d-table[_ngcontent-%COMP%]   p-table.history-table[_ngcontent-%COMP%]   tr.table-row[_ngcontent-%COMP%]:hover   td.actions-column[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9tZXRlci12aWV3L21ldGVyLWhpc3RvcnkvbWV0ZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUVJLGdCQUFBO0FBRlI7QUFPZ0I7RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFOcEI7QUFVb0I7RUFDSSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDZCQUFBO0FBVnhCO0FBZXdCO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBYjVCIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lmhpc3RvcmljLWNvbnRhaW5lcntcclxuXHJcbiAgICBkaXYuZC10YWJsZXtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICAgICAgcC10YWJsZS5oaXN0b3J5LXRhYmxle1xyXG5cclxuICAgICAgICAgICAgdHIudGFibGUtcm93e1xyXG4gICAgICAgICAgICAgICAgdGQuYWN0aW9ucy1jb2x1bW57XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuMnJlbTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGQuYWN0aW9ucy1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9183:
/*!*********************************************************************!*\
  !*** ./src/app/features/manager/meter-view/meter-view.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterViewComponent": () => (/* binding */ MeterViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _meter_history_meter_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meter-history/meter-history.component */ 3747);
/* harmony import */ var _meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meter-form/meter-form.component */ 7562);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/directives/route-history.service */ 5220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);


//components



//services
















function MeterViewComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MeterViewComponent_ng_template_4_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "new"));
  }
}
function MeterViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MeterViewComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.onPreviousClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MeterViewComponent_ng_template_4_div_3_Template, 3, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
  }
}
function MeterViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MeterViewComponent_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.onShowHistoryClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, "showhistory"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.selectedMeter == null);
  }
}
class MeterViewComponent {
  constructor(activatedRoute, meterService, dialogService, routeHistory, translateService, localStorage) {
    this.activatedRoute = activatedRoute;
    this.meterService = meterService;
    this.dialogService = dialogService;
    this.routeHistory = routeHistory;
    this.translateService = translateService;
    this.localStorage = localStorage;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'value',
      header: 'value'
    }, {
      field: 'energyType.value',
      header: 'energytype'
    }, {
      field: 'numeric',
      header: 'numeric'
    }, {
      field: 'open',
      header: 'open'
    }];
    this.refreshData();
  }
  createFormDialog() {
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_2__.MeterFormComponent, {
        header: translation,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(meter => {
        if (meter) {
          this.meterService.createMeter(meter, this.currentBuildingId).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  editFormDialog(data) {
    this.translateService.get("meterform").subscribe(translation => {
      const ref = this.dialogService.open(_meter_form_meter_form_component__WEBPACK_IMPORTED_MODULE_2__.MeterFormComponent, {
        header: translation,
        data: data,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(meter => {
        if (meter) {
          this.meterService.updateMeter(meter).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  deleteMeter(id) {
    this.meterService.deleteMeter(id).subscribe(() => {
      this.refreshData();
    });
  }
  onMeterSelected(meter) {
    this.selectedMeter = meter;
  }
  onShowHistoryClick() {
    this.translateService.get("meterhistories").subscribe(translation => {
      const ref = this.dialogService.open(_meter_history_meter_history_component__WEBPACK_IMPORTED_MODULE_1__.MeterHistoryComponent, {
        header: translation,
        data: this.selectedMeter.id,
        draggable: true,
        resizable: true,
        maximizable: true
      });
    });
  }
  onPreviousClick() {
    this.routeHistory.back();
  }
  refreshData() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentBuildingId = _this.activatedRoute.snapshot.params['buildingId'];
      _this.isLoading = true;
      if (_this.currentBuildingId.includes('H')) {
        yield _this.meterService.getMetersByBuildingId(_this.currentBuildingId).toPromise().then(meters => {
          _this.meters = meters;
          _this.isLoading = false;
        });
      } else {
        yield _this.meterService.getMetersByWalletId(_this.currentBuildingId).toPromise().then(meters => {
          _this.meters = meters;
          _this.isLoading = false;
        });
      }
    })();
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
}
MeterViewComponent.ɵfac = function MeterViewComponent_Factory(t) {
  return new (t || MeterViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_4__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_directives_route_history_service__WEBPACK_IMPORTED_MODULE_5__.RouteHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService));
};
MeterViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MeterViewComponent,
  selectors: [["app-meter-view"]],
  decls: 8,
  vars: 5,
  consts: [[1, "meter-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "cols", "isEditable", "isDeletable", "isLoading", "onEdit", "onDelete", "onSelect"], [1, "router-actions", "rv-separator"], ["pButton", "", "icon", "pi pi-chevron-left", 1, "p-button-sm", "p-button-secondary", 3, "label", "click"], ["class", "table-actions", 4, "ngIf"], [1, "table-actions"], ["pButton", "", "icon", "pi pi-plus", 1, "mr-2", "p-button-sm", "purple-button", 3, "label", "click"], ["pButton", "", "icon", "pi pi-history", 1, "mr-2", "p-button-sm", "purple-button", 3, "disabled", "label", "click"]],
  template: function MeterViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MeterViewComponent_ng_template_4_Template, 4, 4, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MeterViewComponent_ng_template_5_Template, 2, 4, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onEdit", function MeterViewComponent_Template_app_dynamic_table_onEdit_7_listener($event) {
        return ctx.editFormDialog($event);
      })("onDelete", function MeterViewComponent_Template_app_dynamic_table_onDelete_7_listener($event) {
        return ctx.deleteMeter($event);
      })("onSelect", function MeterViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onMeterSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collection", ctx.meters)("cols", ctx.cols)("isEditable", ctx.isAdmin())("isDeletable", ctx.isAdmin())("isLoading", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2779:
/*!***************************************************************************!*\
  !*** ./src/app/features/manager/provider-view/provider-view.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderViewComponent": () => (/* binding */ ProviderViewComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/provider.service */ 366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);
//components
//services




class ProviderViewComponent {
  constructor(providerService) {
    this.providerService = providerService;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'number',
      header: 'Number'
    }, {
      field: 'city',
      header: 'City'
    }, {
      field: 'country',
      header: 'Country'
    }, {
      field: 'zipCode',
      header: 'Zip code'
    }];
    this.refreshData();
  }
  refreshData() {
    this.isLoading = true;
    this.providerService.getAllProviders().subscribe(providers => {
      this.providers = providers;
      this.isLoading = false;
    });
  }
}
ProviderViewComponent.ɵfac = function ProviderViewComponent_Factory(t) {
  return new (t || ProviderViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_provider_service__WEBPACK_IMPORTED_MODULE_0__.ProviderService));
};
ProviderViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProviderViewComponent,
  selectors: [["app-provider-view"]],
  decls: 5,
  vars: 6,
  consts: [[1, "provider-view", "view"], [1, "header-view"], [1, "table-toolbar"], [1, "table-container"], [3, "collection", "cols", "isLoading", "isEditable", "isDeletable", "isPaginable"]],
  template: function ProviderViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "section", 1)(2, "section", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-dynamic-table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collection", ctx.providers)("cols", ctx.cols)("isLoading", ctx.isLoading)("isEditable", false)("isDeletable", false)("isPaginable", true);
    }
  },
  dependencies: [_layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent],
  styles: [".provider-view[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlci9wcm92aWRlci12aWV3L3Byb3ZpZGVyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3ZpZGVyLXZpZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9158:
/*!***********************************************************************************!*\
  !*** ./src/app/features/manager/wallet-view/wallet-form/wallet-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletFormComponent": () => (/* binding */ WalletFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/building.service */ 9472);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);


//components

//services













class WalletFormComponent {
  constructor(buildingService, fb, ref, config, translateService, confirmationService) {
    this.buildingService = buildingService;
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.initForm();
      _this.buildingService.getBuildingByCustomerId(_this._customerId, 0, 50).subscribe(buildings => {
        _this.buildings = buildings;
        _this.buildings.forEach(element => {
          element.fullAdress = (element.buildingName ? "" : element.buildingName) + `${element.street} ${element.number}, ${element.zipCode} ${element.city}`;
        });
      });
    })();
  }
  initForm() {
    this.walletForm = this.fb.group({
      customer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      building: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this._customerId = this.config.data;
    this.updateForm();
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
          this.walletCreator = this.walletForm.value;
          this.ref.close(this.walletCreator);
        }
      });
    });
  }
  updateForm() {
    this.walletForm.get("customer").patchValue(this._customerId);
  }
}
WalletFormComponent.ɵfac = function WalletFormComponent_Factory(t) {
  return new (t || WalletFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_1__.BuildingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService));
};
WalletFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WalletFormComponent,
  selectors: [["app-wallet-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 19,
  vars: 17,
  consts: [[1, "wallet-form-container", "dialog-component"], [1, "form-section"], [1, "wallet-form", "grid-form", 3, "formGroup"], [1, "label"], ["appendTo", "body", "formControlName", "building", "optionLabel", "fullAdress", "optionValue", "id", 1, "field", "purple-dropdown", 3, "options", "placeholder", "showClear"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function WalletFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p-dropdown", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 5)(9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-form-status", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletFormComponent_Template_button_click_13_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletFormComponent_Template_button_click_15_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p-confirmDialog", 9)(18, "p-confirmDialog", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.walletForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "building"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 11, "selectbuilding"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.buildings)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("validity", ctx.walletForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 13, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 15, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.walletForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5034:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/manager/wallet-view/wallet-meter-form/wallet-meter-form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletMeterFormComponent": () => (/* binding */ WalletMeterFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/meter.service */ 891);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/form-status/form-status.component */ 2503);


//components

//services













class WalletMeterFormComponent {
  constructor(meterService, fb, ref, config, translateService, confirmationService) {
    this.meterService = meterService;
    this.fb = fb;
    this.ref = ref;
    this.config = config;
    this.translateService = translateService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Utilisateur_Desktop_Projet_Projet_de_Genie_Logiciel_Code_PPE_application_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.initForm();
      yield _this.meterService.getMetersByBuildingId(_this.config.data.buildingId).toPromise().then(meters => {
        _this.meters = meters;
        _this.meters.forEach(element => {
          _this.translateService.get(element.energyType.value).subscribe(translation => {
            element.fullName = element.id + " | " + translation;
          });
        });
      });
    })();
  }
  initForm() {
    this.walletMeterForm = this.fb.group({
      wallet: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      meter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this._wallet = this.config.data;
    this.updateForm();
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
          this.walletMeter = this.walletMeterForm.value;
          this.ref.close(this.walletMeter);
        }
      });
    });
  }
  updateForm() {
    this.walletMeterForm.get("wallet").patchValue(this._wallet.id);
  }
}
WalletMeterFormComponent.ɵfac = function WalletMeterFormComponent_Factory(t) {
  return new (t || WalletMeterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_meter_service__WEBPACK_IMPORTED_MODULE_1__.MeterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__.DynamicDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService));
};
WalletMeterFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WalletMeterFormComponent,
  selectors: [["app-wallet-meter-form"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService])],
  decls: 19,
  vars: 17,
  consts: [[1, "wallet-meter-form-container", "dialog-component"], [1, "form-section"], [1, "wallet-meter-form", "grid-form", 3, "formGroup"], [1, "label"], ["appendTo", "body", "formControlName", "meter", "optionLabel", "fullName", "optionValue", "id", 1, "field", "purple-dropdown", 3, "options", "placeholder", "showClear"], [1, "form-required"], [3, "validity"], ["pButton", "", "icon", "pi pi-times", 1, "p-button-text", "purple-button-text", 3, "label", "click"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-text", "purple-button-text", 3, "disabled", "label", "click"], ["key", "cancelDialog", "header", "Cancel operation?", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"], ["key", "saveDialog", "header", "Confirmation", "icon", "pi pi-exclamation-triangle", 1, "purple-confirmdialog"]],
  template: function WalletMeterFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "form", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p-dropdown", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 5)(9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "required*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-form-status", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletMeterFormComponent_Template_button_click_13_listener() {
        return ctx.cancelDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WalletMeterFormComponent_Template_button_click_15_listener() {
        return ctx.saveDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "p-confirmDialog", 9)(18, "p-confirmDialog", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.walletMeterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "meter"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 11, "selectmeter"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.meters)("showClear", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("validity", ctx.walletMeterForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 13, "cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 15, "save"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.walletMeterForm.valid);
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _layouts_form_status_form_status_component__WEBPACK_IMPORTED_MODULE_2__.FormStatusComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1654:
/*!***********************************************************************!*\
  !*** ./src/app/features/manager/wallet-view/wallet-view.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletViewComponent": () => (/* binding */ WalletViewComponent)
/* harmony export */ });
/* harmony import */ var _wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-form/wallet-form.component */ 9158);
/* harmony import */ var _wallet_meter_form_wallet_meter_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-meter-form/wallet-meter-form.component */ 5034);
/* harmony import */ var _building_view_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../building-view/building-form/building-form.component */ 3048);
/* harmony import */ var src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/building.service */ 9472);
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/local.service */ 8389);
/* harmony import */ var src_app_core_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/wallet.service */ 9980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ 2648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/dynamic-table/dynamic-table.component */ 79);

//components



//services

















function WalletViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WalletViewComponent_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.createFormDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WalletViewComponent_ng_template_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.createFormDialogMeter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, "new"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, "addmeter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.selectedWallet == null);
  }
}
function WalletViewComponent_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WalletViewComponent_ng_template_5_span_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.onShowBuildingFormClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "managebuilding"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r5.selectedWallet == null);
  }
}
function WalletViewComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, WalletViewComponent_ng_template_5_span_0_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WalletViewComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onShowMetersClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WalletViewComponent_ng_template_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onShowChartClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, "showbuildmeter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.selectedWallet == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 7, "visualcons"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isAdministrator());
  }
}
class WalletViewComponent {
  constructor(router, walletService, buildingService, dialogService, localStorage, translateService) {
    this.router = router;
    this.walletService = walletService;
    this.buildingService = buildingService;
    this.dialogService = dialogService;
    this.localStorage = localStorage;
    this.translateService = translateService;
    this.isLoading = false;
  }
  ngOnInit() {
    this.cols = [{
      field: 'buildingAddress',
      header: 'buildingadress'
    }, {
      field: 'customerPrivilege',
      header: 'customerPrivilege'
    }];
    this.paginationParams = {
      first: 0,
      rowsNumber: 5
    };
    this.refreshData();
  }
  editFormDialog(data) {
    throw new Error('Method not implemented (extension).');
  }
  onWalletSelected(wallet) {
    this.selectedWallet = wallet;
  }
  updatePaginationParams(params) {
    this.paginationParams = params;
    this.refreshData();
  }
  refreshData() {
    this.isLoading = true;
    this.walletService.countWalletByCustomerId(this.localStorage.getData("id")).subscribe(walletsCounter => {
      this.walletsCounter = walletsCounter;
    });
    this.walletService.getWalletByCustomerId(this.localStorage.getData("id"), this.paginationParams.first, this.paginationParams.rowsNumber).subscribe(wallets => {
      this.wallets = wallets;
      this.isLoading = false;
    });
  }
  onShowMetersClick() {
    this.router.navigateByUrl(`/manager/wallets/${this.selectedWallet.id}/meters`);
  }
  onShowBuildingFormClick() {
    const ref = this.dialogService.open(_building_view_building_form_building_form_component__WEBPACK_IMPORTED_MODULE_2__.BuildingFormComponent, {
      header: this.formHeader,
      data: this.selectedWallet.buildingId,
      draggable: true,
      resizable: true,
      maximizable: true
    });
    ref.onClose.subscribe(building => {
      if (building) {
        this.buildingService.updateBuilding(building).subscribe(() => {
          this.refreshData();
        });
      }
    });
  }
  createFormDialog() {
    this.translateService.get("walletform").subscribe(translation => {
      const ref = this.dialogService.open(_wallet_form_wallet_form_component__WEBPACK_IMPORTED_MODULE_0__.WalletFormComponent, {
        header: translation,
        data: this.localStorage.getData('id'),
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(wallet => {
        if (wallet) {
          this.walletService.createWallet(wallet.building, wallet.customer).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  createFormDialogMeter() {
    this.translateService.get("walletmeterform").subscribe(translation => {
      const ref = this.dialogService.open(_wallet_meter_form_wallet_meter_form_component__WEBPACK_IMPORTED_MODULE_1__.WalletMeterFormComponent, {
        header: translation,
        data: this.selectedWallet,
        draggable: true,
        resizable: true,
        maximizable: true
      });
      ref.onClose.subscribe(walletMeter => {
        if (walletMeter) {
          this.walletService.createWalletMeter(walletMeter.wallet, walletMeter.meter).subscribe(() => {
            this.refreshData();
          });
        }
      });
    });
  }
  isAdmin() {
    return JSON.parse(this.localStorage.getData("roles")).includes("ADMIN");
  }
  onShowChartClick() {
    this.router.navigateByUrl(`/manager/chart/${this.selectedWallet.id}`);
  }
  isAdministrator() {
    return this.selectedWallet == null || this.selectedWallet.customerPrivilege != "Gestionnaire";
  }
}
WalletViewComponent.ɵfac = function WalletViewComponent_Factory(t) {
  return new (t || WalletViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_building_service__WEBPACK_IMPORTED_MODULE_3__.BuildingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_4__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
};
WalletViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: WalletViewComponent,
  selectors: [["app-wallet-view"]],
  decls: 8,
  vars: 7,
  consts: [[1, "wallet-view", "view"], [1, "header-view"], [1, "table-toolbar"], ["styleClass", "mb-4 gap-2", 1, "toolbar"], ["pTemplate", "left", "class", "left-side-toolbar"], ["pTemplate", "right", "class", "right-side-toolbar"], [1, "table-container"], [3, "collection", "totalRecords", "cols", "isLoading", "isEditable", "isDeletable", "isPaginable", "onSelect", "onPageChange"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "mr-2", "purple-button", 3, "label", "click"], ["pButton", "", "icon", "pi pi-plus", 1, "p-button-sm", "mr-2", "purple-button", 3, "label", "disabled", "click"], [4, "ngIf"], ["pButton", "", "icon", "pi pi-external-link", 1, "toolbar-btn", "p-button-sm", "mr-2", "purple-button", 3, "label", "disabled", "click"], ["pButton", "", "icon", "pi pi-info-circle", 1, "p-button-sm", "purple-button", 3, "disabled", "label", "click"], ["pButton", "", "icon", "pi pi-building", 1, "toolbar-btn", "p-button-sm", "mr-2", "purple-button", 3, "label", "disabled", "click"]],
  template: function WalletViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "section", 2)(3, "p-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WalletViewComponent_ng_template_4_Template, 4, 7, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WalletViewComponent_ng_template_5_Template, 5, 9, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "section", 6)(7, "app-dynamic-table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onSelect", function WalletViewComponent_Template_app_dynamic_table_onSelect_7_listener($event) {
        return ctx.onWalletSelected($event);
      })("onPageChange", function WalletViewComponent_Template_app_dynamic_table_onPageChange_7_listener($event) {
        return ctx.updatePaginationParams($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collection", ctx.wallets)("totalRecords", ctx.walletsCounter)("cols", ctx.cols)("isLoading", ctx.isLoading)("isEditable", ctx.isAdmin())("isDeletable", ctx.isAdmin())("isPaginable", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, _layouts_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8596:
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/converters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_createFieldsMapper": () => (/* binding */ _createFieldsMapper),
/* harmony export */   "_createJSONData": () => (/* binding */ _createJSONData),
/* harmony export */   "_createTableEntries": () => (/* binding */ _createTableEntries),
/* harmony export */   "_createTableMap": () => (/* binding */ _createTableMap),
/* harmony export */   "_prepareData": () => (/* binding */ _prepareData),
/* harmony export */   "_renderTableHTMLText": () => (/* binding */ _renderTableHTMLText),
/* harmony export */   "createCSVData": () => (/* binding */ createCSVData),
/* harmony export */   "createXLSData": () => (/* binding */ createXLSData),
/* harmony export */   "createXMLData": () => (/* binding */ createXMLData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ 6961);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};

function _createFieldsMapper(fields) {
  if (!fields || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields) && !fields.length || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields) && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getKeys)(fields).length) return function (item) {
    return item;
  };
  var mapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(fields) ? fields.reduce(function (map, key) {
    var _a;
    return __assign(__assign({}, map), (_a = {}, _a[key] = key, _a));
  }, Object.create(null)) : fields;
  return function (item) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(item)) {
      return item.map(function (i) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(i).reduce(function (map, _a) {
          var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];
          if (key in mapper) {
            map[mapper[key]] = value;
          }
          return map;
        }, Object.create(null));
      }).filter(function (i) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getKeys)(i).length;
      });
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(item).reduce(function (map, _a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      if (key in mapper) {
        map[mapper[key]] = value;
      }
      return map;
    }, Object.create(null));
  };
}
function _prepareData(data) {
  var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide a valid JSON';
  try {
    return typeof data === 'string' ? JSON.parse(data) : data;
  } catch (_a) {
    throw new Error(MESSAGE_VALID_JSON_FAIL);
  }
}
function _createJSONData(data, replacer, space) {
  if (replacer === void 0) {
    replacer = null;
  }
  var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide valid JSON object';
  try {
    return JSON.stringify(data, replacer, space);
  } catch (_a) {
    throw new Error(MESSAGE_VALID_JSON_FAIL);
  }
}
function _createTableMap(data) {
  return data.map(_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries).reduce(function (tMap, rowKVs, rowIndex) {
    return rowKVs.reduce(function (map, _a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      var columnValues = map[key] || Array.from({
        length: data.length
      }).map(function (_) {
        return '';
      });
      columnValues[rowIndex] = (typeof value !== 'string' ? JSON.stringify(value) : value) || '';
      map[key] = columnValues;
      return map;
    }, tMap);
  }, Object.create(null));
}
function _createTableEntries(tableMap, beforeTableEncode) {
  if (beforeTableEncode === void 0) {
    beforeTableEncode = function (i) {
      return i;
    };
  }
  return beforeTableEncode((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(tableMap).map(function (_a) {
    var _b = __read(_a, 2),
      fieldName = _b[0],
      fieldValues = _b[1];
    return {
      fieldName: fieldName,
      fieldValues: fieldValues
    };
  }));
}
function encloser(value) {
  var enclosingCharacter = /,|"|\n/.test(value) ? '"' : '';
  var escaped = value.replace(/"/g, '""');
  return "".concat(enclosingCharacter).concat(escaped).concat(enclosingCharacter);
}
var defaultCreateCSVDataOption = {
  beforeTableEncode: function (i) {
    return i;
  },
  delimiter: ','
};
function createCSVData(data, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = __assign(__assign({}, defaultCreateCSVDataOption), options),
    beforeTableEncode = _a.beforeTableEncode,
    delimiter = _a.delimiter;
  if (!data.length) return '';
  var tableMap = _createTableMap(data);
  var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
  var head = tableEntries.map(function (_a) {
    var fieldName = _a.fieldName;
    return fieldName;
  }).join(delimiter) + '\r\n';
  var columns = tableEntries.map(function (_a) {
    var fieldValues = _a.fieldValues;
    return fieldValues;
  }).map(function (column) {
    return column.map(encloser);
  });
  var rows = columns.reduce(function (mergedColumn, column) {
    return mergedColumn.map(function (value, rowIndex) {
      return "".concat(value).concat(delimiter).concat(column[rowIndex]);
    });
  });
  return head + rows.join('\r\n');
}
function _renderTableHTMLText(data, beforeTableEncode) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)(data.length > 0);
  var tableMap = _createTableMap(data);
  var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
  var head = tableEntries.map(function (_a) {
    var fieldName = _a.fieldName;
    return fieldName;
  }).join('</b></th><th><b>');
  var columns = tableEntries.map(function (_a) {
    var fieldValues = _a.fieldValues;
    return fieldValues;
  }).map(function (column) {
    return column.map(function (value) {
      return "<td>".concat(value, "</td>");
    });
  });
  var rows = columns.reduce(function (mergedColumn, column) {
    return mergedColumn.map(function (value, rowIndex) {
      return "".concat(value).concat(column[rowIndex]);
    });
  });
  return "\n    <table>\n      <thead>\n        <tr><th><b>".concat(head, "</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>").concat(rows.join("</tr>\n        <tr>"), "</tr>\n      </tbody>\n    </table>\n  ");
}
var defaultCreateXLSDataOptions = {
  beforeTableEncode: function (i) {
    return i;
  }
};
function createXLSData(data, options) {
  var beforeTableEncode = __assign(__assign({}, defaultCreateXLSDataOptions), options).beforeTableEncode;
  if (!data.length) return '';
  var content = "<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n  </head >\n  <body>\n    ".concat(_renderTableHTMLText(data, beforeTableEncode), "\n  </body>\n</html >\n");
  return content;
}
function createXMLData(data) {
  var content = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE base>\n".concat(_renderXML(data, 'base'), "\n");
  return content;
}
function _renderXML(data, tagName, arrayElementTag, spaces) {
  if (arrayElementTag === void 0) {
    arrayElementTag = 'element';
  }
  if (spaces === void 0) {
    spaces = 0;
  }
  var tag = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeXMLName)(tagName);
  var indentSpaces = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.indent)(spaces);
  if (data === null || data === undefined) {
    return "".concat(indentSpaces, "<").concat(tag, " />");
  }
  var content = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(data) ? data.map(function (item) {
    return _renderXML(item, arrayElementTag, arrayElementTag, spaces + 2);
  }).join('\n') : typeof data === 'object' ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getEntries)(data).map(function (_a) {
    var _b = __read(_a, 2),
      key = _b[0],
      value = _b[1];
    return _renderXML(value, key, arrayElementTag, spaces + 2);
  }).join('\n') : indentSpaces + '  ' + (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.stripHTML)(String(data));
  var contentWithWrapper = "".concat(indentSpaces, "<").concat(tag, ">\n").concat(content, "\n").concat(indentSpaces, "</").concat(tag, ">");
  return contentWithWrapper;
}

/***/ }),

/***/ 8807:
/*!******************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/exportFromJSON.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ 6961);
/* harmony import */ var _processors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors.js */ 1246);
/* harmony import */ var _converters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters.js */ 8596);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ 8745);




function exportFromJSON(_a) {
  var data = _a.data,
    _b = _a.fileName,
    fileName = _b === void 0 ? 'download' : _b,
    extension = _a.extension,
    _c = _a.fileNameFormatter,
    fileNameFormatter = _c === void 0 ? function (name) {
      return name.replace(/\s+/, '_');
    } : _c,
    fields = _a.fields,
    _d = _a.exportType,
    exportType = _d === void 0 ? 'txt' : _d,
    _e = _a.replacer,
    replacer = _e === void 0 ? null : _e,
    _f = _a.space,
    space = _f === void 0 ? 4 : _f,
    _g = _a.processor,
    processor = _g === void 0 ? _processors_js__WEBPACK_IMPORTED_MODULE_1__.downloadFile : _g,
    _h = _a.withBOM,
    withBOM = _h === void 0 ? false : _h,
    _j = _a.beforeTableEncode,
    beforeTableEncode = _j === void 0 ? function (i) {
      return i;
    } : _j,
    _k = _a.delimiter,
    delimiter = _k === void 0 ? ',' : _k;
  var MESSAGE_IS_ARRAY_FAIL = 'Invalid export data. Please provide an array of objects';
  var MESSAGE_UNKNOWN_EXPORT_TYPE = "Can't export unknown data type ".concat(exportType, ".");
  var MESSAGE_FIELD_INVALID = "Can't export string data to ".concat(exportType, ".");
  if (typeof data === 'string') {
    switch (exportType) {
      case 'txt':
      case 'css':
      case 'html':
        {
          return processor(data, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
        }
      default:
        throw new Error(MESSAGE_FIELD_INVALID);
    }
  }
  var fieldsMapper = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._createFieldsMapper)(fields);
  var safeData = fieldsMapper((0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._prepareData)(data));
  var JSONData = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__._createJSONData)(safeData, replacer, space);
  switch (exportType) {
    case 'txt':
    case 'css':
    case 'html':
      {
        return processor(JSONData, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
      }
    case 'json':
      {
        return processor(JSONData, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'json', fileNameFormatter));
      }
    case 'csv':
      {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(safeData), MESSAGE_IS_ARRAY_FAIL);
        var BOM = '\ufeff';
        var CSVData = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createCSVData)(safeData, {
          beforeTableEncode: beforeTableEncode,
          delimiter: delimiter
        });
        var content = withBOM ? BOM + CSVData : CSVData;
        return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'csv', fileNameFormatter));
      }
    case 'xls':
      {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(safeData), MESSAGE_IS_ARRAY_FAIL);
        var content = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createXLSData)(safeData, {
          beforeTableEncode: beforeTableEncode
        });
        return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'xls', fileNameFormatter));
      }
    case 'xml':
      {
        var content = (0,_converters_js__WEBPACK_IMPORTED_MODULE_2__.createXMLData)(safeData);
        return processor(content, exportType, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeFileName)(fileName, extension !== null && extension !== void 0 ? extension : 'xml', fileNameFormatter));
      }
    default:
      throw new Error(MESSAGE_UNKNOWN_EXPORT_TYPE);
  }
}
exportFromJSON.types = _types_js__WEBPACK_IMPORTED_MODULE_3__.exportTypes;
exportFromJSON.processors = {
  downloadFile: _processors_js__WEBPACK_IMPORTED_MODULE_1__.downloadFile
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportFromJSON);

/***/ }),

/***/ 9615:
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exportFromJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exportFromJSON.js */ 8807);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exportFromJSON_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 1246:
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/processors.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile),
/* harmony export */   "generateDataURI": () => (/* binding */ generateDataURI)
/* harmony export */ });
function generateDataURI(content, type, byBlob) {
  switch (type) {
    case 'txt':
      {
        var blobType = 'text/plain;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'css':
      {
        var blobType = 'text/css;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'html':
      {
        var blobType = 'text/html;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'json':
      {
        var blobType = 'text/json;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'csv':
      {
        var blobType = 'text/csv;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'xls':
      {
        var blobType = 'text/application/vnd.ms-excel;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    case 'xml':
      {
        var blobType = 'text/application/xml;charset=utf-8';
        if (byBlob) return URL.createObjectURL(new Blob([content], {
          type: blobType
        }));
        return "data:,".concat(blobType) + encodeURIComponent(content);
      }
    default:
      {
        return '';
      }
  }
}
function downloadFile(content, type, fileName, byBlob) {
  if (fileName === void 0) {
    fileName = 'download';
  }
  if (byBlob === void 0) {
    byBlob = true;
  }
  var dataURI = generateDataURI(content, type, byBlob);
  var anchor = document.createElement('a');
  anchor.href = dataURI;
  anchor.download = fileName;
  anchor.setAttribute('style', 'visibility:hidden');
  document.body.appendChild(anchor);
  anchor.dispatchEvent(new MouseEvent('click', {
    bubbles: false,
    cancelable: false,
    view: window
  }));
  document.body.removeChild(anchor);
}

/***/ }),

/***/ 8745:
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/types.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportTypes": () => (/* binding */ exportTypes)
/* harmony export */ });
var exportTypes = {
  txt: 'txt',
  css: 'css',
  html: 'html',
  json: 'json',
  csv: 'csv',
  xls: 'xls',
  xml: 'xml'
};

/***/ }),

/***/ 6961:
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "getEntries": () => (/* binding */ getEntries),
/* harmony export */   "getKeys": () => (/* binding */ getKeys),
/* harmony export */   "getValues": () => (/* binding */ getValues),
/* harmony export */   "indent": () => (/* binding */ indent),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "normalizeFileName": () => (/* binding */ normalizeFileName),
/* harmony export */   "normalizeXMLName": () => (/* binding */ normalizeXMLName),
/* harmony export */   "stripHTML": () => (/* binding */ stripHTML)
/* harmony export */ });
function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]';
}
function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}
function getValues(data) {
  return Object.keys(data).map(function (key) {
    return data[key];
  });
}
function getKeys(data) {
  return Object.keys(data);
}
function getEntries(data) {
  return Object.keys(data).map(function (key) {
    return [key, data[key]];
  });
}
function normalizeFileName(fileName, extension, fileNameFormatter) {
  var suffix = '.' + extension;
  var extensionPattern = new RegExp("(\\".concat(extension, ")?$"));
  return fileNameFormatter(fileName).replace(extensionPattern, suffix);
}
function normalizeXMLName(name) {
  '555xmlHello .  world!'.trim().replace(/^([0-9,;]|(xml))+/, '');
  return name.replace(/[^_a-zA-Z 0-9:\-\.]/g, '').replace(/^([ 0-9-:\-\.]|(xml))+/i, '').replace(/ +/g, '-');
}
function indent(spaces) {
  return Array(spaces + 1).join(' ');
}
function stripHTML(text) {
  return text.replace(/([<>&])/g, function (_, $1) {
    switch ($1) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      default:
        return '';
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_manager_manager_module_ts.js.map