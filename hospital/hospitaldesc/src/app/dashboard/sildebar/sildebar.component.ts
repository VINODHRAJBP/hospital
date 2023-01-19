import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/authservice.service'; 
@Component({
  selector: 'app-sildebar',
  templateUrl: './sildebar.component.html',
  styleUrls: ['./sildebar.component.css']
})
export class  SildebarComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

}
