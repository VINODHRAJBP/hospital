import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './dashboard/doctor/add-doctor/add-doctor.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { AppointmentsComponent } from './dashboard/doctor/appointments/appointments.component';
 import { DoctorDetailsComponent } from './dashboard/doctor/doctor-details/doctor-details.component';
import { AddPatientComponent } from './dashboard/patient/add-patient.component.ts/add-patient.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'',component:LoginComponent
  },

  {
    path: '', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgotpass', component: ForgotpassComponent
  },
  
  {
    path:'dashboard',canActivate:[AuthGuard] ,component:DashboardComponent,children:[
      {
        path:'doctor',component:DoctorComponent,children:[
          {path:'add-doctor', component:AddDoctorComponent},
          {path:'appointments',component:AppointmentsComponent},
          {path:'doctor-details',component:DoctorDetailsComponent}
        ]
      },
      {
        path:'patient',component:PatientComponent,
        children:[
          {path:'add-patient',component:AddPatientComponent}
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
