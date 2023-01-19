import { Location } from '@angular/common';
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

    
    constructor(private http:HttpClient,private route:Router,public dashboardServices:DashboardService,private loc:Location) { 
     
    }
    appointmentStartDate=new Date()
    slottime: timeSlot[] = []
  @Input() updatingPatientData=new FormControl()




 


 
    ngOnInit(): void {
  this.slottime=this.dashboardServices.appointmentDetails
  this.dashboardServices.fetchDoctor()
    }
    
    register = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
<<<<<<< HEAD
      ph: new FormControl('',[Validators.required]),
      // gender: new FormControl(''),
=======
      ph: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
>>>>>>> fef60b0c156c167e17fbe4c0b7059faa9a3565bd
      email: new FormControl('',[Validators.email,Validators.required]),
      address: new FormControl('',[Validators.required]),
      doctorName: new FormControl('',[Validators.required]),
      specilist: new FormControl('',[Validators.required]),
<<<<<<< HEAD
      // date: new FormControl(''),
      // time: new FormControl(''),
      doctorEmail: new FormControl('',[Validators.email])
=======
      date: new FormControl(''),
      time: new FormControl(''), 
      doctorEmail: new FormControl('',[Validators.email]),
      status:new FormControl('appoiintmentBooked')
>>>>>>> fef60b0c156c167e17fbe4c0b7059faa9a3565bd
  
    })
    // a=this.dashboardServices.appointmentDetails
  
    // timeSlot = ['Select','10 AM','a', '11 AM', '12 PM', '2 PM', '3 PM', '4 PM', '5 PM',]
    specilists = ['Select','Praveen','Cardiologist', 'Orthopedics', 'Obstetrics and Gynecology', 'Dermatology', 'Pediatrics', 'Radiology','Ophthalmology']
  
    get data() {
      return this.register.get(['firstName', 'lastName', 'age', 'ph', 'gender', 'email', 'address', 'doctorName', 'specilist', 'date', 'time', 'doctorEmail'])
    }
  
    onsub1(){
        this.loc.back()
    }
    onSub() {
      // console.log(this.register.value.date);
      let a=this.register.value
      let folder=a.firstName!+" "+a.lastName
      
      this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/'+folder+'.json',a).subscribe(a=>{console.log(a);
      })
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

       doctorName=''
       specilist=''
       email=''
       fillDoctorData(a:any){
        for(let c of this.dashboardServices.doctorData){
             if(a==c.name){
              console.log(c);
              this.doctorName=c.name
              this.specilist=c.department
              this.email=c.mail
             }
        }
        
        
       }


       
      
  }
  