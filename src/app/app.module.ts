import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAccountsComponent } from './Customer/all-accounts.component';
import { OpenNewAccountComponent } from './Customer/open-new-account.component';
import { CustomerComponent } from './Customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Common/header.component';
import { FooterComponent } from './Common/footer.component';
import { CustomerDetailsComponent } from './Customer/customer-details.component';
import { AccountsHomeComponent } from './accounts/accounts-home.component';
import { AccountsLeftComponent } from './accounts/accounts-left.component';
import { AccountsRightComponent } from './accounts/accounts-right.component';
import { AddEnqueryComponent } from './Enquiry/add-enquery.component';
import { UpdateEnqueryComponent } from './Enquiry/update-enquery.component';
import { ViewEnqueryComponent } from './Enquiry/view-enquery.component';
import { HomeEnqueryComponent } from './Enquiry/home-enquery.component';
import { LoadingSpinnerComponent } from './Enquiry/loding-spinner.component';
import { EnqDetailsComponent } from './Employee/enq-details.component';
import { EnqHomeComponent } from './Employee/enq-home.component';
import { EnqListComponent } from './Employee/enq-list.component';
import { LoginComponent } from './Login/login.component';
import { RightComponent } from './Login/right.component';
import { HomeComponent } from './Login/home.component';
import { CarouselComponent } from './Login/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    AllAccountsComponent,
    OpenNewAccountComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailsComponent,
    AccountsHomeComponent,
    AccountsLeftComponent,
    AccountsRightComponent,
    AddEnqueryComponent,
    UpdateEnqueryComponent,
    ViewEnqueryComponent,
    HomeEnqueryComponent,
    LoadingSpinnerComponent,
    EnqDetailsComponent,
    EnqHomeComponent,
    EnqListComponent,
    LoginComponent,
    RightComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
