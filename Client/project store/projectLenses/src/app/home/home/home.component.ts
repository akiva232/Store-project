import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/log-in.service';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  datarr=[]
  constructor(public router:Router,public logI:LogInService,public data:ShirtsDataService) { }

 re
  ngOnInit(): void {
this.logI.currentUser$.subscribe(re=>{
  this.re=re
console.log(re);

})
   
   
  }
 
  

  link(){
     this.router.navigate(['/חולצות'])
 
  }

  

  logIn(){
    this.router.navigate(['/משתמש רשום'])
  }

 addCart(){
   this.router.navigate(['cart'])
 }

 link2(){
  this.router.navigate(['pants'])
}
}
