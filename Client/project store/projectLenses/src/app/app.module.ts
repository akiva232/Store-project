import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material.module';
import { HomeComponent } from './home/home/home.component';
import { DataComponent } from './home/data/data.component';
import { ShirtsComponent } from './items/shirts/shirts.component';

import { LogInComponent } from './registration/log-in/log-in.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Shirts1Component } from './model/shirts1/shirts1.component';
import { ProductDetailsComponent } from './cart/product-details/product-details.component';
import { ManegerUsersComponent } from './registration/maneger-users/maneger-users.component';
import { ManegerHomeComponent } from './director/maneger-home/maneger-home.component';
import { ItemsComponent } from './director/items/items.component';
import { AddNewComponent } from './director/items/add-new/add-new.component';
import { PantsComponent } from './items/pants/pants.component';
import { UpdetComponent } from './registration/maneger-users/updet/updet.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { ItemsUpdetManegerComponent } from './itemsUpdet/items-updet-maneger/items-updet-maneger.component';
import { ContactComponent } from './contact/contact/contact.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    ShirtsComponent,
    
    LogInComponent,
    SignInComponent,
    Shirts1Component,
    ProductDetailsComponent,
    ManegerUsersComponent,
    ManegerHomeComponent,
    ItemsComponent,
    AddNewComponent,
    PantsComponent,
    UpdetComponent,
    PaymentComponent,
    ItemsUpdetManegerComponent,
    ContactComponent,

    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    DemoMaterialModule,
  
    // FormControl,
    // FormGroup,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
