import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Enquiry } from '../Models/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(
    private http: HttpClient
  ) {

  }
  url = "https://employeeserviceabrg.azurewebsites.net/api/Employee/view-enquiries/"
  newurl = "https://employeeserviceabrg.azurewebsites.net/api/Employee/reject-enquiry"
  private emailUrl = 'https://mailerserviceabrg.azurewebsites.net/SendRejectedMail'
  accepturl = "https://employeeserviceabrg.azurewebsites.net/api/Employee/accept-enquiry";
  acceptMail = "https://mailerserviceabrg.azurewebsites.net/SendCustomerMail";
  customerUrl = "http://localhost:5114/api/customer/";
  getallenquiry(EmpId: any): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(this.url + EmpId).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for handling in the component
      })
    );
  }
  // getenqDetails(EnqId:number){
  //   var filteredList=enquiryList.filter(c=>c.id==EnqId);
  //   if(filteredList.length)
  //     return filteredList[0];
  //   return null;
  // }
  // delete(id:number){
  //   return this.http.delete(`${this.newurl}/${id}`);
  // }
  deleteenq(enquiry: Enquiry): Observable<any> {

    var body = JSON.stringify(enquiry)
    var options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post<any>(`${this.newurl}`, body, options)

  }
  acceptenq(enquiry: Enquiry): Observable<any> {
    var body = JSON.stringify(enquiry)
    var options = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    return this.http.post<any>(`${this.accepturl}`, body, options)
  }

  sendRejectedMail(receiverMail: string, rejectedDocs: string[]) {
    console.log(receiverMail);
    console.log(rejectedDocs);
    const body = {
      ReceiverMail: receiverMail,
      docs: rejectedDocs
    };
    return this.http.post<any>(this.emailUrl, body);
  }
  sendAcceptMail(receiverMail: string, UserId: string, Password: string) {
    console.log(UserId, Password, receiverMail);
    const body = {
      id: UserId,
      password: Password,
      receiverMail: receiverMail
    }
    return this.http.post<any>(this.acceptMail, body);
  }

  createNewCustomer(EnquiryId: any, EmpId: any) {
    const body = {
      "EnquiryId": EnquiryId,
      "EmpId": EmpId
    }
    return this.http.post<any>(this.customerUrl+"CreateCustomer", body);
  }

}
