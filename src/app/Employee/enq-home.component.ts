import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enquiry } from '../Models/enquiry';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-enq-home',
  templateUrl: './enq-home.component.html',
  styleUrl: './enq-home.component.css'
})
export class EnqHomeComponent {
  enquiryList:Enquiry[]=[];
  selectedEnquiry:any;
  EmployeeId?:number;
  
  constructor(
    public service : EmployeeService,public route:ActivatedRoute)
    {
      this.route.queryParams.subscribe(params => {
        this.EmployeeId= params['Id'];
      });
    }
      select(enquiry:any){
      this.selectedEnquiry=enquiry;
  
     }
     visibility:any = false;
  IconClick()
  {
   this.visibility= !this.visibility;
   console.log(this.visibility);
  }
    ngOnInit():void{
      console.log("ng On init")
      this.route.queryParams.subscribe(params => {
        this.EmployeeId= params['Id'];
        console.log(this.EmployeeId);
        if(this.EmployeeId!=undefined)
          {
            this.service.getallenquiry(this.EmployeeId).subscribe((data:Enquiry[])=>{
              console.warn("data",data);
              this.enquiryList=data;
            })
          }
      
      });
     
    }
    deleteEnquiry(enquiry:Enquiry) { 
      
      this.service.deleteenq(enquiry).subscribe(
        (data) =>{
          console.log(data);
          this.initialize();
        },
        (error) => {
          console.error('Error rejecting enquiry:', error);
          // Handle error (e.g., display error message to the user)
        })
      
    }
    acceptEnquiry(enquiry:Enquiry){
   this.service.acceptenq(enquiry).subscribe(
    (data) =>{
      console.log(data);
      this.initialize();
    },
    (error) =>{
      console.error('Error accepting enquiry:', error);
    }
   )
    }
    initialize() {
      
      this.service.getallenquiry(this.EmployeeId).subscribe((data) =>{
        console.log(data);
        this.enquiryList = data;
      });
  
  }
}
