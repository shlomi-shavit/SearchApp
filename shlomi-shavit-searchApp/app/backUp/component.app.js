System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Tapets, AppComponent, TAPETS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*-------- Tapets class --------*/
            Tapets = class Tapets {
            };
            exports_1("Tapets", Tapets);
            /*-------- /Tapets class --------*/
            AppComponent = class AppComponent {
                constructor() {
                    this.name = 'Shlomi Shavit';
                    this.tapets = [
                        {
                            tapetName: 'New-york skyline',
                            category: 'Cities'
                        }, {
                            tapetName: 'deep forest',
                            category: 'Nature'
                        }, {
                            tapetName: 'Bacteria',
                            category: 'Micro'
                        }
                    ];
                }
                onClick(myItem, myElement) {
                    this.name = myItem.tapetName;
                    myElement.style.backgroundColor = "#FECE4E";
                    console.log();
                    /*console.log(e.target.innerHTML);
                    this.name = e.target.innerHTML;*/
                }
                addTapet(value) {
                    if (value != '') {
                        this.tapets.push({
                            tapetName: value,
                            category: 'No category'
                        });
                    }
                }
                keyUpEvent(keyArr) {
                    console.log(keyArr.key);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './partials/app.html',
                    styleUrls: ["../css/app.css"]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            /*-------- /AppComponent class --------*/
            /*-------- Tapets categories object --------*/
            TAPETS = [
                {
                    "name": "Cities",
                    "shortname": "city-main-img",
                    "description": "some city tapets description"
                }, {
                    "name": "Nature",
                    "shortname": "nature-main-img",
                    "description": "some nature tapets description"
                }, {
                    "name": "Micro",
                    "shortname": "micro-main-img",
                    "description": "some micro tapets description"
                }, {
                    "name": "Space",
                    "shortname": "space-main-img",
                    "description": "some space tapets description"
                }, {
                    "name": "3D Tapets",
                    "shortname": "3dTapets-main-img",
                    "description": "some 3d tapets description"
                }, {
                    "name": "Art Tapets",
                    "shortname": "art-tapet-main-img",
                    "description": "some art tapets description"
                }, {
                    "name": "Simple Tapets",
                    "shortname": "simple-tapet-main-img",
                    "description": "some simple tapets description"
                }
            ];
        }
    }
});
//# sourceMappingURL=component.app.js.map