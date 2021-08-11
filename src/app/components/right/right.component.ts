import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  public title:string = "Shopping list"
  public imgSrc:string = "https://media.wired.com/photos/5c9040ee4950d24718d6da99/master/w_2560%2Cc_limit/shoppingcart-1066110386.jpg"
  public imgWidth:number = 300
  public userType:string = 'admin'

  public dec():void{
    this.imgWidth -= 10
  }
  public inc():void{
    this.imgWidth += 10
  }
  public reset():void{
    this.imgWidth = 300
  }

  public range(e:Event):void{
    console.log(e)
    this.imgWidth = (e.target as HTMLInputElement).valueAsNumber
  }

  ngOnInit(): void {
  }

}
