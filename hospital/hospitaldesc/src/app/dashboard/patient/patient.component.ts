import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }
  register = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
  ph: new FormControl("", [Validators.required]),
    gender: new FormControl(''),
    email: new FormControl('',[Validators.email,Validators.required]),
    address: new FormControl('',[Validators.required]),
    doctorName: new FormControl('',[Validators.required]),
    specilist: new FormControl('',[Validators.required]),
    date: new FormControl(''),
    time: new FormControl(''),
    doctorEmail: new FormControl('',[Validators.email])

  })

  timeSlot = ['Select','10 AM', '11 AM', '12 PM', '2 PM', '3 PM', '4 PM', '5 PM',]
  specilist = ['Select','Cardiologist', 'Orthopedics', 'Obstetrics and Gynecology', 'Dermatology', 'Pediatrics', 'Radiology','Ophthalmology']

  get data() {
    return this.register.get(['firstName', 'lastName', 'age', 'ph', 'gender', 'email', 'address', 'doctorName', 'specilist', 'date', 'time', 'doctorEmail'])
  }

  get firstName() {
    return this.register.get('firstName')
  }

  onsub1(){
      this.route.navigate(['../dashboard']);
  }
  onSub() {
    console.log(this.register.value.date);
    let a=this.register.value
    // let patientData={name:a.firstName!+a.lastName,age:a.age,gender:a.gender,ph:a.ph,email:a.email,address:a.address}
    // let doctorData={name:a.doctorName,speciliat:a.specilist,appointmentDate:a.date,appointmentTime:a.time,email:a.doctorEmail}
  
    let folder=a.firstName!+" "+a.lastName
    
    this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/'+folder+'.json',a).subscribe(a=>{console.log(a);
    })
  }
}
