import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entitymodel.ts/entitymodel';
import { UserServiceService } from './user/user-service/user-service.service';
import { UserController } from './user/user/user.controller';
import { profileRepository } from './profile.repository/profile';
import { ItemsEntity } from './entitymodel.ts/itemsentity';
import { ItemsService } from './items-service/items/items.service';
import { ItemsController } from './items/items/items.controller';
import { TokenController } from './log-in/token/token.controller';
import { TokenServiceService } from './log-in/token-service/token-service.service';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
;




@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    JwtModule.register({secret:'akiva eshed'}),


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'LEAHakiva1',
      database: 'store',
      logging:true,
      entities: [UserEntity,ItemsEntity],
      synchronize: true,
    }),TypeOrmModule.forFeature([UserEntity,profileRepository])
  ],
  controllers: [AppController, UserController, ItemsController, TokenController],
  providers: [AppService, UserServiceService, ItemsService, TokenServiceService],
})
export class AppModule {}
