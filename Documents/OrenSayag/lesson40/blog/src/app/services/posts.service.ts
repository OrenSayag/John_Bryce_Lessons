import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import PostModel from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public postsArr: PostModel[] = [
    new PostModel("the 10 blahest thing", "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    "Me"),
    new PostModel("the 10 guitars thing", "not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah not blah",
    "Me"),
    new PostModel("The 16 best cats ever",
    "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow", "Me")
  ]


  constructor() { }

  public add(title:string, body:string, author:string) :void {
    this.postsArr.push(new PostModel(title, body, author))
  }

  public getSinglePost(id:string):PostModel{
    return this.postsArr.find(post=>post.id===id)
  }

}
