import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  currentUser$: BehaviorSubject<any> = new BehaviorSubject(null);

idyoel

  dataLogIn




 dataId:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(private http:HttpClient) {
    http.get("http://localhost:3000/user").subscribe((data)=>{
      console.log(data);
      this.dataLogIn=data
    })
   }

   refresh(){
    this.http.get("http://localhost:3000/user").subscribe((data)=>{
      console.log(data);
      this.dataLogIn=data
    })
   }


 
postU(name,lastName,tel,email,password){
  console.log("post");
  
  let url="http://localhost:3000/user"

this.http.post(url,{
  name:name,
  lastName:lastName,
  tel:tel,
  email:email,
  password:password
})
.toPromise().then((data:any)=>{
    console.log(data);
  })

}


  
getId(id:number){
  this.idyoel =id
  let url1="http://localhost:3000/user"
return this.http.get(url1+'/'+id)

.subscribe((data)=>{
  console.log(data);

  // this.dataLogIn=data
  this.dataId.next(data)
})


}


delet(id:number){
  let url="http://localhost:3000/user"
return this.http.delete(url+'/'+id)
}

updeate(name,lastName,password,tel,email){
  console.log("service",name,lastName,password,tel,email);

  console.log("yoel",this.idyoel);
  
  
  let url1="http://localhost:3000/user"
return this.http.put(url1+'/'+this.idyoel,{
  name,lastName,password,tel,email
}).subscribe()



}

postToken(email,password){
 let url='http://localhost:3000/token/logIn'

return this.http.post(url,{
   email,password
 })
//  .subscribe((data)=>{
//   console.log(data);
//   localStorage.setItem('currentUser',data['email'])
//   // this.dataLogIn=data
//   this.currentUser$.next(data)
// })
 


  
}

// getCurrentUser(): Observable<any> {
//   console.log('storeg',this.currentUser$);
  
//   return this.currentUser$.asObservable()
// }
 

}