import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { pipe } from 'rxjs';
import { CreateUserDto } from 'src/dto/user.dto';
import { TokenServiceService } from '../token-service/token-service.service';

@Controller('token')
export class TokenController {

    constructor(public ser:TokenServiceService){}

    @Post('login')
    validateUser(@Body() user: CreateUserDto) {
        console.log("nest log");
        
        console.log(this.ser.login(user));
        
        return this.ser.login(user);
    }

}
