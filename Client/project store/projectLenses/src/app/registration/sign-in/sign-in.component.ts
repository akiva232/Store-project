import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/log-in.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  

  formdata2:FormGroup

  constructor(private logI:LogInService,private router:Router) { }

  ngOnInit(): void {
    this.formdata2=new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      tel:new FormControl('',[Validators.minLength(4),Validators.maxLength(4)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.minLength(4)])
    })
  }
  

  save(name,lastName,tel,email,password){
    
     this.logI.postU(name,lastName,tel,email,password)
  //   let a={name,lastName,tel,email,password}
  // this.logI.dataLogIn.push(a)
  // console.log(this.logI.dataLogIn);
  this.router.navigate([''])
  alert('נרשמת בהצלחה')
  }  

}
