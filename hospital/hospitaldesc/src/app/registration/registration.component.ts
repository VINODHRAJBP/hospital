import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValidatehosiptalService } from '../validatehosiptal.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../shared/authservice.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private validhosiptal:ValidatehosiptalService, private http:HttpClient, public authService:AuthService ) { }

  ngOnInit(): void {
    
  }
  register=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.minLength(3),Validators.required])
  })

  
  
get email(){
  return this.register.get('email')
}
 get pass(){
  return this.register.get('pass')
 }


onSub(){
console.log(this.register.value)


}
}



  


  