import { Component, OnInit,ViewChild } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.component.html',
  styleUrls: ['appointments.component.css']
})
export class AppointmentsComponent implements OnInit{

    constructor(private doctorService:DoctorService){}


    allAppointments:any[]=[]
    allDoctors:Doctor[]=[]

    displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName','time'];
    dataSource !: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
   

    ngOnInit() { 
        this.onFetchAppointments();
        this.onFetchDoctors();   
    }

    onFetchAppointments(){
        this.doctorService.fetchApointments().subscribe((appointments)=>{
            this.allAppointments=appointments;
          this.dataSource=new MatTableDataSource(appointments);
          this.dataSource.paginator = this.paginator;
            // console.log(appointments);
        })
    }

  onFetchDoctors(){
    this.doctorService.fetchDoctor().subscribe((doctors)=>{
      this.allDoctors=doctors;
      // console.log(doctors);
    })
  }

  onCanceleAppointment(appointment:any){
    appointment.btn=false;
    this.doctorService.deleteAppointment(appointment)
  }


   
}