import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public shirtS:ShirtsDataService,public rout:Router) { }

  ngOnInit(): void {
  }

  delete(id:number){
    console.log(id);
    
    if(confirm('?האם אתה בטוח')){ 
      this.shirtS.delet(id).subscribe(res=>{
        console.log(res);
        this.shirtS.refresh()
      })  
  }

  }
  updet(id){
    console.log("log",id);
    
     this.shirtS.getId(id)
     this.rout.navigate(['items Updet Meneger'])
  }

}
