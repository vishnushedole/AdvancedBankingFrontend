import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './accounts-home.component.html',
  styleUrl: './accounts-home.component.css'
})
export class AccountsHomeComponent implements OnInit {

  actionType: string = "viewDetails";

  AccId: number = 10000000;

  Transactions: any = [{
    TId: 1,
    SrcId: 1,
    DestId: 2,
    Amount: 100
  }, {
    TId: 2,
    SrcId: 1,
    DestId: 3,
    Amount: 100
  }];


  BeneficiaryList: any;

  viewDetails: any;


  visibility: any = false;
  IconVisibility: any = true;
  CustId: any;
  UserName:any;
  IconClick() {
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }
  clickViewDetails() {
    this.actionType = "viewDetails";
    this.service.getAccountById(this.AccId).subscribe(Response => {
      this.viewDetails = Response;
      console.log(this.viewDetails);
    });

    console.log(this.actionType);
  }
  clickApplyForCheckbook() {

    this.actionType = "applyForCheckbook";

  }
  ApplyForCheckbook() {
    this.service.applyForCheckBook(this.AccId).subscribe(Response => {
      this.actionType = "viewDetails";
      console.log(this.viewDetails);
    })
  }
  clickFundTransfer() {

    this.actionType = "fundTransfer";
    this.service.benifitiaryList(this.AccId).subscribe((ResponseTwo: any) => {


      this.BeneficiaryList = [];
      console.log(ResponseTwo['accountId']);

      this.BeneficiaryList = ResponseTwo['accountId'];
      this.actionType = "fundTransfer";
    })

  }
  FundTransfer(FundTransfer: any) {
    console.log(FundTransfer);
    this.service.fundTransfer(this.AccId, FundTransfer.BeneficiaryId, FundTransfer.Amount).subscribe(
      Response => {
        this.actionType = "checkBalance";
      }
    )
    console.log(this.actionType);
    console.log(FundTransfer);
  }
  clickAccountStatements() {

    this.actionType = "accountStatements";
    this.service.accountStatement(this.AccId).subscribe(
      Response => {
        this.Transactions = Response;
        console.log(this.Transactions);
      }
    )
    console.log(this.actionType);
  }
  clickCheckBalance() {

    this.actionType = "checkBalance";
    this.service.getAccountById(this.AccId).subscribe(Response => {
      this.viewDetails = Response;
      console.log(this.viewDetails);
    });
    console.log(this.actionType);
  }
  clickAddbeneficiary() {
    this.actionType = "addBeneficiary";

  }
  Addbeneficiary(benificiaryId: string) {
    this.service.addBenifitiary(this.AccId, benificiaryId).subscribe(
      Response => {
        this.service.benifitiaryList(this.AccId).subscribe((ResponseTwo: any) => {
          this.BeneficiaryList = [];
          this.BeneficiaryList = ResponseTwo['accountId'];
          this.actionType = "fundTransfer";

          this.actionType = "fundTransfer";
        })

      }
    )
    console.log(this.actionType);
    console.log(benificiaryId);
  }
  clickCloseAccount() {
    this.actionType = "closeAccount";

  }
  closeAccount() {
    this.service.closeAccount(this.AccId).subscribe(Response => {

    })
    console.log(this.actionType);
  }
  constructor(
    public service: AccountsService,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      const id = params['Id'];
      this.AccId = id;
      this.CustId = params['CustId'];
      this.UserName = params['UserName'];
    });
  }
  ngOnInit(): void {
    this.service.getAccountById(this.AccId).subscribe(Response => {
      this.viewDetails = Response;
      console.log(this.viewDetails);
    });
  }


}
