/// <reference path="../../../typings/tsd.d.ts" />

import {Component,OnChanges,Attribute,Input,ElementRef} from 'angular2/core';
//import * as d3 from 'd3/d3';

@Component({
  selector: 'progress-graph',
  template: ''
})
export class ProgressGraphComponent implements OnChanges{
	@Input() data: Array<number>;
	// divs: any;
	svg:any;
	//@Input() width:string = '200';
	//@Input() height:string = '400';

	margin:any = {top: 30, right: 20, bottom: 30, left: 50};
    width:any = 430 - this.margin.left - this.margin.right;
    height:any = 140 - this.margin.top - this.margin.bottom;

    x:any;y:any;xAxis:any;yAxis:any;valueline:any;
    parseDate:any;

	constructor(private elementRef:ElementRef){

		var el:any = elementRef.nativeElement;
		var graph:any = d3.select(el);
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
        		.attr("transform","translate(" + this.margin.left + "," + this.margin.top + ")");

        this.x = d3.time.scale().range([0, this.width]);
		this.y = d3.scale.linear().range([this.height, 0]);
		this.parseDate = d3.time.format("%d-%b-%y").parse;
		this.xAxis = d3.svg.axis().scale(this.x)
   					 .orient("bottom").ticks(5);

   		this.yAxis = d3.svg.axis().scale(this.y)
    					.orient("left").ticks(5);

		this.valueline = d3.svg.line()
		    .x(function(d:any) { return this.x(d.date); })
		    .y(function(d:any) { return this.y(d.close); });

	}
	plot(data){
		data.forEach(function(d) {
	        d.date = d3.time.format("%d-%b-%y").parse(d.date);
	        d.close = +d.close;
    	});
    	this.x.domain(d3.extent(this.data, function(d:any) { return d.date; }));
    	this.y.domain([0, d3.max(this.data, function(d:any) { return d.close; })]);

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

	}
	/*render(newValue){
		if(!newValue) return;

		this.divs.data(newValue).enter().append('div')
			.transition().ease('elastic')
			.style('width',d=>d+'%')
			.text(d=>d+'%');
	}*/
	ngOnChanges(){
		//this.render(this.data);
		this.plot(this.data);
	}
}