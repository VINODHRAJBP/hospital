import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.route.navigate(['dashboard/patient'])
  }

  addpatient=false
add1(){
  this.addpatient=!this.addpatient
}

// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
}
