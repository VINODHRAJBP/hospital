import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormControlDirective} from '@angular/forms'
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-doctor',
  templateUrl: 'add-doctor.component.html',
  styleUrls: ['add-doctor.component.css']
})
export class AddDoctorComponent {

  constructor(private location:Location) { }

  doctorRegister=new FormGroup({
    name:new FormControl('',[Validators.required]),
    number:new FormControl('',[Validators.required,Validators.minLength(10)],),
    mail:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required])
  })

  get name(){
    return this.doctorRegister.get('name');
  }

  get number(){
    return this.doctorRegister.get('number');
  }

  get mail(){
    return this.doctorRegister.get('mail');
  }

  get gender(){
    return this.doctorRegister.get('gender');
  }

  get department(){
    return this.doctorRegister.get('department');
  }

    departments:string[]=['gen','card','ent','hert']

    addDoctor(){
        console.log(this.doctorRegister.value); 
    }

    goBack(){
        this.location.back()
    }
}
