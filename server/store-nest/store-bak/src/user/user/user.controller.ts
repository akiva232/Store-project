import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { timeStamp } from 'console';
import { CreateUserDto } from 'src/dto/user.dto';
import { RolesGuard } from 'src/gurd/admin.guard';
import { profileRepository } from 'src/profile.repository/profile';
import { UserServiceService } from '../user-service/user-service.service';

@Controller('user')
export class UserController {

    constructor(private readonly usersService: UserServiceService,public rep:profileRepository) {}
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      console.log("post")
      console.log( createUserDto);
      return this.usersService.rep.creater(createUserDto)
      
    }
    @Get()
     // @Roles(Role.User)
    //  @UseGuards(RolesGuard)
    findAll() {
      return this.rep.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ValidationPipe) id: string) {
      // throw new BadRequestException();
      return this.rep.findOnee(+id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
      return this.rep.update1(+id, createUserDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.rep.remove1(+id);
    }

}
