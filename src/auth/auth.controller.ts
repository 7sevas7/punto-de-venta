import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { EnumTypeRegistry } from '@common/pipes/alias.properties';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private jwtService: JwtService) { }

  @HttpCode(HttpStatus.OK)
  @Post()
  async login(@Body(new ValidationPipe(EnumTypeRegistry.LoginDto)) loginDto: LoginDto) {
    let user = await this.authService.login(loginDto);
    const payload = { id: user?.id, username: user?.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @UseGuards(AuthGuard)
  @Get()
  async profile(@Request() req) {
    return req.user;
  }

}
