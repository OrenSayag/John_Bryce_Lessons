import { Component, OnInit } from '@angular/core';
import { SirTodosService } from 'src/app/services/sir-todos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public _sirTodos:SirTodosService) { }

  ngOnInit(): void {
  }

}
