import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, throwError } from "rxjs";
import { Doctor } from "./doctor";

@Injectable({ providedIn: 'root' })
export class DoctorService {

    constructor(private http: HttpClient) { }


    createDoctor(doctor: any) {
        this.http.put('https://hospital-desk-default-rtdb.firebaseio.com/doctors/' + doctor.name + '.json', doctor)
            .subscribe((res) => {
                console.log(res);
            }, catchError((err) => {
                return throwError(err);
            }))
    }

    fetchDoctor() {
        return this.http.get<{ [key: string]: Doctor }>('https://hospital-desk-default-rtdb.firebaseio.com/doctors.json')
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
            }))
    }


}