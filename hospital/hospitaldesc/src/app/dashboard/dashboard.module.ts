import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SildebarComponent } from './sildebar/sildebar.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { AddPatientComponent } from './patient/add-patient.component.ts/add-patient.component';
import {HttpClientModule} from '@angular/common/http'
import { AppointmentsComponent } from './doctor/appointments/appointments.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { FormsModule } from '@angular/forms';


// material ui
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import{MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu'
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateDataComponent } from './patient/update-data/update-data.component';
import { FilterByDatePipe } from './patient/filter-by-date.pipe'
 


@NgModule({
  declarations: [
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    SildebarComponent,
    AddDoctorComponent,
    AppointmentsComponent,
    DoctorDetailsComponent,
    AddPatientComponent,
    UpdateDataComponent,
    FilterByDatePipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    NgxPaginationModule,
    FormsModule
 
  ],
  exports: [DoctorComponent, PatientComponent]
})
export class DashboardModule {

}
