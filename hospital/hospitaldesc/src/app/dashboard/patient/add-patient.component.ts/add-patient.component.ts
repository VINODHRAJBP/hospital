import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,ViewChild} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data, timeSlot } from '../../dashboard';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-patient',
  templateUrl: 'add-patient.component.html',
  styleUrls: ['add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

    
    constructor(private http:HttpClient,private route:Router,public dashboardServices:DashboardService) { }
    appointmentStartDate=new Date()
    slottime: timeSlot[] = []
  @Input() updatingPatientData!:any

  // @ViewChild('register') form?:FormControl;

   
   
    firstName=this.updatingPatientData.firstName
    lastName=this.updatingPatientData.lastName
    age=this.updatingPatientData.age
    ph=this.updatingPatientData.ph
    gender=this.updatingPatientData.gender
    email=this.updatingPatientData.email
    address=this.updatingPatientData.address
    doctorName=this.updatingPatientData.doctorName
    specilist=this.updatingPatientData.specilist
    date=this.updatingPatientData.date
    time=this.updatingPatientData.time
    doctorEmail=this.updatingPatientData.doctorEmail
    status=this.updatingPatientData.status

 
    ngOnInit(): void {
  this.slottime=this.dashboardServices.appointmentDetails
  console.log(this.slottime);
      console.log(this.slottime.includes({ date: "2023-01-25", doctorName: "Praveen" }));  
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
      doctorEmail: new FormControl('',[Validators.email]),
      status:new FormControl('appoiintmentBooked')
  
    })
    a=this.dashboardServices.appointmentDetails
  
    // timeSlot = ['Select','10 AM','a', '11 AM', '12 PM', '2 PM', '3 PM', '4 PM', '5 PM',]
    specilists = ['Select','Praveen','Cardiologist', 'Orthopedics', 'Obstetrics and Gynecology', 'Dermatology', 'Pediatrics', 'Radiology','Ophthalmology']
  
    get data() {
      return this.register.get(['firstName', 'lastName', 'age', 'ph', 'gender', 'email', 'address', 'doctorName', 'specilist', 'date', 'time', 'doctorEmail'])
    }
  
    onsub1(){
        this.route.navigate(['../dashboard']);
    }
    onSub() {
      console.log(this.register.value.date);
      let a=this.register.value
      console.log(a);
      
      // let patientData={name:a.firstName!+a.lastName,age:a.age,gender:a.gender,ph:a.ph,email:a.email,address:a.address}
      // let doctorData={name:a.doctorName,speciliat:a.specilist,appointmentDate:a.date,appointmentTime:a.time,email:a.doctorEmail}
    
      let folder=a.firstName!+" "+a.lastName
      
      // this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/'+folder+'.json',a).subscribe(a=>{console.log(a);
      // })
    }
    TIME=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"];
  
  
    isDisableTime(selectedTime: string): boolean {
      let isTimeOver = false;
       let currentHour = new Date().getHours();
      let currentMin = new Date().getMinutes();
      let currentAmPm = currentHour >= 12 ? 'PM' : 'AM';
       currentHour = currentHour % 12;
      let selectedHour = +selectedTime.substr(0, 2) % 12;
       let selectedMin = +selectedTime.substr(3, 2);
       let selectedAM_PM = selectedTime.substr(6, 2);
       if(currentAmPm === selectedAM_PM) {
       if (selectedHour < currentHour) {
       isTimeOver = true;
       } else if (selectedHour === currentHour) {
       if (selectedMin < currentMin) {
       isTimeOver = true;
       }
       }
       } else {
       isTimeOver = currentAmPm > selectedAM_PM;
       }
       return isTimeOver;
       }
      
  }
  