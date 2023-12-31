import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService ){}

//localhost:3000/auth/signup    
    @Post('/signup')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
        return this.authService.signUp(authCredentialsDto);
    }
}
