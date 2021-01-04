import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-items-updet-maneger',
  templateUrl: './items-updet-maneger.component.html',
  styleUrls: ['./items-updet-maneger.component.css']
})
export class ItemsUpdetManegerComponent implements OnInit {



  formdata:FormGroup


  constructor(public log:ShirtsDataService,public rout:Router) { 
    this.formdata=new FormGroup({
      items:new FormControl(''),
      name: new FormControl(''),
     more:new FormControl(''),
      size: new FormControl(''),
      price:new FormControl(''),
      sale:new FormControl(''),
      url:new FormControl(''),
      // id:new FormControl('')
    
    })}

  
  ngOnInit(): void {
    this.log.dataId.subscribe(val=>{
      console.log("plplplplpl");
      
      console.log(val);
      if(val){
        console.log(val,"form");
        this.formdata.controls['items'].setValue(val.items)
        this.formdata.controls['name'].setValue(val.name)
        this.formdata.controls['more'].setValue(val.more)
        this.formdata.controls['size'].setValue(val.size)
        this.formdata.controls['price'].setValue(val.price)
        this.formdata.controls['sale'].setValue(val.sale)
        this.formdata.controls['url'].setValue(val.url)
    }
    })
}

save(name,type,more,size,price,sale,url){
  console.log("save items put:",name,type,more,size,price,sale);
  
this.log.put(name,type,more,size,price,sale,url)
   this.rout.navigate(['item maneger'])
   this.log.refresh()
}

}
