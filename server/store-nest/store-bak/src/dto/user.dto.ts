import { IsNumber, IsAlphanumeric, isEmail, IsEmail }from 'class-validator'

import { BaseEntity } from 'typeorm'

export class CreateUserDto extends BaseEntity{

   @IsNumber()
   id:number

   @IsAlphanumeric()
    name:string

    @IsAlphanumeric()
    lastName:string

    @IsNumber()
    tel:number

    @IsEmail()
    email:string

    // @IsAlphanumeric()
    password: string
}


