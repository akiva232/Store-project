import { IsNumber, IsAlphanumeric, isEmail, IsEmail }from 'class-validator'

import { BaseEntity } from 'typeorm'

export class ItemsUserDto extends BaseEntity{

   @IsNumber()
   id:number

   @IsAlphanumeric()
    name:string

    @IsAlphanumeric()
    size:string

    
    @IsAlphanumeric()
    more :string

    @IsNumber()
    price:number

    @IsNumber()
    sale?:number

       
    @IsAlphanumeric()
    url:string

    @IsAlphanumeric()
    type :string

}






