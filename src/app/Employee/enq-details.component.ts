import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Enquiry } from '../Models/enquiry';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'enq-details',
  templateUrl: './enq-details.component.html',
  styleUrl: './enq-details.component.css'
})
export class EnqDetailsComponent {
  constructor(public service : EmployeeService,
    
  ){}
 
  @Input()
enquiryList: Enquiry[]=[];
@Input("selectedEnquiry")
selectedEnquiry:Enquiry=<Enquiry>{};
@Input("EmployeeId")
EmployeeId:any;
rejectedDocuments:string[]=[];
isLoading:boolean =false;
rejectDocument(doc:any){
  this.rejectedDocuments.push(doc.docType);
}
sendRejectedEmail(EmailId:any){
  const receiverMail=EmailId;
 
  
  this.service.sendRejectedMail(receiverMail,this.rejectedDocuments).subscribe(
    response=>{
      console.log("email sent successfully",response);
    },
    error=>{
      console.error('Error sending email',error);
    }
  );

}
showRejectionConfirmation = false;
confirmReject() {
  this.showRejectionConfirmation = true; 
  console.log(this.showRejectionConfirmation);
}
@Output("deleteEnquiry")
deleteEnquiry:EventEmitter<any>=new EventEmitter<any>()
@Output("acceptEnquiry")
acceptEnquiry:EventEmitter<any>=new EventEmitter<any>()
deleteclick(enquiry:Enquiry,EmailId:any) {
  
  //console.log(enquiryId);
 this.isLoading = true;
 
  this.service.deleteenq(enquiry).subscribe(
  () => {
      console.log('Enquiry deleted successfully');
      console.log(EmailId);
      this.sendRejectedEmail(EmailId);
      this.isLoading = false;
      this.service.getallenquiry(this.EmployeeId).subscribe((data:Enquiry[])=>{
              console.warn("data",data);
              this.enquiryList=data;
           window.location.reload(); 
    });
  });
  this.showRejectionConfirmation = false;
  console.log(this.showRejectionConfirmation);
  
}
cancelReject() {
  this.showRejectionConfirmation = false; 
}

acceptclick(enquiry:Enquiry,EmailId:any){
  this.isLoading = true;
  this.service.acceptenq(enquiry).subscribe(
    ()=>{
      
      this.service.createNewCustomer(enquiry.enquiryId,this.EmployeeId).subscribe(res=>{
        console.log(EmailId);
        console.log(res);
        this.service.sendAcceptMail(EmailId,res['userId'],res['password']).subscribe(res2=>{
          console.log("Enquiry Accepted successfully");
          this.isLoading = false;
          this.service.getallenquiry(this.EmployeeId).subscribe((data:Enquiry[])=>{
            window.confirm("Enquiry Accepted");
            console.warn("data",data);
            this.enquiryList=data;
            
         window.location.reload(); 
    });
        })
      })
      
    });
}
}
