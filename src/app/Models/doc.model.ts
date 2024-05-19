export class DocModel {
    docType: string;
    docBase64:string; // Assuming docImage is the Blob data for the document image
  
    constructor(docType: string, docBase64:string) {
      this.docType = docType;
      this.docBase64=docBase64;
    }
  }