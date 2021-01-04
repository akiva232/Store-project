import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/log-in.service';

@Component({
  selector: 'app-maneger-users',
  templateUrl: './maneger-users.component.html',
  styleUrls: ['./maneger-users.component.css']
})
export class ManegerUsersComponent implements OnInit {

  constructor(public logIn: LogInService,public rout:Router) { }

  ngOnInit(): void {
  }

   deletD(id:number){
    if(confirm('?האם אתה בטוח')){ 
     this.logIn.delet(id).subscribe( res=>{
        console.log(res);
         this.logIn.refresh()
         console.log("refresh");
         
      })
    }
  
  }


  updet(id){
    console.log('updet',id);
    
    this.logIn.getId(id);
    this.rout.navigate(['/updet']);

  }


  // putE(name,lastName,tel,email,password,id){
  //   this.logIn.putD(name,lastName,tel,email,password,id)
  //   console.log(this.logIn.putD(name,lastName,tel,email,password,id));
    
  // }

}
