import { Component, OnInit } from '@angular/core';
import { SirTodosService } from 'src/app/services/sir-todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public _sirTodos:SirTodosService) { }

  ngOnInit(): void {
  }

}
