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
<<<<<<< HEAD
import { AddPaitentComponent } from '../add-paitent/add-paitent.component';
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
||||||| a193772
import { AddPaitentComponent } from '../add-paitent/add-paitent.component';



=======

>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2

@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
<<<<<<< HEAD
    SildebarComponent,
    AddPaitentComponent,
    AddDoctorComponent,
    AppointmentsComponent
||||||| a193772
<<<<<<< HEAD
    SildebarComponent,
    AddDoctorComponent
||||||| bfa1a22
    SildebarComponent
=======
    SildebarComponent,
    AddPaitentComponent
>>>>>>> 9f2a9f74ac56d2ea33122087a270fe444dd73f16
=======
    SildebarComponent,
    AddDoctorComponent,
<<<<<<< HEAD


=======
    AddPaitentComponent
>>>>>>> 8c2d1c07eea8dedb3bd9a3a7b1fd5cde810d6bf4
>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
  
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
