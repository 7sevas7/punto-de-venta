import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { EnumTypeRegistry } from '@common/pipes/alias.properties';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { JwtService } from '@nestjs/jwt';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private jwtService: JwtService) { }

  @Post()
  async login(@Body(new ValidationPipe(EnumTypeRegistry.LoginDto)) loginDto: LoginDto) {
    let user = await this.authService.login(loginDto);

    const payload = { id: user?.id, username: user?.name };


    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }
}
