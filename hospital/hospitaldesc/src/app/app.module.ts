import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DoctorComponent,
    // PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
