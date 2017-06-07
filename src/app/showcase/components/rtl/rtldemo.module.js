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
var forms_1 = require("@angular/forms");
var rtldemo_1 = require("./rtldemo");
var rtldemo_routing_module_1 = require("./rtldemo-routing.module");
var dialog_1 = require("../../../components/dialog/dialog");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var button_1 = require("../../../components/button/button");
var accordion_1 = require("../../../components/accordion/accordion");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var RTLDemoModule = (function () {
    function RTLDemoModule() {
    }
    return RTLDemoModule;
}());
RTLDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            rtldemo_routing_module_1.RTLDemoRoutingModule,
            forms_1.FormsModule,
            dialog_1.DialogModule,
            button_1.ButtonModule,
            inputtext_1.InputTextModule,
            accordion_1.AccordionModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            rtldemo_1.RTLDemo
        ]
    })
], RTLDemoModule);
exports.RTLDemoModule = RTLDemoModule;
//# sourceMappingURL=rtldemo.module.js.map