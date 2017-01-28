var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var TwitComponent = (function () {
    function TwitComponent() {
    }
    TwitComponent.prototype.ngOnInit = function () {
        debugger;
        socket.on('tweet', function (msg) {
            console.log('tweet');
            console.info(msg);
        });
        socket.on('limit', function (msg) {
            console.log('limit');
            console.info(msg);
        });
    };
    TwitComponent = __decorate([
        Component({
            selector: 'app-twit',
            templateUrl: './twit.component.html',
            styleUrls: ['./twit.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TwitComponent);
    return TwitComponent;
}());
//# sourceMappingURL=/Users/gugs/sites/sylz/d3_ng2/src/app/twit/twit.component.js.map