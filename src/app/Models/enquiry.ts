import { DocModel } from "./doc.model";

export class Enquiry {
    enquiryId: number;
    email: string;
    firstName: string;
    lastName: string;
    addr: string;
    panNo: string;
    aadhaarNo: string;
    phoneNo: string;
    city: string;
    stat: string;
    country: string;
    pinCode: string;
    maritalStatus: string;
    gender: string;
    age: number;
    guardianName: string;
    guardianAccount: string;
    guardianPhoneNo: string;
    guardianEmail: string;
    guardianAadhaar: string;
    isActive: number;
    initialBalance: number;
    accType: number;
    docs: DocModel[];
  
    constructor(data: any) {
      this.enquiryId = data.enquiryId || 0;
      this.email = data.email || '';
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
      this.addr = data.addr || '';
      this.panNo = data.panNo || '';
      this.aadhaarNo = data.aadhaarNo || '';
      this.phoneNo = data.phoneNo || '';
      this.city = data.city || '';
      this.stat = data.stat || '';
      this.country = data.country || '';
      this.pinCode = data.pinCode || '';
      this.maritalStatus = data.maritalStatus || '';
      this.gender = data.gender || '';
      this.age = data.age || 0;
      this.guardianName = data.guardianName || '';
      this.guardianAccount = data.guardianAccount || '';
      this.guardianPhoneNo = data.guardianPhoneNo || '';
      this.guardianEmail = data.guardianEmail || '';
      this.guardianAadhaar = data.guardianAadhaar || '';
      this.isActive = data.isActive || 0;
      this.initialBalance = data.initialBalance || 0;
      this.accType = data.accType || 0;
      this.docs = data.documents || [];
    }
  }
