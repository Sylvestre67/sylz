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
export var RedishComponent = (function () {
    function RedishComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.element = d3.select('.redish')._groups[0][0];
        this.margins = { 'top': 0, 'bottom': -6, 'left': 0, 'right': 0 };
    }
    RedishComponent.prototype.drawSVG = function () {
        this.full_width = this.element.parentElement.parentElement.clientWidth;
        this.full_height = this.element.parentElement.parentElement.clientHeight;
        this.width = this.full_width - this.margins['top'] - this.margins['bottom'];
        this.height = this.full_height - this.margins['left'] - this.margins['right'];
        var radius = this.width * 2;
        var x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, this.width]);
        var y = d3.scaleLinear()
            .domain([0, 100])
            .range([0, this.height]);
        d3.select('.redish').select('svg').remove();
        var svg = d3.select('.redish')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('class', '.redish-svg');
        svg.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', 'white');
        function generateCircles(initial) {
            (initial)
                ? (addCircle(radius, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)))
                : false;
            setTimeout(function () {
                var x = Math.floor(Math.random() * 100);
                var y = Math.floor(Math.random() * 100);
                addCircle(radius, x, y);
                generateCircles(false);
            }, 1000);
        }
        generateCircles(true);
        // Circle animation
        function addCircle(radius, pos_x, pos_y) {
            svg.append('circle')
                .attr('transform', 'translate(' + x(pos_x) + ',' + y(pos_y) + ')')
                .attr('r', 10)
                .attr('fill', '#ff0000')
                .transition().duration(500)
                .attr('r', 0)
                .transition().delay(250).duration(3000)
                .attr('r', radius).transition().delay(5000).remove();
            svg.append('circle')
                .attr('transform', 'translate(' + x(pos_x) + ',' + y(pos_y) + ')')
                .attr('r', 0)
                .attr('fill', 'white')
                .transition().delay(1000).duration(3000)
                .attr('r', radius)
                .transition().delay(5000).remove();
        }
    };
    RedishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.redrawOnResize = this.renderer.listenGlobal('window', 'resize', function (event) {
            _this.drawSVG();
        });
        this.element = d3.select('.redish')._groups[0][0];
        this.drawSVG();
    };
    RedishComponent.prototype.ngOnDestroy = function () {
        this.redrawOnResize();
    };
    RedishComponent = __decorate([
        Component({
            selector: 'app-redish',
            templateUrl: './redish.component.html',
            styleUrls: ['./redish.component.css']
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], RedishComponent);
    return RedishComponent;
}());
//# sourceMappingURL=/Users/gugs/sites/sylz/app/src/app/redish/redish.component.js.map