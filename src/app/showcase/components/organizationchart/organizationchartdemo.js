"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrganizationChartDemo = (function () {
    function OrganizationChartDemo() {
    }
    OrganizationChartDemo.prototype.ngOnInit = function () {
        this.data1 = [{
                label: 'CEO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: { name: 'Walter White', 'avatar': 'walter.jpg' },
                children: [
                    {
                        label: 'CFO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                        children: [{
                                label: 'Tax',
                                styleClass: 'department-cfo'
                            },
                            {
                                label: 'Legal',
                                styleClass: 'department-cfo'
                            }],
                    },
                    {
                        label: 'COO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                label: 'Operations',
                                styleClass: 'department-coo'
                            }]
                    },
                    {
                        label: 'CTO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                        children: [{
                                label: 'Development',
                                styleClass: 'department-cto',
                                expanded: true,
                                children: [{
                                        label: 'Analysis',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Front End',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Back End',
                                        styleClass: 'department-cto'
                                    }]
                            },
                            {
                                label: 'QA',
                                styleClass: 'department-cto'
                            },
                            {
                                label: 'R&D',
                                styleClass: 'department-cto'
                            }]
                    }
                ]
            }];
        this.data2 = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    OrganizationChartDemo.prototype.onNodeSelect = function (event) {
        this.messages = [{ severity: 'success', summary: 'Node Selected', detail: event.node.label }];
    };
    return OrganizationChartDemo;
}());
OrganizationChartDemo = __decorate([
    core_1.Component({
        templateUrl: './organizationchartdemo.html',
        styles: ["\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {\n            padding: 0;\n            border: 0 none;\n        }\n        \n        .node-header,.node-content {\n            padding: .5em .7em;\n        }\n        \n        .node-header {\n            background-color: #495ebb;\n            color: #ffffff;\n        }\n        \n        .node-content {\n            text-align: center;\n            border: 1px solid #495ebb;\n        }\n        \n        .node-content img {\n            border-radius: 50%;\n        }\n        \n        .department-cfo {\n            background-color: #7247bc;\n            color: #ffffff;\n        }\n        \n        .department-coo {\n            background-color: #a534b6;\n            color: #ffffff;\n        }\n        \n        .department-cto {\n            background-color: #e9286f;\n            color: #ffffff;\n        }\n        \n        .ui-person .ui-node-toggler {\n            color: #495ebb !important;\n        }\n        \n        .department-cto .ui-node-toggler {\n            color: #8a0a39 !important;\n        }\n    "],
        encapsulation: core_1.ViewEncapsulation.None
    })
], OrganizationChartDemo);
exports.OrganizationChartDemo = OrganizationChartDemo;
//# sourceMappingURL=organizationchartdemo.js.map