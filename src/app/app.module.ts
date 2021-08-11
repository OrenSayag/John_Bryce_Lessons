import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsPreviewComponent } from './components/posts-preview/posts-preview.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AddComponent } from './components/add/add.component';
import { BodypreviewPipe } from './pipes/bodypreview.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddReactiveComponent } from './components/add-reactive/add-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsListComponent,
    PostsPreviewComponent,
    SinglePostComponent,
    AddComponent,
    BodypreviewPipe,
    AddReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
