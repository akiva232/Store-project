import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from 'src/app/service/log-in.service';

@Component({
  selector: 'app-updet',
  templateUrl: './updet.component.html',
  styleUrls: ['./updet.component.css']
})
export class UpdetComponent implements OnInit {

  formdata:FormGroup


  constructor(public log:LogInService) { 
    this.formdata=new FormGroup({
      name:new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      tel:new FormControl('',[Validators.minLength(4),Validators.maxLength(4)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.minLength(4)]),
      // id:new FormControl('')
    
    })}

  
  ngOnInit(): void {
    this.log.dataId.subscribe(val=>{
      console.log("plplplplpl");
      
      console.log(val);
      if(val){
        console.log(val.name,"form");
        
        this.formdata.controls['name'].setValue(val.name)
        this.formdata.controls['lastName'].setValue(val.lastName)
        this.formdata.controls['tel'].setValue(val.tel)
        this.formdata.controls['email'].setValue(val.email)
        this.formdata.controls['password'].setValue(val.name)
        // this.formdata.controls['id'].setValue(val.id)
      
    }
    })
}

save(name,lastName,password,tel,email){
  console.log("nam:",name,lastName,password,tel,email);
  
 this.log.updeate(name,lastName,password,tel,email)
}



}
