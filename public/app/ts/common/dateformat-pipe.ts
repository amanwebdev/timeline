/// <reference path="../../../../typings/tsd.d.ts" />

import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
	name : 'dateFormat'
})
export class DateFormatPipe implements PipeTransform{
	transform(date, args){
		return new Date(date);
	}
}