import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) { }

  //For login 
  async login(logindto: LoginDto): Promise<Omit<User, 'password'>> {
    let user = await this.userModel
      .findOne({ isActive: true, email: logindto.email })
      .select('-createAt -updateAt')
      .exec();
    if (!user) throw new NotFoundException('Usuario no encontrado');
    let isMatch = await bcrypt.compare(logindto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user.toObject();
    return result;
  }

}
