import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PayComponent } from './components/pay/pay.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"home", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"pay", component:PayComponent},
  {path:"", redirectTo: "login", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
