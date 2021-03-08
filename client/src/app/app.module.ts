import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DotnetcoreService} from './services/dotnetcore.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    LoginComponent,
    CustomerDetailsComponent,
    FooterComponent,
    CustomerUpdateComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [DotnetcoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
