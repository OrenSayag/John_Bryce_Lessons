import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public myForm:FormGroup



  constructor(
    public _fb:FormBuilder, 
    public _data:DataService) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      username:["", Validators.required],
      password:["", Validators.required],
      fname:["", Validators.required],
      lname:["", Validators.required],
    })

  }

}