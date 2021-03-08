import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private jwtHelper:JwtHelperService) { }

  canActivate(){
    const token= localStorage.getItem("jwt");

    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
