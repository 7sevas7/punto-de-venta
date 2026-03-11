import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async login(loginDto: LoginDto) {
        return await this.userService.findOneFilter(loginDto);
    }
}
