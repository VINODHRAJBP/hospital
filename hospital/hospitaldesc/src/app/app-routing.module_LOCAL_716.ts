import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './dashboard/doctor/add-doctor/add-doctor.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'doctor',component:DoctorComponent, children:[
    {path:'add-doctor',component:AddDoctorComponent}
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
