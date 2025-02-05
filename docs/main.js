(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\repositoriesAngula10\app003Vet\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pet/pet.component */ "h7tv");



class AppComponent {
    constructor() {
        this.title = 'app003Vet';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vet Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pet");
    } }, directives: [_components_pet_pet_component__WEBPACK_IMPORTED_MODULE_1__["PetComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pet/pet.component */ "h7tv");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_4__["PetComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_pet_pet_component__WEBPACK_IMPORTED_MODULE_4__["PetComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h7tv":
/*!*************************************************!*\
  !*** ./src/app/components/pet/pet.component.ts ***!
  \*************************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pet.service */ "jUZj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function PetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PetComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editPet(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PetComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deletePet(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pet_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", pet_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pet_r3.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pet_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Breed: ", pet_r3.breed, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Age: ", pet_r3.age, " years");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight: ", pet_r3.weight, " kg");
} }
function PetComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PetComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PetComponent {
    constructor(petService) {
        this.petService = petService;
        this.pets = [];
        this.newOrUpdatedPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
        this.editIndex = null;
    }
    ngOnInit() {
        this.getPets();
    }
    getPets() {
        this.pets = this.petService.getAll();
    }
    // Add or Update a pet
    addPet() {
        if (this.editIndex === null) {
            //add
            const addedPet = this.petService.add(this.newOrUpdatedPet);
            this.pets.push(Object.assign({}, addedPet)); //create copy
        }
        else {
            //update
            const updatedPet = this.petService.update(this.newOrUpdatedPet);
            if (updatedPet)
                this.pets[this.editIndex] = Object.assign({}, this.newOrUpdatedPet); //copy !
            this.editIndex = null;
        }
        this.resetForm();
    }
    // Edit pet (loads data into the form)
    editPet(index) {
        this.newOrUpdatedPet = Object.assign({}, this.pets[index]); //copy
        this.editIndex = index;
    }
    // Delete pet
    deletePet(index) {
        const deletedPet = this.petService.delete(this.pets[index].id);
        if (deletedPet) {
            this.pets.splice(index, 1);
            if (this.editIndex === index) { //in case deleted pet is editted
                this.resetForm();
            }
        }
    }
    // Reset the form
    resetForm() {
        this.newOrUpdatedPet = { id: 0, name: '', breed: '', age: 0, weight: 0, photoUrl: '' };
        this.editIndex = null;
    }
}
PetComponent.ɵfac = function PetComponent_Factory(t) { return new (t || PetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"])); };
PetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PetComponent, selectors: [["app-pet"]], decls: 15, vars: 9, consts: [[1, "container"], [1, "pet-list"], ["class", "pet-card", 4, "ngFor", "ngForOf"], [1, "pet-form", 3, "ngSubmit"], ["petForm", "ngForm"], ["type", "text", "placeholder", "Pet Name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Breed", "name", "breed", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Age", "name", "age", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Weight (kg)", "name", "weight", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Photo URL", "name", "photoUrl", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["type", "button", 3, "click", 4, "ngIf"], [1, "pet-card"], [3, "src", "alt"], [3, "click"], ["type", "button", 3, "click"]], template: function PetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PetComponent_div_2_Template, 14, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PetComponent_Template_form_ngSubmit_3_listener() { return ctx.addPet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PetComponent_Template_input_ngModelChange_7_listener($event) { return ctx.newOrUpdatedPet.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PetComponent_Template_input_ngModelChange_8_listener($event) { return ctx.newOrUpdatedPet.breed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PetComponent_Template_input_ngModelChange_9_listener($event) { return ctx.newOrUpdatedPet.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PetComponent_Template_input_ngModelChange_10_listener($event) { return ctx.newOrUpdatedPet.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PetComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newOrUpdatedPet.photoUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PetComponent_button_14_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editIndex === null ? "Add Pet" : "Edit Pet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newOrUpdatedPet.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newOrUpdatedPet.breed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newOrUpdatedPet.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newOrUpdatedPet.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newOrUpdatedPet.photoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editIndex === null ? "Add Pet" : "Update Pet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editIndex !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start; \r\n    align-items: flex-start;\r\n    gap: 30px; \r\n    max-width: 1200px; \r\n    margin: auto;\r\n  }\r\n\r\n.pet-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px; \r\n    width: 70%;\r\n  }\r\n\r\n\r\n.pet-card[_ngcontent-%COMP%] {\r\n    width: calc(25% - 10px); \r\n    min-width: 150px; \r\n    max-width: 180px; \r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: lightblue;\r\n    text-align: center;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n.pet-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-height: 100px; \r\n    object-fit: cover;\r\n    border-radius: 5px;\r\n  }\r\n\r\n.pet-form[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    min-width: 280px;\r\n    padding: 15px;\r\n    border: 1px solid #ddd; \r\n    border-radius: 8px; \r\n    background-color: #f9f9f9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n\r\n.pet-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    border: 1px solid #bbb; \r\n    border-radius: 5px;\r\n    width: 95%;\r\n  }\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: turquoise;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background 0.3s;\r\n  }\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: darkcyan;\r\n  }\r\n\r\n.pet-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXQvcGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlEQUFpRDtBQUNqRDtJQUNJLGFBQWE7SUFDYiwyQkFBMkIsRUFBRSw4QkFBOEI7SUFDM0QsdUJBQXVCO0lBQ3ZCLFNBQVMsRUFBRSx3Q0FBd0M7SUFDbkQsaUJBQWlCLEVBQUUsNENBQTRDO0lBQy9ELFlBQVk7RUFDZDtBQUVGLHFEQUFxRDtBQUNyRDtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUyxFQUFFLGlDQUFpQztJQUM1QyxVQUFVO0VBQ1o7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ3BCO0lBQ0ksdUJBQXVCLEVBQUUsbUNBQW1DO0lBQzVELGdCQUFnQixFQUFFLDZCQUE2QjtJQUMvQyxnQkFBZ0IsRUFBRSw2QkFBNkI7SUFDL0MsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDBDQUEwQztFQUM1QztBQUVGLDRCQUE0QjtBQUM1QjtJQUNJLFdBQVc7SUFDWCxpQkFBaUIsRUFBRSxzQkFBc0I7SUFDekMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUVELGlEQUFpRDtBQUNsRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxrQkFBa0IsRUFBRSw2QkFBNkI7SUFDakQseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQixFQUFFLDZCQUE2QjtJQUNyRCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBRUEsWUFBWTtBQUNaO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFFQSwwQkFBMEI7QUFDMUI7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BldC9wZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBNYWluIGxheW91dDogRm9ybSBvbiByaWdodCwgUGV0IExpc3Qgb24gbGVmdCAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIEtlZXBzIGZvcm0gYW5kIGxpc3QgY2xvc2UgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAzMHB4OyAvKiBBZGp1c3RzIHNwYWNlIGJldHdlZW4gbGlzdCBhbmQgZm9ybSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7IC8qIEVuc3VyZXMgZW5vdWdoIHNwYWNlIGZvciAzIHBldHMgcGVyIHJvdyAqL1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuLyogUGV0IGxpc3QgY29udGFpbmVyIC0gZW5zdXJlcyBwZXRzIGFsaWduIHByb3Blcmx5ICovXHJcbi5wZXQtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxMHB4OyAvKiBSZWR1Y2UgZ2FwIHRvIGZpdCBtb3JlIGl0ZW1zICovXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICBcclxuICAvKiBFYWNoIHBldCBjYXJkICovXHJcbiAgLyogRWFjaCBwZXQgY2FyZCAqL1xyXG4ucGV0LWNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMjUlIC0gMTBweCk7IC8qIFJlZHVjZXMgd2lkdGggdG8gZml0IDQgcGVyIHJvdyAqL1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDsgLyogUHJldmVudHMgdG9vLXNtYWxsIGNhcmRzICovXHJcbiAgICBtYXgtd2lkdGg6IDE4MHB4OyAvKiBQcmV2ZW50cyBvdmVyc2l6ZWQgY2FyZHMgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuLyogUGV0IGltYWdlcyBpbnNpZGUgY2FyZHMgKi9cclxuLnBldC1jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4OyAvKiBSZWR1Y2UgaW1hZ2Ugc2l6ZSAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gLyogUGV0IEZvcm0gLSBSZWR1Y2UgYm9yZGVyIHRoaWNrbmVzcyBhbmQgY29sb3IgKi9cclxuLnBldC1mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHRlciBhbmQgdGhpbm5lciBib3JkZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogU2xpZ2h0bHkgcm91bmRlZCBjb3JuZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvcm0gaW5wdXRzICovXHJcbiAgLnBldC1mb3JtIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7IC8qIFN1YnRsZSBib3JkZXIgZm9yIGlucHV0cyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgXHJcbiAgLyogQnV0dG9ucyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xyXG4gIC5wZXQtY2FyZCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pet',
                templateUrl: './pet.component.html',
                styleUrls: ['./pet.component.css']
            }]
    }], function () { return [{ type: _services_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"] }]; }, null); })();


/***/ }),

/***/ "jUZj":
/*!*****************************************!*\
  !*** ./src/app/services/pet.service.ts ***!
  \*****************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PetService {
    constructor() {
        this.pets = [
            { id: 1, name: 'Buddy!!', breed: 'Golden Retriever', age: 5, weight: 30, photoUrl: '' },
            { id: 2, name: 'Luna!!', breed: 'Labrador', age: 3, weight: 25, photoUrl: '' }
        ];
        this.nextNewIndex = 3;
    }
    getAll() {
        return [...this.pets]; //retrun a copy to prevent direct modification
    }
    getById(id) {
        const pet = this.pets.find(p => p.id === id);
        return pet;
    }
    add(pet) {
        const newPet = Object.assign({}, pet); //save a copy to prevent direct modification
        newPet.id = this.nextNewIndex++;
        this.pets.push(newPet);
        return Object.assign({}, newPet); //retrun a copy to prevent direct modification
    }
    update(pet) {
        const index = this.pets.findIndex(p => p.id === pet.id);
        if (index !== -1) {
            this.pets[index] = Object.assign({}, pet); //save a copy to prevent direct modification
            return true;
        }
        else {
            return false;
        }
    }
    delete(id) {
        const index = this.pets.findIndex(p => p.id === id);
        if (index !== -1) {
            this.pets.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
}
PetService.ɵfac = function PetService_Factory(t) { return new (t || PetService)(); };
PetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PetService, factory: PetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map