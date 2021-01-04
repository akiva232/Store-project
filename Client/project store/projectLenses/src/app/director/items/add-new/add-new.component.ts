import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShirtsDataService } from 'src/app/shirts/shirts-data.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(private itemsS:ShirtsDataService) { }

  items:FormGroup

  ngOnInit(): void {

    this.items=new FormGroup({
      type:new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      more:new FormControl('',[Validators.minLength(4),Validators.maxLength(4)]),
      size: new FormControl('',[Validators.required,Validators.email]),
      url:new FormControl('',[Validators.minLength(4)]),
      price: new FormControl('',[Validators.required]),
      sale: new FormControl('',[Validators.required]),
    })

  }

  add(type,name,more,size,url,price,sale){
    console.log(url);
    
this.itemsS.postU(type,name,more,size,url,price,sale)
alert('התווסף בהצלחה')
  }

}
