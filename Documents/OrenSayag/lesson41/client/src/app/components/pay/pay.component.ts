import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


  public myForm:FormGroup

  constructor(
    public _fb:FormBuilder, 
    public _data:DataService) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      cardNum:["", Validators.required],
      cardExp:["", [Validators.required, Validators.pattern(/^[0-9]{2}[[\/]{1}[0-9]{2}$/)]],
      cvv:["", [Validators.required, Validators.min(100), Validators.max(999), validateExp]]
    })

  }





}

function validateExp(control:AbstractControl){
    console.log(control.value.substr(0,2))
    if(control.value.substr(0,2) > 12){
      return {invalidMonth:true}
    }
    return null
}