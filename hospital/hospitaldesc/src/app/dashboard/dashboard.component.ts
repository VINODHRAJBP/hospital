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
  }

  addpatient=false;
add1(){
  this.dashboardService.fetchDoctor()
  this.addpatient=!this.addpatient
}

<<<<<<< HEAD
 
// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
 
||||||| f4a1574
<<<<<<< HEAD
// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
||||||| a193772
=======
=======

>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
get(){
  // this.http.get('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json').pipe(map(

  // ))
}
time:timeSlot[]=[]
timeSlotData(){
  for (let a of this.dashboardService.patientData){
    let b = {date:a.date,time:a.time,doctorName:a.doctorName }
   this.time.push(b)
  }
 console.log(this.time);
 
  
}

<<<<<<< HEAD
 
||||||| f4a1574

>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
=======
>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
}
