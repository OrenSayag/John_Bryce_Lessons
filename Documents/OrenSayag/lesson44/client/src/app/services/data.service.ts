import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
import MediaModel from '../models/media.model';
import RecordModel from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public _http:HttpClient,
    public _r:Router,
  ) { }

  public mediaArr : MediaModel[] = []

  public recordsArr : RecordModel[] = []

  public getMedia(){
    this._http.get("http://localhost:665/media")
    .subscribe(
      (res:MediaModel[])=>{
        this.mediaArr = res
      },  
      err=>{
        console.log(err)
      }
    )
  }
  public getRecords(id:string){
    this._http.get("http://localhost:665/records("+id)
    .subscribe(
      (res:RecordModel[])=>{
        this.recordsArr = res
      },  
      err=>{
        console.log(err)
      }
    )
  }
  public add(body:RecordModel){
    this._http.post("http://localhost:665/records", body, {
      headers: {"content-type":"application/json"}
    })
    .subscribe(
      (res)=>{
        this.getRecords("")
        this._r.navigateByUrl("/")
      },  
      err=>{
        console.log(err)
      }
    )
  }
  public edit(body:RecordModel, id:string){
    this._http.post("http://localhost:665/records/"+id, body, {
      headers: {"content-type":"application/json"}
    })
    .subscribe(
      (res)=>{
        this.getRecords("")
      },  
      err=>{
        console.log(err)
      }
    )
  }
  public delete(body:RecordModel, id:string){
    this._http.post("http://localhost:665/records/"+id, body, {
      headers: {"content-type":"application/json"}
    })
    .subscribe(
      (res)=>{
        this.getRecords("")
      },  
      err=>{
        console.log(err)
      }
    )
  }


}
