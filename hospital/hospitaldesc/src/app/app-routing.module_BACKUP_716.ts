import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddDoctorComponent } from './dashboard/doctor/add-doctor/add-doctor.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'doctor',component:DoctorComponent, children:[
    {path:'add-doctor',component:AddDoctorComponent}
  ]}
  
  
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
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
      }
    ]
  }


>>>>>>> a92fe91bb3130f7b5e099eba140f9b47f3104460
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
