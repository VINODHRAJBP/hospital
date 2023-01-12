import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SildebarComponent } from './sildebar/sildebar.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import {HttpClientModule} from '@angular/common/http'
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
 
 
@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SildebarComponent,
    AddDoctorComponent,

    AppointmentsComponent,
    DoctorDetailsComponent
 
 



  ],
  imports: [
    CommonModule,
    RouterModule,
     ReactiveFormsModule,
     HttpClientModule
     
  ],
  exports:[DoctorComponent,PatientComponent]
})
export class DashboardModule { 
  
}
