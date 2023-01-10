import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { AddDoctorComponent } from './dashboard/doctor/add-doctor/add-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
