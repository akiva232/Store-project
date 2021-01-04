import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { LogInService } from 'src/app/service/log-in.service';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-shirts1',
  templateUrl: './shirts1.component.html',
  styleUrls: ['./shirts1.component.css']
})
export class Shirts1Component implements OnInit {
  currentUser
// mn:any
sizeI:string
  constructor(public dataS: ShirtsDataService,private route:Router,public cart: CartService,private router:Router,public log:LogInService) { 
    

  }

data
  ngOnInit(): void {
    
this.dataS.dataId.subscribe(data=>{
  this.data=data
  console.log(data);
  
})

  }


 add(sd){
  
 
  this.sizeI
  let a=sd
  a.size=this.sizeI
  console.log(a);
    this.cart.cart.push(a)
    console.log(this.cart.cart);
       
    this.cart.together+=parseInt(sd.price)
    this.router.navigate(['cart'])
    
    
    window.alert('התווסף לסל')
  
 }

  
}
