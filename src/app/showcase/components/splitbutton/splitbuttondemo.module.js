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
var splitbuttondemo_1 = require("./splitbuttondemo");
var splitbuttondemo_routing_module_1 = require("./splitbuttondemo-routing.module");
var splitbutton_1 = require("../../../components/splitbutton/splitbutton");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var SplitButtonDemoModule = (function () {
    function SplitButtonDemoModule() {
    }
    return SplitButtonDemoModule;
}());
SplitButtonDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            splitbuttondemo_routing_module_1.SplitButtonDemoRoutingModule,
            splitbutton_1.SplitButtonModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            splitbuttondemo_1.SplitButtonDemo
        ]
    })
], SplitButtonDemoModule);
exports.SplitButtonDemoModule = SplitButtonDemoModule;
//# sourceMappingURL=splitbuttondemo.module.js.map