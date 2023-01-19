import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  // addpatient=false;
// add1(){
  // this.addpatient=!this.addpatient
  // this.dataSource=new MatTableDataSource(this.dashboardService.patientData);
  // this.dataSource.paginator = this.paginator;
// }
datefil:data[]=[]
showAllDataTable=true
page:number=1;

  showFilterTable=false
dateFilter(startDate:any,endDate:any){
  this.datefil = []
for(let c of this.dashboardService.patientData){
  if(c.date>startDate && c.date<endDate){
    this.datefil.push(c)
    console.log(this.datefil);   
  }
}
    if (this.datefil.length==0) {
      this.showAllDataTable=true
      this.showFilterTable = false
    }
    else{
      this.showFilterTable=true
      this.showAllDataTable=false
    }
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

}



 

 