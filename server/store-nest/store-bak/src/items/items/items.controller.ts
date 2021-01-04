import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ItemsUserDto } from 'src/dto/items.dto';
import { ItemsService } from 'src/items-service/items/items.service';

@Controller('items')
export class ItemsController {

    constructor(private itemsS: ItemsService ) {}
    @Post()
    create(@Body() itemsDto: ItemsUserDto) {
      console.log("post")
      console.log(itemsDto);
      return this.itemsS.create(itemsDto)
      
    }
    @Get()
    findAll() {
      return this.itemsS.findAll();
    }
    @Get(':id')
    findOne(@Param('id',ValidationPipe) id: string) {
      // throw new BadRequestException();
      return this.itemsS.findOne(+id);
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    //   return this.rep.update1(+id, createUserDto);
    // }

    @Put(':id')
    update(@Param('id') id: string, @Body() itemsDto:ItemsUserDto) {
      return this.itemsS.update(+id, itemsDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemsS.remove(+id);
    }
}
