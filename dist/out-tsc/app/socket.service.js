/// <reference path="../typings.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";
import { environment } from '../environments/environment';
export var socketService = (function () {
    function socketService() {
        this.url = environment.api_host;
    }
    socketService.prototype.getTweets = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on('tweet', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    socketService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], socketService);
    return socketService;
}());
//# sourceMappingURL=/Users/gugs/sites/sylz/d3_ng2/src/app/socket.service.js.map