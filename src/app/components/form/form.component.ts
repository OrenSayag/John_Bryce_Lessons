import { Component, OnInit } from '@angular/core';
import { SirTodosService } from 'src/app/services/sir-todos.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public _task:TasksService) { }

  ngOnInit(): void {
  }

}
