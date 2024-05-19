import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrl: './right.component.css'
})
export class RightComponent {
   enquiryForm:any;
   constructor(public fb:FormBuilder,private http: HttpClient,private router:Router)
   {
    this.enquiryForm = this.fb.group({
      enquiryId:[''],
      Email:['']
    })
   }
   ViewEnquiry(enqId:any,Email:any)
   {
    console.log(enqId,Email);
    this.http.get(`http://localhost:5114/api/Customer/CheckEnquiry?EnqId=${enqId}&email=${Email}`).subscribe((res1:any)=>{
      this.router.navigateByUrl('/ViewEnquiry?Id='+enqId);
   })
   }
   UpdateDetails(enqId:any,Email:any)
   {
    console.log(enqId,Email);
    this.http.get(`http://localhost:5114/api/Customer/CheckEnquiry?EnqId=${enqId}&email=${Email}`).subscribe((res1:any)=>{
      this.router.navigateByUrl('/UpdateEnquiry/'+enqId);
   })
   }
}
