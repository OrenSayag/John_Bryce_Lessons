import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
=======
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
>>>>>>> 6b8c2c55ba32db642eb5fccb6b9b283b62657eb7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
=======
    TopComponent,
    LeftComponent,
    RightComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 6b8c2c55ba32db642eb5fccb6b9b283b62657eb7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
