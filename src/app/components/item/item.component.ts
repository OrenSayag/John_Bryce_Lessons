import { Component, Input, OnInit } from '@angular/core';
import TaskModel from 'src/app/models/tasks.model';
import { SirTodosService } from 'src/app/services/sir-todos.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public _task:TasksService ) { }

  @Input()
  public task:TaskModel

  ngOnInit(): void {
  }

}
