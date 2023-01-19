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
  page:number=1;
  totalRecords?:number;


  fetchDoctor(){
    this.doctorService.fetchDoctor().subscribe((doctors)=>{
      this.allDoctors=doctors
      this.totalRecords=this.allDoctors.length;
       console.log(this.allDoctors);
    })
  }
}