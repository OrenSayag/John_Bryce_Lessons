import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  @Input() 
  public linkto:string = ''

  @Output()
  public newGrade: EventEmitter<string> = new EventEmitter()

  
  ngOnInit(): void {
    
    this.newGrade.emit("hey from " + this.linkto)
  }

}
