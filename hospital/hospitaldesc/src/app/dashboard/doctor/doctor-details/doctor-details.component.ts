import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Location } from '@angular/common';
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
      // console.log(this.allDoctors);
    })
  }
}