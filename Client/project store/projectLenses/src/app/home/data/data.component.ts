import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Data1Service } from 'src/app/service/data1.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  constructor(private s:Data1Service ) {
      
   }

  ngOnInit(){
     
  }

  getGallery(){
 
  return this.s.getList()
}
}
