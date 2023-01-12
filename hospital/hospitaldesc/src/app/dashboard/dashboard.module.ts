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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    AppointmentsComponent,
    DoctorDetailsComponent
 
||||||| 3e94afe
    AppointmentsComponent




=======
<<<<<<< HEAD
   

  
=======
>>>>>>> a2931184fc721797560ed59209d47a65b15c67f6
    AppointmentsComponent




<<<<<<< HEAD
=======
>>>>>>> 3e94afe70e86c177d65e85711ffc8241793d067a
>>>>>>> 7d886be9e01ccb439c86e035257d3b4e85e5d0e1
>>>>>>> a2931184fc721797560ed59209d47a65b15c67f6
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
