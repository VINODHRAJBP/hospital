import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class ValidatehosiptalService {

  constructor( private http:HttpClient) { }
  register1:any[]=[]
  register(email: string, password: string) {
    let val = { email, password }
    this.http.post('https://hosiptal-92c26-default-rtdb.firebaseio.com/register.json', val)
      .subscribe(a => {
        console.log(a);
      })
}
}

