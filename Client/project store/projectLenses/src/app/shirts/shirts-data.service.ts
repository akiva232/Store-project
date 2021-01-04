import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShirtsDataService {

  size=['S','M','L','XL']



  products

  id2
 
  big=[]

  dataId:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(private http:HttpClient) {

    http.get("http://localhost:3000/items").subscribe((data)=>{
      console.log(data);
      this.products=data
      console.log("producs",this.products);
      
    })
    console.log("producs",this.products);
  }

  refresh(){
   this. http.get("http://localhost:3000/items").subscribe((data)=>{
      console.log(data);
      this.products=data
      console.log("producs",this.products);
      
    })
  }
// ser(){
//   for(let i of this.products){
//     console.log("for");
    
//     if(i.type=="חולצה"){
//       console.log("if");
      
//       this.big.push(i.name,i.more,i.price)
//     }
//   }
//   console.log("return");
  
//   return this.big
// }


  addToCart(product){
    this.products.push(product)
  }

  postU(type,name,more,size,url,price,sale){
    console.log("post:", type,name,more,size,url,price,sale );
    
    let url1="http://localhost:3000/items"
  
  this.http.post(url1,{
    type,name,more,size,url,price,sale
  })
  .toPromise().then((data:any)=>{
      console.log(data);
    })
  
  }
  getId(id:number){
    this.id2=id
      let url1="http://localhost:3000/items"
    return this.http.get(url1+'/'+id).subscribe((data)=>{
      console.log(data);
      this.dataId.next(data)
      console.log('fdgr',this.dataId);
  })
  }
delet(id:number){
  let url="http://localhost:3000/items"
  return this.http.delete(url+'/'+id)
}
put(name,type,more,size,price,sale,url){
  let url1="http://localhost:3000/items"
  return this.http.put(url1+'/'+this.id2,{
    name,type,more,size,price,sale,url
  }).subscribe(
  //   data=>{
  //   console.log(data);
    
  // }
  )
}

}