import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  data=[
    {name:'SALE',img:"https://cashcow-cdn.azureedge.net/images/9250065d-b3e6-4caa-9903-1b3ea2bb3d76.webp",topic:'הנחה על כל המוצרים',buttun:'click'},
    {name:'OUTLET',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi703u1ivcm1Ltdg8YaaCpB_6fCgzdj45E2Q&usqp=CAU",topic:'הנחה על כל המוצרים',buttun:'click'},
  ]

  constructor() {
  
}

getList(){
  return this.data;
 }

}