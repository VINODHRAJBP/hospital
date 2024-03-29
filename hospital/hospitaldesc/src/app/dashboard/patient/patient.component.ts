import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data, timeSlot } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { update } from 'firebase/database';

@Component({
  selector: 'app-add-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient, public dashboardService: DashboardService,private dialog:MatDialog) { }


  
  


  

patientData:any
  minDate=new Date()
  displayedColumns: string[] = ['name', 'gender', 'age','phno', 'doctorName','date', 'time','status','action'];
  dataSource !: MatTableDataSource<data>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  dataSource1 !: MatTableDataSource<data>;
  @ViewChild(MatPaginator) paginator1!: MatPaginator;




  ngOnInit(): void {
    this.dashboardService.fetchDoctor()
    this.dashboardService.fetchPatientData()
    this.fetch();
    console.log(this.dashboardService.appointmentDetails);
  }

  fetch(){
    this.dashboardService.fetch().then((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

  }


  datefil: data[] = []
  showAllDataTable = true

  showFilterTable = false
  dateFilter(startDate: any, endDate: any) {
    this.datefil = []
    for (let c of this.dashboardService.patientData) {
      if (c.date > startDate && c.date < endDate) {
        this.datefil.push(c)
        console.log(this.datefil);
      }
    }
    if (this.datefil.length == 0) {
      this.showAllDataTable = true
      this.showFilterTable = false
    }
    else {
      this.showFilterTable = true
      this.showAllDataTable = false
    }
  }

  add() {
    alert("Patient added Successfully")
    this.route.navigate(['dashboard/patient'])
 
  }




  cancelAppointment(data: any) {
    this.http.delete('https://hospital-desk-default-rtdb.firebaseio.com/appointments/' + data.id + '.json').subscribe(a => {
      console.log(a);
    })

  }
  updateAppointment(data1: any) {
    // console.log(data);
    if(data1 == null ){
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='300px';
    dialogConfig.data=data1;
    
    const dialogRef=this.dialog.open(DialogComponent,dialogConfig)

    dialogRef.afterClosed().subscribe(data=>{
      if(data){  
        let currentAppointment: any = {
          id:data1.id,
          address: data1.address,
          age: data1.age,
          date: data.date,
          doctorEmail: data1.doctorEmail,
          doctorName: data.doctorName,
          email: data1.email,
          firstName: data.firstName,
          gender: data.gender,
          lastName: data1.lastName,
          ph: data.ph,
          specilist: data1.specilist,
          status: data1.status,
          time: data.time
        }
        this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/' + data.id + '.json', currentAppointment).subscribe(a=>{console.log(a);
    })

      }
  })

  }
  register1=true
  register2(){
  this.register1=!this.register1
  }
}






