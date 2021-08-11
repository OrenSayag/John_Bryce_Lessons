import { Component, Input, OnInit } from '@angular/core';
import ProdModel from 'src/app/models/prod.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {


@Input()
public cart:ProdModel;


  constructor(
    public _data:DataService
  ) { }

  ngOnInit(): void {
  }

}
