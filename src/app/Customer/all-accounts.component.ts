import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrl: './all-accounts.component.css'
})
export class AllAccountsComponent implements OnInit {

  @Input("CustId")
  CustId:any;

  @Input("UserName")
  UserName:any;

  Accounts:any;
  constructor(private service:CustomerService)
  {
   
  }
  @Output("Details") 
  Details : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.service.getAllAccounts(this.CustId).subscribe((Response)=>{
        
      this.Accounts = <[]>Response;
      console.log(this.Accounts);
    })
  }
   DetailsDisplay(data:any)
   {
    console.log(data)
      this.Details.emit(data);
   }
}
