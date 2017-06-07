"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var organizationchartdemo_1 = require("./organizationchartdemo");
var organizationchartdemo_routing_module_1 = require("./organizationchartdemo-routing.module");
var organizationchart_1 = require("../../../components/organizationchart/organizationchart");
var growl_1 = require("../../../components/growl/growl");
var panel_1 = require("../../../components/panel/panel");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var OrganizationChartDemoModule = (function () {
    function OrganizationChartDemoModule() {
    }
    return OrganizationChartDemoModule;
}());
OrganizationChartDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            organizationchartdemo_routing_module_1.OrganizationChartDemoRoutingModule,
            organizationchart_1.OrganizationChartModule,
            growl_1.GrowlModule,
            panel_1.PanelModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            organizationchartdemo_1.OrganizationChartDemo
        ]
    })
], OrganizationChartDemoModule);
exports.OrganizationChartDemoModule = OrganizationChartDemoModule;
//# sourceMappingURL=organizationchartdemo.module.js.map