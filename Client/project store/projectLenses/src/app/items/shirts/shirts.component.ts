import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

 
 
 
   
  constructor(public service: ShirtsDataService,private raut:Router) {
   }

  ngOnInit(): void {
    
  }
  
arr(){
 let datarr=[]
      console.log('arr');
      
for(let i of this.service.products){
  console.log("for", i.type);
  
  if(i.type==="חולצה"){
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
  this.service.getId(id)
//  this.service.big=this.service.products[id-1]
//  console.log(
//   this.service.big);
    this.raut.navigate(['big'])
 
}

}
