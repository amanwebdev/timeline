/// <reference path="../../../typings/tsd.d.ts" />
import { Task }    from './task';
import { CheckList }    from './checkList';
import { Item }    from './item';
export class Ongoing {
  public name:string;
  public checkListProgress:number;
	public timeProgress:number;
  public hasCheckList:boolean;
  public checkList:CheckList;
  constructor(
    private task:Task
  ) {
    this.name=task.name;
    this.checkListProgress=25;
    this.timeProgress=50;
    this.hasCheckList=false;
    this.checkList = new CheckList(this.task.id,"first checklist",[new Item(1,"first item",true)]);
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