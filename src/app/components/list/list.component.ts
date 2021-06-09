import { Component, OnInit } from '@angular/core';
import { SirTodosService } from 'src/app/services/sir-todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _sirTodos:SirTodosService) { }

  ngOnInit(): void {
  }

}
