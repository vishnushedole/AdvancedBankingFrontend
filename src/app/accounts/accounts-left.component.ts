import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts-left',
  templateUrl: './accounts-left.component.html',
  styleUrl: './accounts-left.component.css'
})
export class AccountsLeftComponent {

  @Input("actionType")
  actionType!: string;
 
  @Output("clickViewDetails")
  clickViewDetails:EventEmitter<void> = new EventEmitter<void>();

  @Output("clickApplyForCheckbook")
  clickApplyForCheckbook:EventEmitter<void> = new EventEmitter<void>();
  
  @Output("clickFundTransfer")
  clickFundTransfer:EventEmitter<void> = new EventEmitter<void>();
  
  @Output("clickAccountStatements")
  clickAccountStatements:EventEmitter<void> = new EventEmitter<void>();

  @Output("clickCheckBalance")
  clickCheckBalance:EventEmitter<void> = new EventEmitter<void>();

  @Output("clickAddbeneficiary")
  clickAddbeneficiary:EventEmitter<string> = new EventEmitter<string>();
  
  @Output("clickCloseAccount")
  clickCloseAccount:EventEmitter<void> = new EventEmitter<void>();

  viewDetailsClick()
  {
    this.clickViewDetails.emit();
    console.log("viewDetailsClick called");
  }
  applyForCheckbookClick()
  {
    this.clickApplyForCheckbook.emit();
    console.log("applyForCheckbookClick called");
  }
  fundTransferClick()
  {
    this.clickFundTransfer.emit();
    console.log("fundTransferClick called");
  }
  accountStatementsClick()
  {
    this.clickAccountStatements.emit();
    console.log("accountStatementsClick called");
  }
  checkBalanceClick()
  {
    this.clickCheckBalance.emit();
    console.log("checkBalanceClick called");
  }
  addbeneficiaryClick()
  {
    this.clickAddbeneficiary.emit();
    console.log("addbeneficiaryClick called");
  }
  closeAccountClick()
  {
    this.clickCloseAccount.emit();
    console.log("closeAccountClick called");
  }

  constructor(
    public service:AccountsService
   )
   {
   
   }
}

