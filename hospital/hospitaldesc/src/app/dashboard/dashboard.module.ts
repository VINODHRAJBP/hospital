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
<<<<<<< HEAD

 
||||||| f4a1574
||||||| a193772
import { AddPaitentComponent } from '../add-paitent/add-paitent.component';
=======
>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a



<<<<<<< HEAD

||||||| f4a1574
=======

>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
=======
>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a

@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
<<<<<<< HEAD
||||||| f4a1574
<<<<<<< HEAD
=======

>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
    SildebarComponent,
    AddDoctorComponent,
    AppointmentsComponent
<<<<<<< HEAD
 

||||||| f4a1574
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
>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a


<<<<<<< HEAD
||||||| f4a1574
=======
    AddPaitentComponent
>>>>>>> 8c2d1c07eea8dedb3bd9a3a7b1fd5cde810d6bf4
>>>>>>> 928f7dfde047ca9d5fe9f257183987422775b8b2
  
=======


>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
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
