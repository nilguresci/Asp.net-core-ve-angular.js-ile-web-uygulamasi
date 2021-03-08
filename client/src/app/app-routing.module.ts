import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {LoginComponent} from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'customers',component:CustomerComponent,canActivate:[AuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
