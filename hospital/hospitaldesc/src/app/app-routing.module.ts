import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { LoginComponent } from './login/login.component';
import { AddPaitentComponent } from './add-paitent/add-paitent.component';
import { AddDoctorComponent } from './dashboard/doctor/add-doctor/add-doctor.component';

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
        path:'doctor',component:DoctorComponent,children:[
          {path:'add-doctor', component:AddDoctorComponent}
        ]
      },
      {
        path:'patient',component:PatientComponent
      },{
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
