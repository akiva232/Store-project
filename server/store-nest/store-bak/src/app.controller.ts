import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  root(@Res() response): void {
    console.log(join(__dirname,'..','client/index.html'));
    response.sendFile(join(__dirname,'..','client'));
  }


}
