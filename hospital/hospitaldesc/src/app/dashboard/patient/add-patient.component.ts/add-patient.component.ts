import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit,ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data, timeSlot } from '../../dashboard';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-patient',
  templateUrl: 'add-patient.component.html',
  styleUrls: ['add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  
  @Input() updatingPatientData:any =[]
  // address: new FormControl('',[Validators.required]),
  // doctorName: new FormControl('',[Validators.required]),
  // specilist: new FormControl('',[Validators.required]),
  // date: new FormControl(''),
  // time: new FormControl(''),
  // doctorEmail: new FormControl('',[Validators.email]),
  // status:new FormControl('appoiintmentBooked')
    
    constructor(private http:HttpClient,private route:Router,public dashboardServices:DashboardService,private loc:Location) { 
     
    }
    appointmentStartDate=new Date()
    slottime: timeSlot[] = []
 




 


 
    ngOnInit(): void {
      
      // this.form = this.fb.group({
       
        
      // })
  this.slottime=this.dashboardServices.appointmentDetails
  this.dashboardServices.fetchDoctor()
    }
    
    register = new FormGroup({
      id:new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      ph: new FormControl('',[Validators.required]),
      // gender: new FormControl(''),
      // ph: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      email: new FormControl('',[Validators.email,Validators.required]),
      address: new FormControl('',[Validators.required]),
      doctorName: new FormControl('',[Validators.required]),
      specilist: new FormControl('',[Validators.required]),
      doctorEmail: new FormControl('',[Validators.email]),
      date: new FormControl(''),
      time: new FormControl(''), 
      status:new FormControl('appoiintmentBooked')
  
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
      
      this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/'+a.id+'.json',a).subscribe(a=>{console.log(a);
      })
    }



   
    TIME=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"];
  
  
    isDisableTime(selectedTime: string,date:any): boolean {
      let d=new Date() 
      let day=d.getDate()
      
      let isTimeOver = false;
       let currentHour = new Date().getHours();
      let currentMin = new Date().getMinutes();
      let currentAmPm = currentHour >= 12 ? 'PM' : 'AM';
       currentHour = currentHour % 12;
      let selectedHour = +selectedTime.substr(0, 2) % 12;
       let selectedMin = +selectedTime.substr(3, 2);
       let selectedAM_PM = selectedTime.substr(6, 2);
       if(currentAmPm === selectedAM_PM) {
       if (selectedHour < currentHour && date.substr(8,10)==day) {
       isTimeOver = true;
       } else if (selectedHour === currentHour && date.substr(8,10)==day) {
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
  