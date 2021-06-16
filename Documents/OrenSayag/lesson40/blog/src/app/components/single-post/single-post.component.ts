import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PostModel from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {


  public post:PostModel

  constructor(
    public _posts:PostsService,
    public _acr:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.post = this._posts.getSinglePost(this._acr.snapshot.params.id)
  }

}
