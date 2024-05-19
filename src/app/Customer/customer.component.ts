import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  
  CustId!:number;
  CustName!:string;
  constructor(public route:ActivatedRoute)
  {
    this.route.queryParams.subscribe(params => {
      this.CustId= params['Id'];
      this.CustName = params['UserName'];
    });
  }
  visibility:any = false;
  IconVisibility:any = true;
   IconClick()
   {
    this.visibility= !this.visibility;
    console.log(this.visibility);
   }

  
}
