import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { SildebarComponent } from './sildebar/sildebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SildebarComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[DoctorComponent,PatientComponent]
})
export class DashboardModule { }
