import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data, timeSlot } from '../dashboard';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private route:Router,private http:HttpClient,public dashboardService:DashboardService) { }


  // displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName','time'];
  //   dataSource !: MatTableDataSource<data>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  


  // displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName','time'];
  //   dataSource !: MatTableDataSource<data>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

patientData:any
  minDate=new Date()

  ngOnInit(): void {
  this.dashboardService.fetchDoctor()
    // console.log(this.dashboardService.appointmentDetails);
  }

 
datefil:data[]=[]
showAllDataTable=true

  showFilterTable=false
dateFilter(){

}

add(){
  this.route.navigate(['dashboard/patient'])
this.timeSlotData()

}
 

timeSlotData(){
  for (let a of this.dashboardService.patientData){
    let b = {date:a.date,doctorName:a.doctorName }
   this.dashboardService.appointmentDetails.push(b)
  }
 console.log(this.dashboardService.appointmentDetails);
}


cancelAppointment(a:any){
console.log(a);
  this.http.delete('https://hospital-desk-default-rtdb.firebaseio.com/appointments/'+a+'.json').subscribe(a=>{console.log(a);
  })

}
updateAppointment(data:any){
this.patientData=data
console.log(this.patientData);

}

}



 

 