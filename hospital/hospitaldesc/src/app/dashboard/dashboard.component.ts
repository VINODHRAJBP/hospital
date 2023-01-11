import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  data=[]
  add(){
    this.route.navigate(['dashboard/patient'])
  }

  addpatient=false;
add1(){
  this.fetchDoctor()
  this.addpatient=!this.addpatient
}

<<<<<<< HEAD
// addDoctor:boolean=false;
// doctor(){
// this.addDoctor=!this.addDoctor
// }
||||||| a193772
=======
get(){
  // this.http.get('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json').pipe(map(

  // ))
}
patientData:any=[]
  fetchDoctor() {
    return this.http.get<{ [key: string]: any}>('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json')
        .pipe(map((res) => {
            const doctors = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    doctors.push({ ...res[key]});
                }
            }
            return doctors;
            
        }), catchError((err) => {
            return throwError(err);
        })).subscribe(a=>{this.patientData=a,console.log(a);
          console.log(this.patientData);
        })
        
        
}


>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
}
