import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {


  public myForm: FormGroup

  constructor(public _fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      title: ["",[Validators.maxLength(4), Validators.required]],
      body: ["",Validators.required],
      author: ["",Validators.required],
    })
  }


}
