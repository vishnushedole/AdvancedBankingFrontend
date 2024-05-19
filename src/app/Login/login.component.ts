import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const AuthUrl = "https://authenticationserviceabrg.azurewebsites.net/";
const localAuthUrl = "http://localhost:5176/";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any;

 
  constructor(private http: HttpClient, private router:Router,private fb:FormBuilder)
  {
        this.loginObj = fb.group({
          username:['',[Validators.required]],
          password:['',[Validators.required]]
        })
  }

  onLogin(UpdatedObj:any)
  {
    console.log(UpdatedObj)
    this.http.post(AuthUrl+'api/Accounts/login', UpdatedObj).subscribe((res:any)=>{
      if(res.token != null)
        {
          
          if(res.roleId == 1)
            {

              this.http.get(localAuthUrl+'api/Accounts/GetCustomerId/'+res.userId).subscribe((res1:any)=>{
                console.log(res1);
                window.sessionStorage.setItem("token",res.token);
                this.router.navigateByUrl('/customers?Id='+res1+"&UserName="+res.username+"&IconVisibility=true");
              })
              
            }
            if(res.roleId == 2)
            {
              this.http.get(localAuthUrl+'api/Accounts/GetEmployeeId/'+res.username).subscribe((res1:any)=>{
                console.log(res1);
                window.sessionStorage.setItem("token",res.token);
                this.router.navigateByUrl('/Employee?Id='+res1.id+"&UserName="+res1.name);
              })
              
            }
        }
      else
      {
        alert("Bad Username or Password")
      }
    })
  }
}
