import { Injectable } from '@angular/core';
import TasksModel from '../models/tasks.model'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public tasksArr:TasksModel[] = []

  public add(txt:string) :void {
    this.tasksArr.push({
      txt,
      id: Date.now(),
      completed: false
    })
  }

  public del(id:number) :void {
    this.tasksArr = this.tasksArr.filter(task=>task.id!==id)
  }

  public edit(id:number) :void {
    const currTask = this.tasksArr.find(task=>task.id===id)
    currTask.completed = !currTask?.completed

  }
}
