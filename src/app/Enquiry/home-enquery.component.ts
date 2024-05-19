import { Component } from '@angular/core';

@Component({
  selector: 'app-home-enquery',
  templateUrl: './home-enquery.component.html',
  styleUrl: './home-enquery.component.css'
})
export class HomeEnqueryComponent {
  visibility:any = false;
  IconClick()
  {
   this.visibility= !this.visibility;
   console.log(this.visibility);
  }
}
