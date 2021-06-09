import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftComponent,
    RightComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
