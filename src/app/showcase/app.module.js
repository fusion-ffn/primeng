"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var carservice_1 = require("./service/carservice");
var countryservice_1 = require("./service/countryservice");
var eventservice_1 = require("./service/eventservice");
var nodeservice_1 = require("./service/nodeservice");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            carservice_1.CarService, countryservice_1.CountryService, eventservice_1.EventService, nodeservice_1.NodeService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map