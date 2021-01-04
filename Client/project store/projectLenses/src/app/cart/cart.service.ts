import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  cart=[]
  
  
  together=0;

  constructor() { }

  getItems(){
    return this.cart
  }
 
  clearCart(){
    this.cart=[]
    
    return this.cart
  }
// sum=0
//   count(){

//     console.log("product");
//     for(let i in this.cart){
//             console.log(i);
//             this.sum= parseInt(i)+1
//           console.log(this.count);
//     }
//     return this.sum
     
//   }

  // minus(){

  //   console.log("product minus");
  //   for(let i in this.cart){
  //           console.log(i);
  //           this.sum= parseInt(i)+1
  //         console.log(this.count);
  //   }
    
  //   return this.sum
     
  // }

}
//  count=0
//   counter(){
//     console.log("product");
//     for(let i in this.items){
//       console.log(i);
//       this.count= parseInt(i)+1
//     console.log(this.count);
    
         
//     }
//     return  this.count
    
//   }