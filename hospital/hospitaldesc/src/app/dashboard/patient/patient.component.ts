import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { data, timeSlot } from '../dashboard';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private route:Router,private http:HttpClient,public dashboardService:DashboardService) { }



  // displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName','time'];
  //   dataSource !: MatTableDataSource<data>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;


  minDate=new Date()

  ngOnInit(): void {
  this.dashboardService.fetchDoctor()
    console.log(this.dashboardService.appointmentDetails);
    
  }

  



 

  addpatient=false;
add1(){
  this.addpatient=!this.addpatient
  // this.dataSource=new MatTableDataSource(this.dashboardService.patientData);
  // this.dataSource.paginator = this.paginator;

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

add(){
  this.route.navigate(['dashboard/patient'])
this.timeSlotData()

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


 

 