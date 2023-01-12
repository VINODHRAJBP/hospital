import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { data } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }


  patientData:any = []
  fetchDoctor() {
    return this.http.get<{ [key: string]: data }>('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json')
      .pipe(map((res) => {
        const doctors = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            doctors.push({ ...res[key] });
          }
        }
        return doctors;

      }), catchError((err) => {
        return throwError(err);
      })).subscribe(a => {
        this.patientData = a,
         console.log(a); 
      })

  }

}
