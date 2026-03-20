import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { EnumTypeRegistry } from '@common/pipes/alias.properties';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard, Public } from './auth.guard';


@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private jwtService: JwtService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  async login(@Body(new ValidationPipe(EnumTypeRegistry.LoginDto)) loginDto: LoginDto) {
    let user = await this.authService.login(loginDto);
    const payload = { id: user?.id, username: user?.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }


  @Get()
  async profile(@Request() req) {
    return req.user;
  }

}
