import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import CreditModel from '../models/credit.model';
import ProdModel from '../models/prod.model';
import UserModel from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  


  constructor(public _r:Router) { }

  public prodArr:ProdModel[] = []
  public cartArr:ProdModel[] = []
  public user:UserModel|{}   = {

  }

  public async getProd() {
    try {
      const res = await fetch ("http://localhost:1000/products")
      const prod = await res.json()
      console.log(prod)
      this.prodArr = prod;
    } catch (error) {
      console.log(error)
    }
  }

  public async getCart() {
    try {
      const res = await fetch ("http://localhost:1000/cart",{
        method: 'GET',
        headers:{
          "authorization": localStorage.token
        }
      })
      const cart = await res.json()
      console.log(cart)
      this.cartArr = cart;
    } catch (error) {
      console.log(error)
    }
  }
  
  public async addToCart(prodId:string){
    try {
      const res = await fetch ("http://localhost:1000/cart",{
        method: "POST",
        headers:{
          "authorization": localStorage.token,
          "content-type":"application/json"
        },
        body: JSON.stringify({
          prodId
        }),
      })
      const cart = await res.json()
      console.log(cart)
      this.cartArr = cart;
    } catch (error) {
      console.log(error)
    }
  }
  
  public async delFromCart(prodId:string){
    try {
      const res = await fetch ("http://localhost:1000/cart",{
        method: "DELETE",
        headers:{
          "authorization": localStorage.token,
          "content-type":"application/json"
        },
        body: JSON.stringify({
          prodId
        }),
      })
      const cart = await res.json()
      console.log(cart)
      this.cartArr = cart;
    } catch (error) {
      console.log(error)
    }
  }
  
  public async pay(credit:CreditModel){
    try {
      const res = await fetch ("http://localhost:1000/cart/pay",{
        method: "PUT",
        headers:{
          "authorization": localStorage.token,
          "content-type":"application/json"
        },
        body: JSON.stringify({
          credit
        }),
      })
      this.cartArr = []
    } catch (error) {
      console.log(error)
    }
  }
  
  public async login(username:string, password:string){
    try {
      const res = await fetch ("http://localhost:1000/auth/login",{
        method: "POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({
          username,
          password
        }),
      })
      const data = await res.json()





        localStorage.token = data.token
        if(res.status===200){

          this._r.navigateByUrl("/home")
        } else {
          console.log("could not login")
          console.log(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    public async register(username:string, password:string, fname:string, lname:string){
      try {
        const res = await fetch ("http://localhost:1000/auth/register",{
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            username,
            password,
            fname,
            lname
          }),
        })
        
        
        this._r.navigateByUrl("/login")
      } catch (error) {
        console.log(error)
      }
    }

    public logout(){
      this.user = {}
      localStorage.removeItem("token")
      this._r.navigateByUrl("login")
    }
    
    public getCartSum():number{
      return this.cartArr.reduce((sum,cart)=>{
        return sum+cart.price
      },0)
    }
    
    



}
