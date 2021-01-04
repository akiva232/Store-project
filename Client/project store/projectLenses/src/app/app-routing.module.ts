import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './cart/product-details/product-details.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AddNewComponent } from './director/items/add-new/add-new.component';
import { ItemsComponent } from './director/items/items.component';
import { ManegerHomeComponent } from './director/maneger-home/maneger-home.component';
import { DataComponent } from './home/data/data.component';
import { HomeComponent } from './home/home/home.component';
import { PantsComponent } from './items/pants/pants.component';
import { ShirtsComponent } from './items/shirts/shirts.component';
import { ItemsUpdetManegerComponent } from './itemsUpdet/items-updet-maneger/items-updet-maneger.component';
import { Shirts1Component } from './model/shirts1/shirts1.component';
import { PaymentComponent } from './payment/payment/payment.component';

import { LogInComponent } from './registration/log-in/log-in.component';
import { ManegerUsersComponent } from './registration/maneger-users/maneger-users.component';
import { UpdetComponent } from './registration/maneger-users/updet/updet.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';



const routes: Routes = [
      {path:'',component:HomeComponent,
    children:[
      {path:'',component:DataComponent},
      {path:'חולצות', component:ShirtsComponent},
    {path:'משתמש רשום', component:LogInComponent },
    {path:"sign-in", component:SignInComponent},
    {path:"big",component:Shirts1Component},
    {path:"cart",component:ProductDetailsComponent},
    {path:"maneger users",component:ManegerUsersComponent},
    {path:"home maneger",component:ManegerHomeComponent},
    {path:"item maneger",component:ItemsComponent},
    {path:"add items",component:AddNewComponent},
    {path:"pants",component:PantsComponent},
    {path:"updet",component:UpdetComponent},
    {path:"payment",component:PaymentComponent},
    {path:"items Updet Meneger",component:ItemsUpdetManegerComponent},
    {path:"Contact",component:ContactComponent},



    
    
 
    ]}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule { }
