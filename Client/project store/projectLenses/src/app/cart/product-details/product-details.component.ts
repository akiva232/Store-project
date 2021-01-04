import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {




  items:any;

sum=0

  constructor(public cartService: CartService,public rout:Router) { }



  ngOnInit(): void {
   this.items=this.cartService.getItems()
 
  }
   
   
 


  Delet(id){
    for(let i=0;i<this.items.length;i++){
       if(this.items[i].id==id){
        this.cartService.together-=parseInt(this.items[i].price)
        this.items.splice(i, 1);

       
        console.log(this.items);
        
       }
       
      }
      
  
  }

  

  emptyCart(){
    let cartStatus = confirm("?האם אתה בטוח שאתה רוצה לרוקן את העגלה");
    if(cartStatus){
     this.items=[]
     this.cartService.together=0
      document.location.href = '';
    }
  }

  
  // counter(){
  //       console.log(this.cartService.count());
  //     this.count= this.cartService.count()
  //     console.log(this.count);
      
  //   return  this.count
    // console.log("product");
    // for(let i in this.items){
    //   console.log(i);
    //   this.count= parseInt(i)+1
    // console.log(this.count);
    
         
    // }
    // return  this.count
    
  

   
  check(){

   }
   
  
 
 
  

  // changeQty(pid,qty,replace){
  //   if(qty !== ''){
  //     qty=parseInt(qty) || 1;
  //     this.items.addToCart(pid,qty,replace);
  //   }else{
  //     this.items.addToCart(pid,1,replace);
  //   }
    
  }





