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
import { AddPaitentComponent } from '../add-paitent/add-paitent.component';




@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
<<<<<<< HEAD
    SildebarComponent,
    AddDoctorComponent
||||||| bfa1a22
    SildebarComponent
=======
    SildebarComponent,
    AddPaitentComponent
>>>>>>> 9f2a9f74ac56d2ea33122087a270fe444dd73f16
  
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
