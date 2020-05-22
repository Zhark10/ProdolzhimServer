import { Controller, Post, Body, ValidationPipe, Query} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInDataDto } from './dto/signin-data.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
        return this.authService.signUp(createUserDto);
    }

    @Post('/singin')
    async signIn(@Body(ValidationPipe) signInData: SignInDataDto) {
        return this.authService.signIn(signInData);
    }
}
