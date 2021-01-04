import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateUserDto } from "src/dto/user.dto";
import { UserEntity } from "src/entitymodel.ts/entitymodel";
import { EntityRepository, Repository } from "typeorm";
import { sign, verify} from 'jsonwebtoken' ;
import { userInfo } from "os";



@EntityRepository(UserEntity)
export class profileRepository extends Repository<(UserEntity)>{

    public async creater(user:  CreateUserDto): Promise<UserEntity> {
    //   let  a=user.password
    //     user.password=sign({a},'akiva')
        console.log(user.password);
        
    return await this.save(user);
}

public async findAll(): Promise<UserEntity[]> {
    
    return await this.find();
}

public async findOnee(id: number) {
    // return `This action returns a #${id} user`;
    console.log(id,' nest');
    
    return await this.findOne(id)
}



async update1(id:number ,user:CreateUserDto) {
  return  await this.save({...user,id:id});
}


async remove1(id: number ) {
    await UserEntity.delete(id)
    // return `הוסר משתמש ${id} `
}
public async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await UserEntity.find();
    if (user) {
        console.log("user by email", user);
        return user[0];
    }
    throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
}


}







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
