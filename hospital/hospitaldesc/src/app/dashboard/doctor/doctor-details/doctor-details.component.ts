import { Component, OnInit,ViewChild } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: 'doctor-details.component.html',
  styleUrls: ['doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit{
    constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.fetchDoctor();
  }
 
  allDoctors:Doctor[]=[]

  fetchDoctor(){
    this.doctorService.fetchDoctor().subscribe((doctors)=>{
      this.allDoctors=doctors
       console.log(this.allDoctors);
    })
  }
}