import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-open-new-account',
  templateUrl: './open-new-account.component.html',
  styleUrl: './open-new-account.component.css'
})
export class OpenNewAccountComponent implements OnInit{

  @Input()
  data:any;

  @Input("CustId")
  CustId:any;
  
  public clickName = "";
  formdata : any;

  viewDetails:any = {
    "balance":"100000"
  }
  constructor(private fb:FormBuilder,private service:CustomerService,private router:Router)
  {
    this.formdata = this.fb.group({
      AccType : [''],
      BranchNames: [[]],
      InitialBalance: [''],
      BranchId:['']
    });
  }
  ngOnInit(): void {
    this.service.GetBranches().subscribe(res=>{
      console.log(res);
      this.formdata.BranchNames = res;
    })
  }
  Create(formdata:any)
  {
    console.log(formdata);
    console.log("Create btn clicked");
    this.clickName = "Create btn clicked";
    this.service.CreateNewAccount(parseInt(formdata.BranchId),this.CustId,parseInt(formdata.AccType),parseInt(formdata.InitialBalance)).subscribe(Response=>{
      window.location.reload();
    })
  }


  
}
