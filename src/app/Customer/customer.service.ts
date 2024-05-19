import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const customerUrl = "https://customerserviceabrg.azurewebsites.net/api/customer/";
const EnquirerUrl = "https://enquirerserviceabrg.azurewebsites.net/";
const localCustomerUrl = "http://localhost:5114/api/Customer/";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) 
  { 

  }
  getAllAccounts(CustId:number)
  {
    return this.http.get(localCustomerUrl+"GetAllAccounts?CustId="+CustId);
  }
  CreateNewAccount(BranchId:number,CustId:number,AccType:number,InitialBalance:number)
  {
    var body = JSON.stringify({"BranchId":BranchId,"CustId":CustId,"AccType":AccType,"InitialBalance":InitialBalance});
    var options={
      headers: { 
        "Content-Type" : "application/json"
      }
    }
    return this.http.post(customerUrl+"CreateAccount",body,options);
  }
  getCustomerById(CustId:number)
  {
    return this.http.get(localCustomerUrl+CustId);
  }
  UpdateCustomer(CustomerDetails:any)
  {
    var body = JSON.stringify(CustomerDetails);
    var options={
      headers: { 
        "Content-Type" : "application/json"
      }
    }
    return this.http.post(localCustomerUrl+"update",body,options);
  }
  getDocumentidbyCustId(CustId:number)
  {
    return this.http.get(`${localCustomerUrl}GetDocumentIds/${CustId}`)
  }
  getDocument(docid:number)
  {
    return this.http.get(`${EnquirerUrl}getDocWithImage/${docid}`);
  }
  updateDocument(model: any) {
    const formData = new FormData();
    formData.append('DocId', model.DocId);
    formData.append('EnqId', model.EnqId);
    formData.append('CustId', model.CustId);
    formData.append('DocType', model.DocType);
    formData.append('IsApproved', model.IsApproved);
    formData.append('DocFile', model.DocFile as Blob);
  
    return this.http.put(`${EnquirerUrl}getDocWithImage/updateDoc/${model.DocId}`, formData);
  }
  GetBranches()
  {
    return this.http.get(`${localCustomerUrl}BranchList`);
  }
}
