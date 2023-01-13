import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { timeSlot } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient,public dashboardService:DashboardService) { }

  ngOnInit(): void {
  }
  data=[]
  add(){
    this.route.navigate(['dashboard/patient'])
  this.timeSlotData()

  }

  addpatient=false;
add1(){
  this.dashboardService.fetchDoctor()
  this.addpatient=!this.addpatient

}

 
 
// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
 
 
// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
 
get(){
  // this.http.get('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json').pipe(map(

  // ))
}

timeSlotData(){
  for (let a of this.dashboardService.patientData){
    let b = {date:a.date,doctorName:a.doctorName }
   this.dashboardService.appointmentDetails.push(b)
  }
 console.log(this.dashboardService.appointmentDetails);
}
}
