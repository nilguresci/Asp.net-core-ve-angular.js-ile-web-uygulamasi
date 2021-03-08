import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private router:Router, private jwtHelper:JwtHelperService){}
  kontrol:boolean=false;
  isUserAuthenticated(){

    const token: string=JSON.parse(localStorage.getItem("jwt") || '{}');

    if(token && !this.jwtHelper.isTokenExpired(token)){
      this.kontrol=true;
      return true;
    }else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
  }
}
