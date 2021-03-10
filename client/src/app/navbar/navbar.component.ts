import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private jwtHelper:JwtHelperService){}

  ngOnInit(): void {
    
  }

  isUserAuthenticated(){

    const token: string=JSON.parse(localStorage.getItem("jwt") || '{}');

    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }else {
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
  }

}
