/// <reference path="../../../../typings/tsd.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProgressGraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import * as d3 from 'd3/d3'; why? Because d3 is global now!!!
            ProgressGraphComponent = (function () {
                function ProgressGraphComponent(elementRef) {
                    this.elementRef = elementRef;
                    //@Input() width:string = '200';
                    //@Input() height:string = '400';
                    this.margin = { top: 30, right: 20, bottom: 30, left: 50 };
                    this.width = 430 - this.margin.left - this.margin.right;
                    this.height = 140 - this.margin.top - this.margin.bottom;
                    var el = elementRef.nativeElement;
                    var graph = d3.select(el);
                    /*
                            this.divs = graph
                                        .append('div')
                                        .attr({
                                            'class':'chart'
                                        })
                                        .style({
                                            'width':this.width+'px',
                                            'height':this.height+'px'
                                        })
                                        .selectAll('div');*/
                    this.svg = graph
                        .append("svg")
                        .attr("width", this.width + this.margin.left + this.margin.right)
                        .attr("height", this.height + this.margin.top + this.margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
                    this.x = d3.time.scale().range([0, this.width]);
                    this.y = d3.scale.linear().range([this.height, 0]);
                    this.parseDate = d3.time.format("%d-%b-%y").parse;
                    this.xAxis = d3.svg.axis().scale(this.x)
                        .orient("bottom").ticks(5);
                    this.yAxis = d3.svg.axis().scale(this.y)
                        .orient("left").ticks(5);
                    this.valueline = d3.svg.line()
                        .x(function (d) { return this.x(d.date); })
                        .y(function (d) { return this.y(d.close); });
                }
                ProgressGraphComponent.prototype.plot = function (data) {
                    data.forEach(function (d) {
                        d.date = d3.time.format("%d-%b-%y").parse(d.date);
                        d.close = +d.close;
                    });
                    this.x.domain(d3.extent(this.data, function (d) { return d.date; }));
                    this.y.domain([0, d3.max(this.data, function (d) { return d.close; })]);
                    this.svg.append("path")
                        .attr("class", "line")
                        .attr("d", this.valueline(this.data));
                    this.svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + this.height + ")")
                        .call(this.xAxis);
                    this.svg.append("g")
                        .attr("class", "y axis")
                        .call(this.yAxis);
                };
                /*render(newValue){
                    if(!newValue) return;
            
                    this.divs.data(newValue).enter().append('div')
                        .transition().ease('elastic')
                        .style('width',d=>d+'%')
                        .text(d=>d+'%');
                }*/
                ProgressGraphComponent.prototype.ngOnChanges = function () {
                    //this.render(this.data);
                    this.plot(this.data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ProgressGraphComponent.prototype, "data");
                ProgressGraphComponent = __decorate([
                    core_1.Component({
                        selector: 'progress-graph',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ProgressGraphComponent);
                return ProgressGraphComponent;
            })();
            exports_1("ProgressGraphComponent", ProgressGraphComponent);
        }
    }
});
//# sourceMappingURL=progress-graph.component.js.map