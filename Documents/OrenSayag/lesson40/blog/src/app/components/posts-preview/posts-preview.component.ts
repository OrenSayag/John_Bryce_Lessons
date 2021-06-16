import { Component, Input, OnInit } from '@angular/core';
import PostModel from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-preview',
  templateUrl: './posts-preview.component.html',
  styleUrls: ['./posts-preview.component.css']
})
export class PostsPreviewComponent implements OnInit {

  @Input()
  public post:PostModel

  constructor(
    // public _post:PostsService
  ) { }

  ngOnInit(): void {
    console.log(this.post)
  }

}
