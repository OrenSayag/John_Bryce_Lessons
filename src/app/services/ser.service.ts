import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor() { }



  public user = {
    fn: 'Jo',
    ln: 'Johniel',
    age: 56,
  }

  public greet():string{
    return `sr. ${this.user.fn} ${this.user.ln} is around ${this.user.age} years old.`
  }
  public changeFname():void{
    this.user.fn = ["Jo", 'Johanna', 'Jenny', 'John'][Math.floor(Math.random()*4)]
  }
  public changeLname():void{
    this.user.ln = ["Jonnihau", 'Johnniel', 'Johnson', 'Jonas'][Math.floor(Math.random()*4)]
  }
  


}
