import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {



  constructor(public ser:ShirtsDataService,public rout:Router) { }

  ngOnInit(): void {
  }

  arr(){
    let datarr=[]
         console.log('arr');
         
   for(let i of this.ser.products){
     console.log("for", i.type);
     
     if(i.type==="מכנסיים"){
       console.log("if",i.type);
       
       datarr.push(i)
     } 
   }
   console.log("return");
   console.log(datarr);
   return datarr
   
   }

   next(id){
    console.log(id);
    this.ser.getId(id)
      this.rout.navigate(['big'])
   }

}
