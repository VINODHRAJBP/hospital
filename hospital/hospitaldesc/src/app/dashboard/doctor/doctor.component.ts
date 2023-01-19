import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  
  ngOnInit(){

  }

  isvalue=0;
  toggle1(){
    this.isvalue=1;
  }
  toggle2(){
    this.isvalue=2;
  }
  toggle3(){
    this.isvalue=3;
  }
}
