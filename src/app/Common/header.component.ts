import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor()
  {
    console.log(this.IconVisibility);

  }
   @Input("visibility")
   visibility:any;
   
   @Input("UserName")
   UserName!:string;
   
   @Output("IconClick")
   IconClick : EventEmitter<void> = new EventEmitter<void>();
   
   @Input("IconVisibility")
   IconVisibility:any;

   @Input("CustId")
   CustId :any;
   
   IconClickFn()
   {
    console.log(this.visibility);
    this.IconClick.emit();
    console.log(this.visibility);
   }
   Logout()
   {
    window.sessionStorage.clear();
    window.location.reload();
   }
}
