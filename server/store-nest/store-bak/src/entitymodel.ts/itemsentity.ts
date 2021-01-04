import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class ItemsEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    size: string;
    @Column()
    more :string;
    @Column()
   price: number;
    @Column()
    sale?: number;
    @Column()
   url: string;

   @Column()
   type: string;
    
}