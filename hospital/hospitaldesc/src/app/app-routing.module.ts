import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
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
  // {
  //   path:'doctor',component:DoctorComponent
  // },
  // {
  //   path:'patient',component:PatientComponent
  // },
  {
    path:'dashboard',component:DashboardComponent,children:[
      {
        path:'doctor',component:DoctorComponent
      },
      {
        path:'patient',component:PatientComponent
      },
      {
        path:'addpatient',component:AddPaitentComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
