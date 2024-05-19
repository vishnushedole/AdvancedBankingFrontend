import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

const accountUrl="http://localhost:5106/api/Account/";
@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) 
  { 

  }
  getAccountById(AccId:number)
  {
    return this.http.get(accountUrl+"details/"+AccId);
  }
  applyForCheckBook(AccId:Number)
  {
    
    var options={
      headers:{
        "Content-Type":"application/json"
      }
    }

    return this.http.put(accountUrl+"passbook/"+AccId,options);
  }
  fundTransfer(AccId:number,BenifitiaryId:number,Amount:number)
  {
    var body = JSON.stringify({"Accid":AccId,"BenifitiaryId":BenifitiaryId,"Amount":Amount});
    var options={
      headers:{
        "Content-Type":"application/json"
      }
    }
    return this.http.post(accountUrl+"fundtransfer?accId="+AccId+"&benifitiaryId="+BenifitiaryId+"&amount="+Amount,body,options);
    
  }
  accountStatement(AccId:number)
  {
    return this.http.get(accountUrl+"transactionlist/"+AccId);
  }
  benifitiaryList(AccId:number)
  {
    return this.http.get(accountUrl+"Benifitiarylist/"+AccId);
  }
  addBenifitiary(AccId:number,BenifitiaryId:string)
  {
    var body = JSON.stringify({"Accid":AccId,"BenifitiaryId":BenifitiaryId});
    var options={
      headers:{
        "Content-Type":"application/json"
      }
    }
    return this.http.post(accountUrl+"addbenifitiary?accId="+AccId+"&benifitiaryId="+BenifitiaryId,body,options);
    

  }
  closeAccount(AccId:number)
  {
    var options={
      headers:{
        "Content-Type":"application/json"
      }
    }
    return this.http.delete(accountUrl+"delete/"+AccId);
  }
}
