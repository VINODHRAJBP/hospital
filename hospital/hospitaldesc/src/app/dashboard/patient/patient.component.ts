import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data, timeSlot } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient, public dashboardService: DashboardService) { }


  displayedColumns: string[] = ['name', 'gender', 'age','phno', 'doctorName','date', 'time'];
  dataSource !: MatTableDataSource<data>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  patientData:any;
  minDate = new Date()

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


  cancelAppointment(a: any) {
    console.log(a);
    this.http.delete('https://hospital-desk-default-rtdb.firebaseio.com/appointments/' + a + '.json').subscribe(a => {
      console.log(a);
    })

  }
  updateAppointment(data: any) {
    this.patientData = data
    console.log(this.patientData);

  }
  register1=true
  register2(){
  this.register1=!this.register1
  }
}






