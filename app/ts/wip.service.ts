import {Injectable} from 'angular2/core';
import {Task} from './task';

@Injectable()
export class WipService {
  getWipList() { return wipListPromise; }

  getWip(id: number | string) {
    return wipListPromise
      .then(wipList => wipList.filter(task => task.id === +id)[0]);
  }
}

var WIP_LIST = [
	new Task(1,'STARTED','Task 1', new Date(),new Date(),"Shitty task 1!"),
	new Task(2,'STARTED','Task 2', new Date(),new Date(),"Shitty task 2!"),
	new Task(3,'STARTED','Task 3', new Date(),new Date(),"Shitty task 3!"),
	new Task(4,'STARTED','Task 4', new Date(),new Date(),"Shitty task 4!"),
	new Task(5,'STARTED','Task 5', new Date(),new Date(),"Shitty task 5!"),
	new Task(6,'STARTED','Task 6', new Date(),new Date(),"Shitty task 6!"),
];

var wipListPromise = Promise.resolve(WIP_LIST);