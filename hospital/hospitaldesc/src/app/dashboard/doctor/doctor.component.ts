import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorsPass:boolean=true
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.fetchDoctor();
  }

  allDoctors:Doctor[]=[]

  fetchDoctor(){
    this.doctorsPass=true;
    this.doctorService.fetchDoctor().subscribe((doctors)=>{
      this.allDoctors=doctors
      // console.log(this.allDoctors);
    })
  }

  doctorData(){
    this.doctorsPass=false;
  }
}
