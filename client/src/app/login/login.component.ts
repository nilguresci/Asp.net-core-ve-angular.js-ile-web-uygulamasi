import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean=false;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  
  login(form:NgForm){
    const credentials={
      'username':form.value.username,
      'password':form.value.password
    }

    this.http.post("https://localhost:5001/api/admin/login",credentials).subscribe(response =>{
      
      const token=(<any>response).Token;
      localStorage.setItem("jwt",token);
      this.invalidLogin=false;
      this.router.navigate(['/customers']);
    }, err=>{
      this.invalidLogin=true;
      this.router.navigate(['/customers']);
    })
  }

}
