"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var colorpickerdemo_1 = require("./colorpickerdemo");
var ColorPickerDemoRoutingModule = (function () {
    function ColorPickerDemoRoutingModule() {
    }
    return ColorPickerDemoRoutingModule;
}());
ColorPickerDemoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: '', component: colorpickerdemo_1.ColorPickerDemo }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ColorPickerDemoRoutingModule);
exports.ColorPickerDemoRoutingModule = ColorPickerDemoRoutingModule;
//# sourceMappingURL=colorpickerdemo-routing.module.js.map