import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {LoginComponent} from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  {path:'customers',component:CustomerComponent,canActivate:[AuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'customer/:Id',component:CustomerDetailsComponent,canActivate:[AuthGuardService]},
  {path:'customer/update/:Id',component:CustomerUpdateComponent,canActivate:[AuthGuardService]},
  {path:'customerAdd',component:CreateCustomerComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
