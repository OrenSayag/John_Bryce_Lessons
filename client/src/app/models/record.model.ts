import MediaModel from "./media.model"

export default interface RecordModel{
  _id:string,
  name:string,
  last_update:string,
  pages?:number,
  time?:string,
  se?:number,
  ep?:number,
  medium_id?:{
    MediaModel: MediaModel
  },
}