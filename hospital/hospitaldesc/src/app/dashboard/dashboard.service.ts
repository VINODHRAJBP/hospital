import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { data, timeSlot } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  appointmentDetails: timeSlot[] = []
  patientData: any = []
  doctorData: any = []

  fetchPatientData() {
    return this.http.get<{ [key: string]: data }>('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json')
      .pipe(map((res) => {
        const data = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            data.push({ ...res[key], id: key });
          }
        }
        return data;

      }), catchError((err) => {
        return throwError(err);
      })).subscribe(a => {
        this.patientData = a
        //  console.log(a); 
      })

  }



  fetchDoctor() {
    return this.http.get<{ [key: string]: data }>('https://hospital-desk-default-rtdb.firebaseio.com/doctors.json')
      .pipe(map((res) => {
        const doctors = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            doctors.push({ ...res[key], id: key });
          }
        }
        return doctors;

      }), catchError((err) => {
        return throwError(err);
      })).subscribe(a => {
        this.doctorData = a
        //  console.log(a); 
      }, (err) => { console.log(err) }
      )
  }



  promise = new Promise(() => { })
  patientDataWithPromise: any = []

  fetch() {
    return this.promise = fetch('https://hospital-desk-default-rtdb.firebaseio.com/appointments.json').then((res) => {
      return res.json();
    }).then((data) => {
      for (const key in data) {
        this.patientDataWithPromise.push({ ...data[key] });

      }
      return this.patientDataWithPromise;
    })
  }
}
