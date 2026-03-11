import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post()
    async login(@Body() login: { email: string, password: string }) {
        return await this.authService.login(login);
    }
}
