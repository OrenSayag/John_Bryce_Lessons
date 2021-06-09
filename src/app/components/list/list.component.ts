import { Component, OnInit } from '@angular/core';
import { SirTodosService } from 'src/app/services/sir-todos.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _task:TasksService) { }

  ngOnInit(): void {
  }

}
