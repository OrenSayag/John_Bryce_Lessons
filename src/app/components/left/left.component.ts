import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  public links:string[] = ['Home', 'Shop', 'About', 'Contact Us']

  constructor() { }


  ngOnInit(): void {
  }

}
