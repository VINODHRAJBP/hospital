import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.component.html',
  styleUrls: ['appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }


  allAppointments: any[] = []
  allDoctors: Doctor[] = []

  displayedColumns: string[] = ['doctorName', 'department', 'firstName', 'date', 'time', 'status', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit() {
    this.onFetchAppointments();
    this.onFetchDoctors();
  }

  onFetchAppointments() {
    this.doctorService.fetchApointments().subscribe((appointments) => {
      this.allAppointments = appointments;
      this.dataSource = new MatTableDataSource(appointments);
      this.dataSource.paginator = this.paginator;
      console.log(appointments);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFetchDoctors() {
    this.doctorService.fetchDoctor().subscribe((doctors) => {
      this.allDoctors = doctors;
    })
  }

  onCanceleAppointment(appointment: any) {
    appointment.btn = true;
    this.doctorService.deleteAppointment(appointment);
    alert(appointment.firstName + " appointment cancelled")
  }

  onAcceptAppointment(appointment: any) {
    appointment.status = "Done";
    let currentAppointment: any = {
      address: appointment.address,
      age: appointment.age,
      date: appointment.date,
      doctorEmail: appointment.doctorEmail,
      doctorName: appointment.doctorName,
      email: appointment.email,
      firstName: appointment.firstName,
      gender: appointment.gender,
      lastName: appointment.lastName,
      ph: appointment.ph,
      specilist: appointment.specilist,
      status: "Done",
      time: appointment.time
    }
    this.doctorService.updateAppointment(currentAppointment);
  }

  statusUpdate(data: any) {
    data.btn = true;
    this.doctorService.updateStatus(data)
  }

}