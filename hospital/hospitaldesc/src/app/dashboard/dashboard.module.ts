import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SildebarComponent } from './sildebar/sildebar.component';
<<<<<<< HEAD
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
||||||| 135d29a
=======
import {HttpClientModule} from '@angular/common/http'

>>>>>>> bfa1a229df2c73b7377d23ea914b92ae41e2b4a1




@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SildebarComponent,
    AddDoctorComponent
  
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
