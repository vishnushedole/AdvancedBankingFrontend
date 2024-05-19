import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/customer.component';
import { CustomerDetailsComponent } from './Customer/customer-details.component';
import { AccountsHomeComponent } from './accounts/accounts-home.component';
import { HomeEnqueryComponent } from './Enquiry/home-enquery.component';
import { AddEnqueryComponent } from './Enquiry/add-enquery.component';
import { ViewEnqueryComponent } from './Enquiry/view-enquery.component';
import { UpdateEnqueryComponent } from './Enquiry/update-enquery.component';
import { EnqHomeComponent } from './Employee/enq-home.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Login/home.component';
import { authGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {
    
        path:'',
        children:[
          {
            path:'customers',
            canActivate:[authGuard],
            component:CustomerComponent
          },
          {
            path:'account',
            canActivate:[authGuard],
            component:AccountsHomeComponent
          },
          {
            path:'details',
            canActivate:[authGuard],
            component:CustomerDetailsComponent
          },
          {
            path:'enquiry',
            component:AddEnqueryComponent
          },
          {
            path:'ViewEnquiry',
            component:ViewEnqueryComponent
          },
          {
            path:'UpdateEnquiry/:id',
            component:UpdateEnqueryComponent
          },
          {
            path:"Employee",
            canActivate:[authGuard],
            component:EnqHomeComponent
          },
          {
            path:'',
            component:HomeComponent
          }
          // {
          //   path:'Manager',

          // }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
