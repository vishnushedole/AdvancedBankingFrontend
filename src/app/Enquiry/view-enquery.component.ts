import { Component } from '@angular/core';
import { EnquiryService } from './enquiry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-enquery',
  templateUrl: './view-enquery.component.html',
  styleUrl: './view-enquery.component.css'
})
export class ViewEnqueryComponent {
  enquiryId: number = 0;
  enquiry: any;
  documents: any;

  constructor(private enquirerService: EnquiryService,public route:ActivatedRoute) { }
  visibility:any = false;
  IconVisibility:any = true;
   IconClick()
   {
    this.visibility= !this.visibility;
    console.log(this.visibility);
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.enquiryId = params['Id']; 
      this.fetchEnquiryDetails();
    });
  }

  fetchEnquiryDetails() {
   
      this.enquirerService.getEnquiry(this.enquiryId).subscribe((enquiry: any) => {
        this.enquiry = enquiry;
        this.loadDocuments();
      }, error => {
        console.error('Error fetching enquiry details:', error.message);
      });
    
  }

  loadDocuments() {
    this.enquirerService.getDocumentidbyEnquiryId(this.enquiryId).subscribe((documentIds: any) => {
      this.documents = [];
      documentIds.forEach((documentId: any, index: any) => {
        this.enquirerService.getDocument(documentId).subscribe((document: any) => {
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
}
