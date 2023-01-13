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

  displayedColumns: string[] = ['firstName', 'gender', 'age', 'doctorName', 'time', 'action'];
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
      // console.log(appointments);
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
      // console.log(doctors);
    })
  }

  onCanceleAppointment(appointment: any) {
    this.doctorService.deleteAppointment(appointment);
    alert(appointment.firstName+" appointment cancelled")
  }

}