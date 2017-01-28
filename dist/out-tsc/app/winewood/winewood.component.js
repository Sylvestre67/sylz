var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer, ElementRef } from '@angular/core';
export var WinewoodComponent = (function () {
    function WinewoodComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dataset = [];
        this.margins = { 'top': 0, 'bottom': 0, 'left': 0, 'right': 0 };
    }
    WinewoodComponent.prototype.drawWinewood = function () {
        this.full_width = this.element.parentElement.parentElement.clientWidth;
        this.full_height = this.element.parentElement.parentElement.clientHeight;
        this.width = this.full_width - this.margins['top'] - this.margins['bottom'];
        this.height = this.full_height - this.margins['left'] - this.margins['right'];
        var h = 5, w = 10;
        var switched = true, blinking = false;
        for (var i = 1; i < 100; i++) {
            for (var j = 1; j < 125; j++) {
                this.dataset.push({ 'x': i, 'y': j, });
            }
        }
        var x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 2500]);
        var y = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 2500]);
        d3.select('.winewood').select('svg').remove();
        var svg = d3.select('.winewood').append('svg')
            .attr('height', 2500)
            .attr('width', 2500);
        svg.append('rect')
            .attr('width', 2500)
            .attr('height', 2500)
            .attr('fill', '#1B223C');
        var domino = svg.selectAll('.domino')
            .data(this.dataset).enter()
            .append('g')
            .attr('class', 'domino')
            .attr('transform', function (d) { return 'translate(' + x(d.x) + ',' + y(d.y) + ')'; })
            .attr('opacity', 1);
        domino.append('path')
            .attr('d', 'M0 0 L0 ' + h + ' L' + w + ' -' + h + ' L' + w + '-' + 2 * h + ' Z')
            .attr('id', function (d, i) { return i; })
            .attr('fill', '#FD6069');
        //.attr('opacity',1);
        //.attr('class','blink_me');
        //.call(function(d,i) { (!blinking) ? (blink(switched), blinking = true) : false; });
        function blink(switched) {
            (switched)
                ? d3.selectAll('.domino path').transition().delay(function (d, i) { return i * .1; }).duration(.5).attr('opacity', 1)
                : d3.selectAll('.domino path').transition().delay(function (d, i) { return i * .1; }).duration(.5).attr('opacity', 0);
            setTimeout(function () {
                switched = !switched;
                blink(switched);
            }, 1000);
        }
    };
    WinewoodComponent.prototype.ngOnInit = function () {
        this.redrawOnResize = this.renderer.listenGlobal('window', 'resize', function (event) {
            //this.drawWinewood();
        });
        this.element = d3.select('.winewood')._groups[0][0];
        this.drawWinewood();
    };
    WinewoodComponent.prototype.ngOnDestroy = function () {
    };
    WinewoodComponent = __decorate([
        Component({
            selector: 'app-winewood',
            templateUrl: 'winewood.component.html',
            styleUrls: ['winewood.component.css']
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], WinewoodComponent);
    return WinewoodComponent;
}());
//# sourceMappingURL=/Users/gugs/sites/sylz/d3_ng2/src/app/winewood/winewood.component.js.map