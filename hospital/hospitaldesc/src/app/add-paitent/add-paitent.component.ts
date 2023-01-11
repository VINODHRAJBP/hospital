import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-paitent',
  templateUrl: './add-paitent.component.html',
  styleUrls: ['./add-paitent.component.css']
})
export class AddPaitentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
add(){
this.route.navigate(['patient'])
console.log(this.route.navigate(['dashboard/patient']))
}
}
