import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async login(loginDto: LoginDto): Promise<Omit<User, 'password'>> {
    let user = await this.userService.findAuthUser(loginDto);
    return user;
  }
}
