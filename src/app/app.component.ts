import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  num1:number=1
  num2:number=2
  x:number=3
  img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Mg3ZI1Wqa0h_WUpzO_K8XrcQU4LykYNkynmRAiOCw&usqp=CAU&ec=48665701'
  clear()
  {
    this.num1=0
    this.num2=0
    this.x=0
  }
  show:boolean=true;
  clicked:boolean=false;
  result()
  {
    console.log(this.x);
    this.clicked=true;
  }
  add(num1:number,num2:number)
  {
    this.x=this.num1+this.num2
   // alert(this.num1+this.num2) 
  }
  rem(num1:number,num2:number)
  {
    this.x=this.num1%this.num2
   // alert(this.num1+this.num2) 
  }
  pow(num1:number,num2:number)
  {
   this.x=this.num1**this.num2;
  }
  
  sub(num1:number,num2:number)
  {
    this.x=this.num1-this.num2
    //alert(this.num1-this.num2)      
    
  }
 mul(num1:number,num2:number)
  {
    this.x=this.num1*this.num2 
    //alert(this.num1*this.num2) 
  }
  div(num1:number,num2:number)
  {
    this.x=this.num1/this.num2 
    //alert(this.num1/this.num2) 
  }
}
