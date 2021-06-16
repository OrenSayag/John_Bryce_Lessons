import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';


const routes: Routes = [
  {path: '',component: PostsListComponent, pathMatch: 'full'},
  {path: 'add',component: AddComponent},
  {path: 'post/:id',component: SinglePostComponent},
  {path: 'posts',redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
