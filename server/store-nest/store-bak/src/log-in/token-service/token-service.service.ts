import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/user.dto';
import { UserServiceService } from 'src/user/user-service/user-service.service';


@Injectable()
export class TokenServiceService {

    constructor(public usersService: UserServiceService,private jwtService:JwtService){}

    async validateUser(signIn: CreateUserDto) {
        const { email,password } = signIn
        const user = await this.usersService.findByEmail(email,password);
        if (user) {

            const { password, ...result } = user;
            return result;
        }
        return false
    }

    async login(login: CreateUserDto) {
        const user = await this.validateUser(login);
        if(user){
        
        const payload = {role: 'user',  email: user.email, id: user.id };
        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
        };
    }
    }
    
}
