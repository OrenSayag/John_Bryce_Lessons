import { Component, Input, OnInit } from '@angular/core';
import { SerService } from 'src/app/services/ser.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  public links:string[] = ['Home', 'Shop', 'About', 'Contact Us']

  constructor(public _ser:SerService) { }

  public handleNewGrade(e:string):void{
    console.log(e)
  }

  public changeAge():void{
    this._ser.user.age = 18 + Math.floor(Math.random()*120)
  }

  // pubic linkto:string = ''

  ngOnInit(): void {
  }

}
