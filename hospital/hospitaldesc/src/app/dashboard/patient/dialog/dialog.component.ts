import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) data:any,private dialogRef:MatDialogRef<DialogComponent>,public dashboard:DashboardService) {
    // console.log(data);
    
    this.firstName=data.firstName
    this.phone=data.ph
    this.time=data.time
    this.date=data.date
    this.gender=data.gender
    this.doctor=data.doctor
   }

  form!:FormGroup
  firstName!:string
  phone!:any
  time!:any
  date!:any
  gender!:any
  doctor!:any


  ngOnInit(): void {
    this.form=this.fb.group({
      name:[this.firstName],
      phone:[this.phone],
      time:[this.time],
      date:[this.date],
      gender:[this.gender],
      doctor:[this.doctor]
    })
  }


  TIME=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"];


  isDisableTime(selectedTime: string,date?:any): boolean {
    let d=new Date() 
    let day=d.getDate()
    // console.log(date.substr(8,10)==day);
    
    
    let isTimeOver = false;
     let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let currentAmPm = currentHour >= 12 ? 'PM' : 'AM';
     currentHour = currentHour % 12;
    let selectedHour = +selectedTime.substr(0, 2) % 12;
     let selectedMin = +selectedTime.substr(3, 2);
     let selectedAM_PM = selectedTime.substr(6, 2);
     if(currentAmPm === selectedAM_PM) {
     if (selectedHour < currentHour && date.substr(8,10)==day) {
     isTimeOver = true;
     } else if (selectedHour === currentHour && date.substr(8,10)==day) {
     if (selectedMin < currentMin) {
     isTimeOver = true;
     }
     }
     } else {
     isTimeOver = currentAmPm > selectedAM_PM;
     }
     return isTimeOver;
     }

   
     update(){
      this.dialogRef.close(this.form.value)
     }

     close(){
      this.dialogRef.close()
     }

}
