import {v4} from 'uuid'

export default class PostModel {
  public id:string
  public date:Date
  
  constructor(
    public title:  string,
    public body:   string,
    public author: string,

  ){
    this.id=v4()
    this.date=new Date()
  }
}