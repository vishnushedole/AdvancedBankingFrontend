import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Enquiry } from '../Models/enquiry';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'enq-list',
  templateUrl: './enq-list.component.html',
  styleUrl: './enq-list.component.css'
})
export class EnqListComponent {
  constructor(public service : EmployeeService,
    
  ){}
 @Input()
enquiryList: Enquiry[]=[];
// onViewClick(enquiryId:number):void{
//   this.router.navigate(['enq-details',enquiryId])
// }
@Output("select")
select:EventEmitter<any>=new EventEmitter<any>()
addviewclick(data:any){
 console.log(data);
 this.select.emit(data);
}

}
