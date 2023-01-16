import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Database } from 'firebase/database';
import { AuthService } from '../shared/authservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthService,private route:Router) { }
  Email: string = "";
  Password: string = "";
  ngOnInit(): void {
    if(this.authService.isLoggedInn){
      this.route.navigate(['dashboard'])
    }
  }

  
  login=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.minLength(6),Validators.required])
  })



  get email(){
    // this.Email=""
    return this.login.get('email');
    
  }
  get pass(){
    return this.login.get('pass');
    
    

   }


  onSub(){
  // return (this.login.value);
  console.log(this.login.value)
  }

  
  sign(email:any,password:any){
    this.authService.SignIn(email,password)
    this.Email=""
    this.Password=""
    
  }


}
