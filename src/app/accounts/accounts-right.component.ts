import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { AccountsService } from './accounts.service';
import { FormBuilder } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-accounts-right',
  templateUrl: './accounts-right.component.html',
  styleUrl: './accounts-right.component.css'
})
export class AccountsRightComponent {
  heading:string ="View Details";

  BeneficiaryForm:any;

  FundTransferForm:any;

  CheckBookForm:any;

  @Input("actionType")
  actionType!:string;
  
  @Input("viewDetails")
  viewDetails!:any;

  @Input("Transactions")
  Transactions : any;
  
  @Output("ApplyForCheckbook")
  ApplyForCheckbook:EventEmitter<void>=new EventEmitter<void>();

  @Input("AccId")
  AccId!: number;

  @Input("BeneficiaryList")
  BeneficiaryList:any;

  @Output("Addbeneficiary")
  clickAddbeneficiary: EventEmitter<string>=new EventEmitter<string>();
 
  @Output("FundTransfer")
  FundTransfer:EventEmitter<any>=new EventEmitter<any>();
  
  @Output("closeAccount")
  closeAccount:EventEmitter<void>=new EventEmitter<void>();

  closeAccountFn()
  {
    this.closeAccount.emit();
    console.log("closeAccountClick called");
  }  
  ApplyForCheckBook()
  {
    this.ApplyForCheckbook.emit();
    console.log("ApplyforCheckBook() called");
  }

  generatePdf() {
    const element = document.getElementById('tableToExport')!;
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('bank_statement.pdf');
    });
  }

  
  // fundTransferClick(FundTransfer:any)
  // {
  //    console.log(FundTransfer);
  //    this.clickFundTransfer.emit(FundTransfer);
  //    console.log("fundTranferClick() called");
  // }
  fundTransferClick() {
    // Check if the form is valid before proceeding
    if (this.FundTransferForm.valid) {
        // Emit the form value to the parent component
        console.log(this.FundTransferForm.value);
        this.FundTransfer.emit(this.FundTransferForm.value);
        console.log("Fund Transfer Form Submitted:", this.FundTransferForm.value);
    } else {
        console.log("Invalid Form. Please fill all required fields.");
    }
}

  addBeneficiaryClick(Beneficiary:any)
  {
    console.log(Beneficiary);
      this.clickAddbeneficiary.emit(Beneficiary.BeneficiaryId);
      console.log("AddBeneficiaryClick() called");
      
     // Beneficiary.preventDefault();
  }


  
  constructor(
    public service:AccountsService,
    private fb:FormBuilder
   )
   {
    this.BeneficiaryForm = this.fb.group({
      BeneficiaryId:['']});
      this.FundTransferForm=this.fb.group({
        BeneficiaryId:[''],Amount:['']
      })
      this.CheckBookForm=this.fb.group({});


      if(this.actionType=="viewDetails")
      {
        console.log("viewDetails Api");
      
      }
      else{
        console.log("other api called");
      }
   
   }


}
