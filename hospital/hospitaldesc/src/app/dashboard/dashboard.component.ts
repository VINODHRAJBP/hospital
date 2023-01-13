import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { data, timeSlot } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient,public dashboardService:DashboardService) { }



  displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName','time'];
    dataSource !: MatTableDataSource<data>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  this.dashboardService.fetchDoctor()
    console.log(this.dashboardService.appointmentDetails);
    
  }

  



  data=[]
  minDate=new Date()
  add(){
    this.route.navigate(['dashboard/patient'])
  this.timeSlotData()

  }

  addpatient=false;
add1(){
  this.addpatient=!this.addpatient
  this.dataSource=new MatTableDataSource(this.dashboardService.patientData);

  this.dataSource.paginator = this.paginator;
  

  console.log(this.dataSource);



}
datefil:data[]=[]
dateFilter(a:any,b:any){
  
for(let c of this.dashboardService.patientData){
  // console.log(c.date,a);
  this.datefil=[]
  
  if(c.date>a && c.date<b){
    this.datefil.push(c)
    console.log(c);
    
  }
}
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
