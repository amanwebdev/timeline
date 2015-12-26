/// <reference path="../../../typings/tsd.d.ts" />
import { Task }    from './task';

export class Ongoing {
	private timeProgress:number;
  constructor(
    private task:Task
  ) { 
  	 this.setProgress();
  }
  private setProgress(){
  	// var currTime = new Date();
  	// var startTime = new Date(this.task.startTime);
  	// var finishTime = new Date(this.task.finishTime); 
   // 	var usedTime = Math.floor((currTime-startTime) / 1000 / 60 / 60);
   // 	var estimated = Math.floor((finishTime-startTime) / 1000 / 60 / 60);
   // 	this.timeProgress = usedTime/estimated;
  }
}