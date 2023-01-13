import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { Router } from '@angular/router';
import { timeSlot } from '../dashboard';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router,public dashboardServices:DashboardService) { }
  aj = [{ a: 'a', b: 'b' }, { a: 'd', b: 'c' }, { a: 'h', b: 'g' }]
  // aj=['a','v']
  slottime: timeSlot[] = []
  ngOnInit(): void {
this.slottime=this.dashboardServices.appointmentDetails
// console.log(this.slottime);

    // console.log(this.slottime.includes({ date: "2023-01-25", doctorName: "Praveen" }));
    // console.log(this.slottime.find());
    
    console.log({ date: '2023-01-25', time: '4 pm', doctorName: 'Praveen' });
    console.log(this.aj);
    

    console.log(this.aj.indexOf({ a: 'd', b: 'c' }));
 

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
  a=this.dashboardServices.appointmentDetails

  timeSlot = ['Select','10 AM', '11 AM','a', '12 PM', '2 PM', '3 PM', '4 PM', '5 PM',]
  specilist = ['Select','Praveen','Cardiologist', 'Orthopedics', 'Obstetrics and Gynecology', 'Dermatology', 'Pediatrics', 'Radiology','Ophthalmology']

  get data() {
    return this.register.get(['firstName', 'lastName', 'age', 'ph', 'gender', 'email', 'address', 'doctorName', 'specilist', 'date', 'time', 'doctorEmail'])
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


  ddd(a:any,b:any){
console.log(a,b);

  }
}
