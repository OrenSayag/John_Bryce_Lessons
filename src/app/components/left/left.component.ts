import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  public links:string[] = ['Home', 'Shop', 'About', 'Contact Us']

  constructor() { }

  public handleNewGrade(e:string):void{
    console.log(e)
  }

  // pubic linkto:string = ''

  ngOnInit(): void {
  }

}
