import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public _posts:PostsService,
              public _r:Router
    ) { }

  public post = {
    title:  "",
    body:   "",
    author: "",
  }

  public submit(){
    console.log(this.post)
    this._r.navigateByUrl('')
  }

  ngOnInit(): void {

  }

}
