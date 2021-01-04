import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/log-in.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


inputMail
inputPassword


formdata:FormGroup
  validatingForm: any;

  constructor(public logIn:LogInService,private router:Router) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.minLength(4)])
    })

    this.inputMail=document.querySelectorAll('#email')
    this.inputPassword=document.querySelectorAll('#password')
  }

  logIn1(email,password){
   console.log(email,password);
  
  this.logIn.postToken(email,password).subscribe(val=>{
    localStorage.setItem('currentUser',val['email'])
    // localStorage.setItem('roll',val['roll'])
  this.logIn.currentUser$.next(val['roll'])
    if(val){
      this.router.navigate([''])
    }else{
      alert("no")
    }
  })
}

  signIn(){
    this.router.navigate(['sign-in'])
  }


}
