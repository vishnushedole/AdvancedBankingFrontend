import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  Customer: any;
  CustId: any;
  CustomerForm!: FormGroup;
  enquiryId: number = 0;
  enquiry: any;
  documents: any;
  CustName!: string;

  visibility: any = false;
  IconVisibility: any = true;

  constructor(
    private route: ActivatedRoute,
    public service: CustomerService,
    private fb: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      const id = params['Id'];
      this.CustId = id;
      this.CustName = params['UserName'];
      this.service.getCustomerById(this.CustId).subscribe((customer: any) => {
        this.Customer = customer;
        this.initializeForm(customer);
        this.fetchEnquiryDetails(this.Customer.enquiryId);
      });
    });
  }

  initializeForm(customer: any) {
    this.CustomerForm = this.fb.group({
      EnquiryId: [customer.enquiryId],
      Email: [customer.email],
      FirstName: [customer.firstName],
      LastName: [customer.lastName],
      Addr: [customer.addr],
      PanNo: [customer.panNo],
      AadhaarNo: [customer.aadhaarNo],
      PhoneNo: [customer.phoneNo],
      City: [customer.city],
      Stat: [customer.stat],
      Country: [customer.country],
      PinCode: [customer.pinCode],
      MaritalStatus: [customer.maritalStatus],
      Gender: [customer.gender == 'M' ? 'Male' : 'Female'],
      Age: [customer.age],
      GuardianName: [customer.guardianName],
      GuardianAccount: [customer.guardianAccount],
      GuardianPhoneNo: [customer.guardianAccount],
      GuardianEmail: [customer.guardianEmail],
      GuardianAadhaar: [customer.guardianAadhaar],
      isActive: [customer.isActive],
      InitialBalance: [customer.initialBalance],
      AccountType: [customer.accountType == 1 ? 'Savings' : 'Current']
    });
  }

  IconClick() {
    this.visibility = !this.visibility;
    console.log(this.visibility);
  }

  update(updatedCustomer: any) {
    if (updatedCustomer.AccountType == 'Savings')
      updatedCustomer.AccountType = '1';
    else
      updatedCustomer.AccountType = '2';

    if (updatedCustomer.gender == 'Male')
      updatedCustomer.gender = 'M';
    else
      updatedCustomer.gender = 'F';

    this.service.UpdateCustomer(updatedCustomer).subscribe(response => {
      window.location.reload();
    });
  }

  fetchEnquiryDetails(enqId: any) {
    if (enqId) {
      this.enquiryId = enqId;
      this.loadDocuments();
    }
  }

  loadDocuments() {
    this.service.getDocumentidbyCustId(this.CustId).subscribe((documentIds: any) => {
      
      this.documents = [];
      documentIds.forEach((documentId: any, index: any) => {
        this.service.getDocument(documentId).subscribe((document: any) => {
          this.documents.push(document);
          if (index === documentIds.length - 1) {
            console.log(this.documents);
          }
        }, error => {
          console.error('Error fetching document:', error);
        });
      });
    }, error => {
      console.error('Error fetching document IDs:', error);
    });
  }

  onFileChange(event: any, docId: any, enqId: any, custId: any, docType: any, IsApproved: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type.startsWith('image')) {
        var updatedDoc = {
          DocId: docId,
          EnqId: enqId,
          CustId: custId,
          DocType: docType,
          IsApproved: IsApproved,
          DocFile: file
        };
        this.service.updateDocument(updatedDoc).subscribe(res => {
          window.location.reload();
        });
      }
    }
  }
}
