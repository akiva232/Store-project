import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type NewType = "user"| "admin";

@Entity()
export class UserEntity extends BaseEntity{
    // [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastName: string;
    @Column()
    tel: number;
    @Column()
   email: string;
    @Column()
    password: string;


    @Column({default:'user'})
    roll:NewType
}