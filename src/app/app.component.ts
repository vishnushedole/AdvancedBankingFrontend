import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  visibility:any = false;
  CustId!:number;
  CustName!:string;
  IconVisibility:any = false;
  constructor(public route:ActivatedRoute)
  {
    console.log("App comp const")
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.CustId= params['Id'];
      this.CustName = params['UserName'];
      console.log(this.IconVisibility)
    });
  
  }
   IconClick()
   {
    this.visibility= !this.visibility;
    console.log(this.visibility);
   }
}
