import { Pipe, PipeTransform } from '@angular/core';
import { PatientComponent } from './patient.component';

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  constructor(private patient:PatientComponent){}
  transform(value: any,startDate:any,endDate:any): any {
    this.patient. datefil = []
    for(let c of value){
      if(c.date>startDate && c.date<endDate){
        this.patient.datefil.push(c)
        console.log(this.patient.datefil);   
      }
    }
        if (this.patient.datefil.length==0) {
          this.patient.showAllDataTable=true
          this.patient.showFilterTable = false
        }
        else{
          this.patient.showFilterTable=true
          this.patient.showAllDataTable=false
        }
    return this.patient.datefil;
  }

}
