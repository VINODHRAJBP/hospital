import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.component.html',
  styleUrls: ['appointments.component.css']
})
export class AppointmentsComponent implements OnInit{

    constructor(private doctorService:DoctorService){}

    allAppointments:any[]=[]
    allDoctors:Doctor[]=[]

    ngOnInit() {
        this.onFetchAppointments();
        this.onFetchDoctors();
    }

    onFetchAppointments(){
        this.doctorService.fetchApointments().subscribe((appointments)=>{
            this.allAppointments=appointments;
            console.log(appointments);
            
        })
    }

  onFetchDoctors(){
    this.doctorService.fetchDoctor().subscribe((doctors)=>{
      this.allDoctors=doctors;
      console.log(doctors);
    })
  }

  onCanceleAppointment(appointment:any){
    appointment.btn=false;
    this.doctorService.deleteAppointment(appointment)
  }

   
}