import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  register = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    ph: new FormControl(''),
    gender: new FormControl(),
    email: new FormControl(''),
    address: new FormControl(''),
    doctorName: new FormControl(''),
    specilist: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    doctorEmail: new FormControl('')

  })

  get data() {
    return this.register.get(['firstName', 'lastName', 'age', 'ph', 'gender', 'email', 'address', 'doctorName', 'specilist', 'date', 'time', 'doctorEmail'])
  }

  get firstName() {
    return this.register.get('firstName')
  }
  onSub() {
    console.log(this.register.value.date);
    let a=this.register.value
    let patientData={name:a.firstName!+a.lastName,age:a.age,gender:a.gender,ph:a.ph,email:a.email,address:a.address}
    let doctorData={name:a.doctorName,speciliat:a.specilist,appointmentDate:a.date,appointmentTime:a.time,email:a.doctorEmail}
    console.log(patientData);
    let folder=a.firstName!+a.lastName
    
    this.http.post('https://hospital-2a8e9-default-rtdb.firebaseio.com/appointments/'+folder+'/doctor.json',doctorData).subscribe(a=>{console.log(a);
    })

    this.http.post('https://hospital-2a8e9-default-rtdb.firebaseio.com/appointments/'+folder+'/patient.json', patientData).subscribe(a=>{console.log(a);
    })
  }
}
