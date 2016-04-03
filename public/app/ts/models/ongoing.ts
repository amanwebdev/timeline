/// <reference path="../../../../typings/tsd.d.ts" />

import { Task }          from './task';
import { CheckList }     from './checkList';
import { Item }          from './item';

export class Ongoing {
  public taskId:number;
  public name:string;
  public checkListProgress:number;
	public timeProgress:number;
  public checkList:CheckList;
  public hideCheckList:boolean = true;
  public taskClass: string = "list-group-item";
  public checkListClass: string = "list-group-item hidden";
  public startTime: string = "5:00 PM";
  public comments: string = "Trivial task of fixing nothing but bunch of errors";
  public labels: string = "Project 1, Bug, Internal";
  public status: string = "To Do";
  constructor(
    private task:Task
  ) {
    this.taskId=task.id;
    this.name=task.name;
    this.checkListProgress=25;
    this.timeProgress=50;
    this.checkList = task.checkList;
  }
  private setCheckList(){
   // this._service.getCheckList(1)
   //           .subscribe(checkList => this.checkList = checkList);
  }
  private setProgress(){
    
  }
}