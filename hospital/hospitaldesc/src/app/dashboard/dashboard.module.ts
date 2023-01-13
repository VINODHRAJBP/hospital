import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SildebarComponent } from './sildebar/sildebar.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
<<<<<<< HEAD
import { AddPatientComponent } from './patient/add-patient.component.ts/add-patient.component';
import {HttpClientModule} from '@angular/common/http'
=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> 455d2f732e7b8e4ce83934fdd443394281fb1e35
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import {matMenuAnimations, MatMenuModule} from '@angular/material/menu'


@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SildebarComponent,
    AddDoctorComponent,
    AppointmentsComponent,
    DoctorDetailsComponent,
<<<<<<< HEAD
    AddPatientComponent
=======
>>>>>>> 455d2f732e7b8e4ce83934fdd443394281fb1e35

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule

  ],
  exports: [DoctorComponent, PatientComponent]
})
export class DashboardModule {

}
