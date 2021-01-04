import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ItemsUserDto } from 'src/dto/items.dto';
import { ItemsEntity } from 'src/entitymodel.ts/itemsentity';
import { profileRepository } from 'src/profile.repository/profile';
import { Any } from 'typeorm';

@Injectable()
export class ItemsService {
   
    



        public async create(items:  ItemsUserDto): Promise<ItemsEntity> {
            console.log(items);
            
        return await ItemsEntity.save(items);
    }
    public async findAll(): Promise<ItemsEntity[]> {
        return await ItemsEntity.find();
    }
    public async findOne(id: number) {
        // return `This action returns a #${id} user`;
        return await ItemsEntity.findOne(id)
    }

    async update(id:number ,items:ItemsUserDto) {
        return  await ItemsEntity.update(id,{...items});
      }
      


    //  async  update(id: number ,items:ItemsUserDto) {
    //   return  await ItemsEntity.save({...items,id});
       
    // }
    async remove(id: number ) {
        await ItemsEntity.delete(id)
        // return `הוסר משתמש ${id} `
    }
    public async findByEmail(email: string): Promise<ItemsEntity | null> {
        const user = await ItemsEntity.find();
        if (user) {
            console.log("user by email", user);
            return user[0];
        }
        throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
    }
}
