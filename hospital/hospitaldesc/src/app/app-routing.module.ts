import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaitentComponent } from './add-paitent/add-paitent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'',component:LoginComponent
=======
import { SignupComponent } from './signup/signup.component';

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
>>>>>>> 8a96736f7d25f69400bb981e809a52d2fb55e5c0
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
