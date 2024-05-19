import {  Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  visibility:any = false;
  selectedLogin:any= true;
  selectedEnquiry:any=false;
  Toggle()
  {
    this.selectedEnquiry = !this.selectedEnquiry;
    this.selectedLogin = !this.selectedLogin;
  }
  IconClick()
  {
   this.visibility= !this.visibility;
   console.log(this.visibility);
  }

  
}
