import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/entitymodel.ts/entitymodel';
import { profileRepository } from 'src/profile.repository/profile';
import { Repository } from 'typeorm';

@Injectable()
export class UserServiceService {
//    findByEmail(email: string, password: string) {
//        throw new Error('Method not implemented.');
//    }

   constructor(public rep:profileRepository,@InjectRepository(UserEntity)private userDb:Repository<UserEntity>){}



   public async findByEmail(email: string,password:string): Promise<UserEntity | null> {
    const user = await this.userDb.find({  email:email, password:password });
    console.log(user);
    
    if (user) {
      console.log("user by email",user);
      return user[0];
    }
  
   
    throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
    
  }


    // public async create(user:  CreateUserDto): Promise<UserEntity> {
    //     return await UserEntity.save(user);
    // }
    // public async findAll(): Promise<UserEntity[]> {
    //     return await UserEntity.find();
    // }
    // public async findOne(id: number) {
    //     // return `This action returns a #${id} user`;
    //     return await UserEntity.findOne(id)
    // }
    // public async  update(id: number ,updatefirstName) {
    //   return  await UserEntity.update(id,{userName: updatefirstName});
    //     //  `This action updates a #${id} user`;
    // }
    // async remove(id: number ) {
    //     await UserEntity.delete(id)
    //     return `הוסר משתמש ${id} `
    // }
    // public async findByEmail(email: string): Promise<UserEntity | null> {
    //     const user = await UserEntity.find();
    //     if (user) {
    //         console.log("user by email", user);
    //         return user[0];
    //     }
    //     throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
    // }


}
