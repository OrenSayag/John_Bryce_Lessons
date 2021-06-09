import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { SerService } from 'src/app/services/ser.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(public _ser:SerService) {


   }

   public d:Date = new Date()

   ik

  ngOnInit(): void {
    console.log(this._ser.greet())
  }

}
