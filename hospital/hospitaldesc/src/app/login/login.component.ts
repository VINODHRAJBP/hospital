import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Database } from 'firebase/database';
import { AuthService } from '../shared/authservice.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthService) { }
  Email: string = "";
  Password: string = "";
  ngOnInit(): void {
  }

  
  login=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.minLength(3),Validators.required])
  })



  get email(){
    // this.Email=""
    return this.login.get('email');
    
  }
  get pass(){
    return this.login.get('pass');
    
    

   }


  onSub(){
    this.Email=""
    this.Password=""
  return (this.login.value);
  }

  


}
