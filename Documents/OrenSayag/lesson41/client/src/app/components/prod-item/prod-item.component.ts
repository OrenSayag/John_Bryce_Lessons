import { Component, Input, OnInit } from '@angular/core';
import ProdModel from 'src/app/models/prod.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {

  @Input()
  prod:ProdModel

  constructor(
    public _data:DataService
  ) { }

  ngOnInit(): void {

  }

}
