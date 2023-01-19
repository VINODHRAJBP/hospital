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
    this.route.navigate(['dashboard/patient'])
    this.timeSlotData()

  }


  timeSlotData() {
    for (let a of this.dashboardService.patientData) {
      let b = { date: a.date, doctorName: a.doctorName }
      this.dashboardService.appointmentDetails.push(b)
    }
    console.log(this.dashboardService.appointmentDetails);
  }
  


  cancelAppointment(data: any) {
    this.http.delete('https://hospital-desk-default-rtdb.firebaseio.com/appointments/' + data.id + '.json').subscribe(a => {
      console.log(a);
    })

  }
  updateAppointment(data: any) {
    // console.log(data);
    if(data == null ){
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='300px';
    dialogConfig.data=data;
    
    const dialogRef=this.dialog.open(DialogComponent,dialogConfig)

    dialogRef.afterClosed().subscribe(data=>{
      if(data){  

    this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/appointments/' + data.firstName+'.json',data).subscribe(a=>{console.log(a);
    })

      }
  })

  }
 


}





