import { Injectable } from '@angular/core';
import ProdModel from '../models/prod.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  


  constructor() { }

  public prodArr:ProdModel[] = []
  public cartArr:ProdModel[] = []
  



}
