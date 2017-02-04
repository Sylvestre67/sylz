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
import { socketService } from '../socket.service';
export var TwitComponent = (function () {
    function TwitComponent(socketService) {
        this.socketService = socketService;
        this.tweets = [];
        this.media_url = '';
    }
    TwitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.socketService.getTweets()
            .filter(function (data) { return data['extended_entities'] !== undefined; })
            .subscribe(function (tweet) {
            (tweet['entities']['media'][0].media_url_https !== _this.media_url)
                ? _this.media_url = tweet['entities']['media'][0].media_url_https
                : false;
        });
    };
    TwitComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    TwitComponent = __decorate([
        Component({
            selector: 'app-twit',
            templateUrl: './twit.component.html',
            styleUrls: ['./twit.component.css'],
            providers: [socketService]
        }), 
        __metadata('design:paramtypes', [socketService])
    ], TwitComponent);
    return TwitComponent;
}());
//# sourceMappingURL=/Users/gugs/sites/sylz/app/src/app/twit/twit.component.js.map