import { HttpClient } from '@angular/common/http';
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

  constructor(private fb: FormBuilder, private http: HttpClient, @Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<DialogComponent>, public dashboard: DashboardService) {
    this.firstName = data.firstName
    this.ph = data.ph
    this.time = data.time
    this.date = data.date
    this.gender = data.gender
    this.doctorName = data.doctor
    this.id = data.id
  }

  form!: FormGroup
  firstName!: string
  ph!: any
  time!: any
  date!: any
  gender!: any
  doctorName!: any
  id!: any


  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [this.firstName],
      ph: [this.ph],
      time: [this.time],
      date: [this.date],
      gender: [this.gender],
      doctorName: [this.doctorName],
      id: [this.id]
    })
  }


  TIME = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];


  isDisableTime(selectedTime: string, date: string): boolean {
    let d = new Date()
    let day = d.getDate() + ''
    
    let isTimeOver = false;
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let currentAmPm = currentHour >= 12 ? 'PM' : 'AM';
    currentHour = currentHour % 12;
    let selectedHour = +selectedTime.slice(0, 2) % 12;
    let selectedMin = +selectedTime.slice(3, 2);
    let selectedAM_PM = selectedTime.slice(6, 2);
    if (currentAmPm === selectedAM_PM) {
      if (selectedHour < currentHour && date.slice(8, 10) == day) {
        isTimeOver = true;
      } else if (selectedHour === currentHour && date.slice(8, 10) == day) {
        if (selectedMin < currentMin) {
          isTimeOver = true;
        }
      }
    } else {
      isTimeOver = currentAmPm > selectedAM_PM;
    }
    return isTimeOver;
  }


  update() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value)
  }

  close() {
    this.dialogRef.close()
  }

}
