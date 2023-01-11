import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValidatehosiptalService } from '../validatehosiptal.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private validhosiptal:ValidatehosiptalService, private http:HttpClient) { }
email:string=""
password:string=""
  ngOnInit(): void {
    
  }
  
  
// p(data:any){
//   this.validhosiptal.registerget(data)
// }


register(reg:any) {

  if (reg.email == "") {
    alert('please enter email')
    return

  }

  if (reg.password == "") {
    alert('please enter password')
    return
    
  }

  this.validhosiptal.register(this.email, this.password)
  this.email = '';
  this.password = '';
  console.log(reg)

}
}



  


  